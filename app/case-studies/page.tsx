import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';

export const metadata = {
  title: 'Case Studies | TechRightly',
  description: 'Illustrative engagement scenarios showing how TechRightly approaches common technical challenges.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">Case Studies</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">How we approach real engagements</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            TechRightly is a new firm. The scenarios below are illustrative — composites of the kinds of problems we
            solve and how we approach them — rather than named client case studies. We&apos;ll publish real,
            attributed case studies here as engagements close.
          </p>
        </div>
      </section>

      <section className="container-page space-y-10 py-16">
        {caseStudies.map((cs) => (
          <article key={cs.slug} className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-heading text-xl font-bold text-navy-900">{cs.client}</h2>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                {cs.service}
              </span>
            </div>

            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">Challenge</h3>
                <p className="mt-3 text-sm text-slate-600">{cs.challenge}</p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">Approach</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {cs.approach.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">Outcome</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {cs.outcome.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="font-heading text-xl font-bold text-navy-900">Want to be our next case study?</h2>
          <p className="mx-auto mt-2 max-w-md text-slate-600">
            Let&apos;s talk about the problem you&apos;re solving — and what a good outcome would look like in 90 days.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}
