export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: 'fractional-cto',
    title: 'Fractional CTO',
    summary:
      'Senior technical leadership on a part-time or interim basis — without the cost or commitment of a full-time hire.',
    description:
      'You get a hands-on technology leader who sets engineering strategy, builds and manages your team, owns architecture decisions, and represents technology to your board and investors. Engaged for a fixed number of days per month, scaling up or down as the company needs change.',
    deliverables: [
      'Technology strategy and roadmap aligned to business goals',
      'Engineering team structure, hiring plan, and process design',
      'Architecture and vendor decisions with documented rationale',
      'Board- and investor-ready technical updates',
    ],
    idealFor: [
      'Startups before their first full-time CTO hire',
      'Companies between CTOs',
      'Founders who need a technical co-pilot for fundraising',
    ],
  },
  {
    slug: 'ai-strategy-advisory',
    title: 'AI Strategy & Advisory',
    summary:
      'A clear-eyed roadmap for where AI and agentic systems actually create value in your business — and where they don’t.',
    description:
      'We cut through the noise to identify high-value AI use cases, assess build-vs-buy options, evaluate vendors and models, and set up the governance needed to deploy AI responsibly. The goal is durable advantage, not a demo.',
    deliverables: [
      'AI opportunity assessment scored by impact and feasibility',
      'Build-vs-buy and vendor/model recommendations',
      'Pilot project scoping and success metrics',
      'AI governance, data, and risk guidelines',
    ],
    idealFor: [
      'Leadership teams asking "what should we actually do with AI?"',
      'Companies evaluating agentic AI for internal workflows',
      'Boards that need an informed point of view before approving AI spend',
    ],
  },
  {
    slug: 'solution-architecture',
    title: 'Solution Architecture',
    summary:
      'System designs that scale with the business, stay secure, and don’t collapse under unplanned cost or complexity.',
    description:
      'We design or review the architecture behind your product: cloud infrastructure, service boundaries, data flows, and integration points. Every recommendation comes with trade-offs spelled out, so your team understands why, not just what.',
    deliverables: [
      'Current-state architecture assessment',
      'Target architecture with migration path',
      'Cloud cost and scalability review',
      'Security and reliability recommendations',
    ],
    idealFor: [
      'Teams scaling past their original architecture',
      'Companies preparing for a major product or platform rebuild',
      'Engineering teams that need an outside, senior second opinion',
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    summary:
      'Modernizing legacy systems and manual processes into platforms and workflows that don’t slow the business down.',
    description:
      'We assess where technology debt and manual process are costing you time and money, then build a prioritized modernization plan — covering cloud migration, automation, and tooling — that your team can execute in stages.',
    deliverables: [
      'Technology and process audit',
      'Prioritized modernization roadmap',
      'Cloud migration plan where applicable',
      'Change management support for the team',
    ],
    idealFor: [
      'Established companies running on aging infrastructure',
      'Operations teams drowning in manual, error-prone processes',
      'Leadership preparing the business for its next stage of growth',
    ],
  },
  {
    slug: 'technical-due-diligence',
    title: 'Technical Due Diligence',
    summary:
      'An independent, senior assessment of a target company’s technology before you invest or acquire.',
    description:
      'For investors and acquirers, we evaluate the codebase, architecture, security posture, technical team, and scalability of a target company, and deliver a clear, decision-ready report — including the risks that matter and what it would cost to fix them.',
    deliverables: [
      'Codebase and architecture quality assessment',
      'Security and scalability risk review',
      'Technical team capability evaluation',
      'Decision-ready due diligence report with risk-adjusted findings',
    ],
    idealFor: [
      'VCs and PE firms evaluating a technology investment',
      'Companies acquiring a target with a meaningful tech stack',
      'Boards that need an independent technical opinion before closing',
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
