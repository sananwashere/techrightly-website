import Link from 'next/link';
import { products, advisory } from '@/lib/services';
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
              Independent Technical Judgment
            </p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              You shouldn&apos;t need to be technical to know if your technology is good.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              TechRightly gives founders, operators, and investors an honest, senior second opinion on
              their technology — backed by 25+ years of building and scaling systems and teams. Start
              with a fixed-price audit; keep us as your fractional CTO when you&apos;re ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">See Fixed-Price Audits</Link>
              <Link href="/contact" className="btn-secondary">Book a Free Consultation</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="font-heading text-sm uppercase tracking-wider text-teal-300">Start here</p>
              <ul className="mt-4 space-y-4 text-white/85">
                {products.map((s) => (
                  <li key={s.slug} className="flex items-start justify-between gap-4">
                    <span className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{s.title}</span>
                    </span>
                    {s.price && <span className="shrink-0 text-sm font-semibold text-teal-300">{s.price}</span>}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/15 pt-4 text-sm text-white/60">
                Fixed scope. Fixed price. A written report you own either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-6 py-8 text-sm text-slate-500">
          <p className="font-medium text-navy-900">Led by technology leadership with 25+ years of experience — built for people who need senior technical judgment fast.</p>
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
          eyebrow="Start with an audit"
          title="Fixed-price assessments, no sales dance required"
          description="Clear scope, clear price, and a written report you own — whether or not you ever work with us again."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Then keep us in the room"
            title="Ongoing advisory for when one answer isn't enough"
            description="Most audit clients keep us on — as a fractional CTO, AI advisor, or architecture second opinion."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisory.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
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
