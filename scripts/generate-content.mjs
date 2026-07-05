/**
 * TechRightly AI Content Pipeline
 *
 * Usage:
 *   node scripts/generate-content.mjs
 *
 * Requires ANTHROPIC_API_KEY in .env.local (loaded automatically via dotenv).
 *
 * What it does:
 *   1. Fetches recent articles from tech/AI RSS feeds
 *   2. Asks Claude to write a TechRightly-style blog post + social captions
 *   3. Saves the draft to /content/drafts/ for review in the admin panel
 *
 * After running, open http://localhost:3000/admin to review and publish drafts.
 */

import Parser from 'rss-parser';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DRAFTS_DIR = path.join(ROOT, 'content', 'drafts');

// Load .env.local manually (dotenv isn't installed, use basic parsing)
try {
  const env = await fs.readFile(path.join(ROOT, '.env.local'), 'utf-8');
  for (const line of env.split('\n')) {
    const [key, ...vals] = line.split('=');
    if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
  }
} catch { /* .env.local may not exist */ }

const RSS_SOURCES = [
  { name: 'Anthropic', url: 'https://www.anthropic.com/rss.xml' },
  { name: 'OpenAI', url: 'https://openai.com/blog/rss.xml' },
  { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/feed/' },
  { name: 'AWS Blog', url: 'https://aws.amazon.com/blogs/aws/feed/' },
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage?q=AI+LLM+CTO+architecture&points=50' },
];

const SYSTEM_PROMPT = `You are the content writer for TechRightly, a fractional CTO and AI advisory consulting brand.
Voice: confident, plain-spoken, senior-advisor. No hype, no jargon for its own sake. Back every recommendation with reasoning.
Audience: founders, technical leaders, and investors — people who make technology decisions at growing companies.
Services: Fractional CTO, AI Strategy & Advisory, Solution Architecture, Digital Transformation, Technical Due Diligence.`;

async function fetchArticles() {
  const parser = new Parser({ timeout: 8000 });
  const articles = [];

  for (const source of RSS_SOURCES) {
    try {
      const feed = await parser.parseURL(source.url);
      for (const item of feed.items.slice(0, 3)) {
        articles.push({
          source: source.name,
          title: item.title || '',
          summary: (item.contentSnippet || item.summary || '').slice(0, 500),
          url: item.link || '',
          pubDate: item.pubDate || '',
        });
      }
      console.log(`✓ ${source.name}: ${feed.items.length} articles`);
    } catch (e) {
      console.warn(`  ✗ ${source.name}: ${e.message}`);
    }
  }

  return articles;
}

function pickBestArticle(articles) {
  // Prefer AI/CTO/architecture topics; skip anything already processed today
  const keywords = ['ai', 'agent', 'cto', 'llm', 'cloud', 'architecture', 'startup', 'model', 'openai', 'anthropic'];
  const scored = articles.map(a => {
    const text = (a.title + ' ' + a.summary).toLowerCase();
    const score = keywords.reduce((n, kw) => n + (text.includes(kw) ? 1 : 0), 0);
    return { ...a, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0];
}

async function generateDraft(article, anthropic) {
  const userPrompt = `Write a TechRightly blog post commentary based on this article:

Title: ${article.title}
Source: ${article.source}
Summary: ${article.summary}
URL: ${article.url}

Requirements:
- 400–600 words, in markdown (use ## for subheadings)
- Add TechRightly's own perspective — don't just summarise the article
- Connect to at least one of our services if relevant
- End with one subtle, non-pushy call to action (e.g. "If you're working through this for your business, that's the kind of conversation we're built for.")
- Write a LinkedIn caption (150–200 words) for this post
- Write an X/Twitter caption (strict max 280 characters) for this post

Respond with ONLY valid JSON in this exact format:
{
  "title": "Post title",
  "category": "AI Strategy",
  "excerpt": "One sentence, max 160 chars",
  "content": "Full markdown post content",
  "linkedinCaption": "LinkedIn post text",
  "xCaption": "X post text (max 280 chars)",
  "sourceUrl": "${article.url}"
}

Category must be one of: Fractional CTO | AI Strategy | Solution Architecture | Digital Transformation | Technical Due Diligence`;

  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: userPrompt }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  const jsonMatch = text.match(/\{[\s\S]*}/);
  if (!jsonMatch) throw new Error('Claude did not return valid JSON');
  return JSON.parse(jsonMatch[0]);
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

async function saveDraft(draft, sourceArticle) {
  await fs.mkdir(DRAFTS_DIR, { recursive: true });

  const date = new Date().toISOString().split('T')[0];
  const slug = toSlug(draft.title);
  const filename = `${date}-${slug}.md`;

  // Escape quotes in YAML string values
  const safe = (s) => (s || '').replace(/"/g, '\\"');

  const linkedinLines = (draft.linkedinCaption || '').split('\n').map(l => '  ' + l).join('\n');
  const fileContent = `---
slug: ${slug}
title: "${safe(draft.title)}"
excerpt: "${safe(draft.excerpt)}"
category: "${safe(draft.category)}"
date: "${date}"
readTime: "5 min read"
status: draft
sourceUrl: "${safe(draft.sourceUrl || sourceArticle.url)}"
xCaption: "${safe(draft.xCaption)}"
linkedinCaption: |
${linkedinLines}
---

${draft.content}
`;

  await fs.writeFile(path.join(DRAFTS_DIR, filename), fileContent, 'utf-8');
  return filename;
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('\nError: ANTHROPIC_API_KEY not found.');
    console.error('Add it to .env.local: ANTHROPIC_API_KEY=your-key-here');
    console.error('Get a key at https://console.anthropic.com\n');
    process.exit(1);
  }

  console.log('\nTechRightly content pipeline starting...\n');

  console.log('Fetching articles from RSS sources...');
  const articles = await fetchArticles();
  console.log(`\nFound ${articles.length} articles total.`);

  if (articles.length === 0) {
    console.log('No articles found. Try again later.');
    return;
  }

  const article = pickBestArticle(articles);
  console.log(`\nSelected: "${article.title}" (${article.source})`);

  console.log('\nGenerating draft with Claude...');
  const anthropic = new Anthropic({ apiKey });
  const draft = await generateDraft(article, anthropic);

  const filename = await saveDraft(draft, article);
  console.log(`\n✓ Draft saved: content/drafts/${filename}`);
  console.log('\nReview and publish at: http://localhost:3000/admin\n');
}

main().catch((e) => {
  console.error('\nPipeline error:', e.message);
  process.exit(1);
});
