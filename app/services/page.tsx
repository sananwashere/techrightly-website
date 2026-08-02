import Link from 'next/link';
import { products, advisory, type Service } from '@/lib/services';

const straightAnswers = [
  {
    q: 'Do I need to be technical to get anything out of an audit?',
    a: 'No — that’s the point. The report is written for the person paying for it, not the person who wrote the code. Every finding comes with what it means for your business and what it would cost to leave alone.',
  },
  {
    q: 'Won’t you just tell us everything is broken so we can hire you to fix it?',
    a: 'The audit fee pays for the answer, and the answer is complete on its own. It’s never discounted against future work, and it never will be — because a verdict you can buy your way out of isn’t a verdict. If the codebase is in good shape, the report says exactly that, and good news is still worth paying for: it’s the difference between hoping and knowing.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'Read access to the code, a copy of anything already written down (usually not much), and about an hour with whoever built or maintains it. If you can’t get us access — for example, your agency won’t hand over the repository — that’s a finding in itself, and we’ll help you push for it.',
  },
  {
    q: 'What happens after the report lands?',
    a: 'It’s yours. Hand it to your own team, take it to another firm, use it in your investor pack — no strings. Some clients ask us to stay on and work through the fix-list with them. That’s always your call to make, never our pitch.',
  },
  {
    q: 'Why do prices say “from”?',
    a: 'Because a two-person MVP and a five-year-old platform with three codebases aren’t the same job. We confirm the exact figure before you commit, and it doesn’t move once work starts.',
  },
];

const notForYou = [
  {
    title: 'You need a verdict you’ve already written',
    body: 'If the board has been promised the tech is fine and the report needs to agree, we’re the wrong firm. We put our name on what we find — including the awkward parts.',
  },
  {
    title: 'You need a box ticked, cheaply',
    body: 'If a compliance checklist or a formal certification is all that’s required, a specialist assessor will do it for less. We do judgment, not paperwork.',
  },
  {
    title: 'Your product doesn’t exist yet',
    body: 'There’s nothing to audit — and that’s good news, because you’re early enough to get it right the first time. Start with a scoping conversation instead; it’s cheaper than an audit and more useful at this stage.',
  },
];

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

      {/* When we'd tell you not to book */}
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">
              Fair warning
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold">
              Three situations where we&apos;d tell you to keep your money
            </h2>
            <p className="mt-3 text-white/70">
              An audit is only worth buying if you actually want the answer. If any of these sound like you,
              we&apos;ll say so on the first call — before you&apos;ve spent anything.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {notForYou.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-semibold text-teal-300">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Straight answers */}
      <section className="container-page py-16">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-600">
            Straight answers
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-navy-900">
            The things people ask before they book
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {straightAnswers.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-navy-900">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </div>
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
