import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About | TechRightly',
  description: 'TechRightly’s mission, approach, and the principles behind how we advise.',
};

const principles = [
  {
    title: 'Judgment over jargon',
    body: 'We explain decisions in plain language and show the trade-offs. If we can’t justify a recommendation simply, we haven’t finished thinking it through.',
  },
  {
    title: 'Built to be left',
    body: 'Every engagement aims to leave your team more capable than it found them — documentation, decisions, and people, not dependency on us.',
  },
  {
    title: 'Right-sized, not maximal',
    body: 'The right architecture, team, or AI strategy is the smallest one that solves the actual problem — not the most impressive one on paper.',
  },
  {
    title: 'Independent advice',
    body: 'We don’t resell software or take referral fees from vendors we recommend. Our advice is built around what’s right for your business.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white">
        <div className="container-page">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-400">About TechRightly</p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold sm:text-5xl">
            Technology leadership shouldn&apos;t require a full-time executive salary to access.
          </h1>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-navy-900">Why we exist</h2>
            <p className="mt-4 text-slate-600">
              Most companies hit a moment where technical decisions outgrow whoever is currently making them — but
              they&apos;re not yet big enough to justify a full-time CTO or VP Engineering. That gap is where good
              decisions get delayed, vendors get chosen by default, and architecture drifts without anyone steering
              it on purpose.
            </p>
            <p className="mt-4 text-slate-600">
              TechRightly was built to close that gap directly: senior technology leadership and advisory, engaged
              at the scope and cadence a growing company can actually justify — Fractional CTO, AI Strategy &amp;
              Advisory, Solution Architecture, Digital Transformation, and Technical Due Diligence.
            </p>
            <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900">How we work</h2>
            <p className="mt-4 text-slate-600">
              Every engagement starts with a scoping conversation, not a sales pitch: what decision are you trying
              to make, what has it cost you so far to leave it unmade, and what would a good outcome actually look
              like in three months. From there we agree on a fixed cadence and a clear set of deliverables — so you
              always know what you&apos;re getting and when.
            </p>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-900/70">
              Who we work with
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Founders before their first full-time technical hire</li>
              <li>Operators modernizing legacy systems and processes</li>
              <li>Investors and acquirers needing independent technical review</li>
              <li>Boards that need a credible point of view on AI strategy</li>
            </ul>
            <Link href="/contact" className="btn-outline mt-6 w-full">Start a conversation</Link>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-page">
          <SectionHeading eyebrow="How we think" title="The principles behind every engagement" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
