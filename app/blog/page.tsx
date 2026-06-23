import Link from 'next/link';
import { posts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | TechRightly',
  description: 'AI, agentic AI, cloud architecture, and CTO-level insights from TechRightly.',
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">Blog</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
            AI and technology insights for technical leaders.
          </h1>
          <p className="mt-4 max-w-xl text-white/75">
            Practical takes on AI strategy, architecture, and technical leadership — no hype, no vendor pitches.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">{post.category}</span>
                <h2 className="mt-2 font-heading text-lg font-semibold text-navy-900 group-hover:text-teal-700">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
