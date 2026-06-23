import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts, getPostBySlug } from '@/lib/posts';
import PostContent from '@/components/PostContent';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | TechRightly`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="py-16">
      <div className="container-page max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold text-teal-600">← Back to blog</Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-teal-600">{post.category}</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
          <span>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-10">
          <PostContent content={post.content} />
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="font-heading text-lg font-semibold text-navy-900">
            Want to talk through how this applies to your company?
          </h3>
          <Link href="/contact" className="btn-primary mt-4">Book a Free Consultation</Link>
        </div>
      </div>
    </article>
  );
}
