import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { approveDraft, rejectDraft } from './actions';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin | TechRightly',
};

type Draft = {
  filename: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  sourceUrl: string;
  linkedinCaption: string;
  xCaption: string;
  content: string;
};

function getDrafts(): Draft[] {
  const draftsDir = path.join(process.cwd(), 'content', 'drafts');
  if (!fs.existsSync(draftsDir)) return [];
  const files = fs.readdirSync(draftsDir).filter((f) => f.endsWith('.md'));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(draftsDir, filename), 'utf-8');
    const { data, content } = matter(raw);
    return {
      filename,
      slug: data.slug || '',
      title: data.title || filename,
      excerpt: data.excerpt || '',
      category: data.category || '',
      date: data.date || '',
      sourceUrl: data.sourceUrl || '',
      linkedinCaption: data.linkedinCaption || '',
      xCaption: data.xCaption || '',
      content: content.trim(),
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function AdminPage() {
  const drafts = getDrafts();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-navy-900 text-white px-6 py-5">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div>
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider">TechRightly</p>
            <h1 className="font-heading text-xl font-bold mt-0.5">Content admin</h1>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-sm">{drafts.length} draft{drafts.length !== 1 ? 's' : ''} pending review</p>
            <p className="text-white/40 text-xs mt-0.5">Local dev only — push to git to publish</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Empty state */}
        {drafts.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <p className="text-slate-500 text-lg font-medium">No drafts pending</p>
            <p className="text-slate-400 text-sm mt-2">Run the pipeline to generate new content:</p>
            <code className="mt-3 block bg-slate-100 rounded-lg px-4 py-3 text-sm text-slate-700 font-mono">
              node scripts/generate-content.mjs
            </code>
          </div>
        )}

        {/* Draft cards */}
        <div className="space-y-8">
          {drafts.map((draft) => (
            <div key={draft.filename} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">

              {/* Card header */}
              <div className="px-6 pt-5 pb-4 border-b border-slate-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">{draft.category}</span>
                    <h2 className="font-heading text-xl font-bold text-navy-900 mt-1">{draft.title}</h2>
                    <p className="text-slate-500 text-sm mt-1">{draft.excerpt}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 mt-1">
                    <form action={async () => { 'use server'; await approveDraft(draft.filename); }}>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-navy-900 font-semibold text-sm rounded-md transition-colors"
                      >
                        Approve & publish
                      </button>
                    </form>
                    <form action={async () => { 'use server'; await rejectDraft(draft.filename); }}>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-800 font-semibold text-sm rounded-md transition-colors"
                      >
                        Reject
                      </button>
                    </form>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                  <span>{draft.date}</span>
                  {draft.sourceUrl && (
                    <>
                      <span>·</span>
                      <a href={draft.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline truncate max-w-xs">
                        Source article ↗
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Blog post preview */}
              <details className="group">
                <summary className="px-6 py-3 text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50 select-none flex items-center justify-between">
                  <span>Blog post preview</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                  <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-mono bg-slate-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                    {draft.content}
                  </div>
                </div>
              </details>

              {/* Social captions */}
              <details className="group">
                <summary className="px-6 py-3 text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-50 select-none flex items-center justify-between border-t border-slate-100">
                  <span>Social captions</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 pb-5 pt-4 border-t border-slate-100 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">LinkedIn</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {draft.linkedinCaption || '—'}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">X · {(draft.xCaption || '').length}/280 chars</p>
                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 whitespace-pre-wrap">
                      {draft.xCaption || '—'}
                    </div>
                  </div>
                </div>
              </details>

            </div>
          ))}
        </div>

        {drafts.length > 0 && (
          <p className="text-center text-slate-400 text-sm mt-8">
            After approving, run <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">git push</code> in IntelliJ to publish to the live site.
          </p>
        )}
      </div>
    </div>
  );
}
