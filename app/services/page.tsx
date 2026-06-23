import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata = {
  title: 'Services | TechRightly',
  description:
    'Fractional CTO, AI Strategy & Advisory, Solution Architecture, Digital Transformation, and Technical Due Diligence.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">Services</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
            Senior technical leadership, scoped to what you need right now.
          </h1>
          <p className="mt-4 max-w-xl text-white/75">
            Every engagement is fixed-scope and fixed-cadence. No retainers that quietly expand, no surprise scope
            creep.
          </p>
        </div>
      </section>

      <section className="container-page space-y-16 py-16">
        {services.map((service, i) => (
          <article
            key={service.slug}
            id={service.slug}
            className={`grid gap-10 rounded-2xl border border-slate-200 p-8 md:grid-cols-2 md:p-12 ${
              i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
            }`}
          >
            <div>
              <span className="font-heading text-sm font-semibold uppercase tracking-wide text-teal-600">
                Service {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">{service.title}</h2>
              <p className="mt-4 text-slate-600">{service.description}</p>
              <Link href="/contact" className="btn-primary mt-6">Discuss this service</Link>
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
        ))}
      </section>
    </>
  );
}
