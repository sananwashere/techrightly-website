import Link from 'next/link';
import { products, advisory, type Service } from '@/lib/services';

export const metadata = {
  title: 'Services | TechRightly',
  description:
    'Fixed-price technical audits and ongoing advisory: Codebase Health Check, AI Readiness Audit, Technical Due Diligence, and Fractional CTO services.',
};

function ServiceDetail({ service, index, showPrice }: { service: Service; index: number; showPrice: boolean }) {
  return (
    <article
      id={service.slug}
      className={`grid gap-10 rounded-2xl border border-slate-200 p-8 md:grid-cols-2 md:p-12 ${
        index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          {showPrice && service.price && (
            <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
              {service.price}
            </span>
          )}
          {service.duration && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              {service.duration}
            </span>
          )}
        </div>
        <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">{service.title}</h2>
        <p className="mt-4 text-slate-600">{service.description}</p>
        <Link href="/contact" className="btn-primary mt-6">
          {service.type === 'product' ? 'Book this audit' : 'Discuss this service'}
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-1">
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">
            What you get
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">
            Ideal for
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {service.idealFor.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">Services</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
            Start with a fixed-price audit. Grow into ongoing leadership.
          </h1>
          <p className="mt-4 max-w-xl text-white/75">
            Most clients start with one fixed-scope, fixed-price assessment — then keep us on as their technical
            advisor once they&apos;ve seen how we work. No retainers that quietly expand, no surprise scope creep.
          </p>
        </div>
      </section>

      {/* Fixed-price products */}
      <section className="container-page py-16">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-600">Start here</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900">Fixed-price assessments</h2>
          <p className="mt-3 text-slate-600">
            Clear scope, clear price, clear deliverable. Each one ends with a written report you own — whether or
            not you ever work with us again.
          </p>
        </div>
        <div className="mt-10 space-y-10">
          {products.map((service, i) => (
            <ServiceDetail key={service.slug} service={service} index={i} showPrice />
          ))}
        </div>
      </section>

      {/* Ongoing advisory */}
      <section className="bg-slate-50 py-16">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-600">
              Ongoing advisory
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900">
              When you need more than a one-off answer
            </h2>
            <p className="mt-3 text-slate-600">
              For companies that want senior technical judgment in the room every month — led by technology
              leadership with 25+ years of experience building and scaling systems and teams.
            </p>
          </div>
          <div className="mt-10 space-y-10">
            {advisory.map((service, i) => (
              <ServiceDetail key={service.slug} service={service} index={i + 1} showPrice />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
