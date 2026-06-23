import Link from 'next/link';
import { services } from '@/lib/services';
import { posts } from '@/lib/posts';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient text-white">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-300">
              Fractional CTO &amp; AI Advisory
            </p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Senior technology leadership, without the full-time overhead.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              TechRightly gives growing companies access to fractional CTOs, AI strategy advisors,
              and solution architects — so the right technical decisions get made, even before you
              need a full-time hire.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="font-heading text-sm uppercase tracking-wider text-teal-300">What we deliver</p>
              <ul className="mt-4 space-y-3 text-white/85">
                {services.map((s) => (
                  <li key={s.slug} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-6 py-8 text-sm text-slate-500">
          <p className="font-medium text-navy-900">Built for founders, operators, and investors who need senior technical judgment fast.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>Startups &amp; scale-ups</span>
            <span>Investors &amp; acquirers</span>
            <span>Operators modernizing legacy systems</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Services"
          title="Five ways to get senior technical judgment, on your terms"
          description="Engage the level of involvement that matches where your company is today — and change it as you grow."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Why TechRightly */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-3xl font-bold text-teal-400">01</p>
            <h3 className="mt-3 font-heading text-lg font-semibold">Senior judgment, not junior delivery</h3>
            <p className="mt-2 text-white/70">
              Every engagement is led by senior technical leadership — not a delivery team learning your business
              on the clock.
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl font-bold text-teal-400">02</p>
            <h3 className="mt-3 font-heading text-lg font-semibold">Recommendations with the trade-offs shown</h3>
            <p className="mt-2 text-white/70">
              We explain why, not just what — so your team can own the decision after we&apos;re gone.
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl font-bold text-teal-400">03</p>
            <h3 className="mt-3 font-heading text-lg font-semibold">Scoped engagements, no lock-in</h3>
            <p className="mt-2 text-white/70">
              Fixed cadence, fixed scope, clear deliverables. Scale up, scale down, or graduate to a full-time hire
              whenever it makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="container-page py-20">
        <SectionHeading eyebrow="Insights" title="Latest from the blog" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">{post.category}</span>
              <h3 className="mt-2 font-heading text-base font-semibold text-navy-900 group-hover:text-teal-700">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-teal-600">Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Not sure where to start? Let&apos;s talk for 30 minutes.
          </h2>
          <p className="max-w-xl text-navy-900/80">
            We&apos;ll help you figure out whether the gap you&apos;re feeling is a leadership gap, an architecture
            gap, or something else entirely — no pitch, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-navy-900 bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-transparent hover:text-navy-900"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
