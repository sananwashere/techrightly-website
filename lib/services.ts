export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string[];
  type: 'product' | 'advisory';
  price?: string;
  duration?: string;
};

export const services: Service[] = [
  // ── Fixed-price products (the entry point) ──────────────────────────
  {
    slug: 'codebase-health-check',
    title: 'Codebase Health Check',
    type: 'product',
    price: 'from £2,500',
    duration: '5 working days',
    summary:
      'A fixed-price, independent audit of your codebase, architecture, and security — written for founders, not engineers.',
    description:
      'You paid someone to build your product. Is it actually good? We review your codebase, architecture, security posture, and deployment setup, then deliver a plain-English report: what is solid, what is risky, what to fix first, and roughly what fixing it will cost. No jargon, no upsell pressure — just an honest technical second opinion.',
    deliverables: [
      'Code quality and maintainability assessment',
      'Security and data-handling risk review',
      'Scalability and infrastructure cost check',
      'Prioritized fix-list with effort estimates, in plain English',
    ],
    idealFor: [
      'Founders who had an agency or freelancer build their product',
      'Companies about to raise investment who need to look solid',
      'Anyone inheriting a codebase they didn’t write',
    ],
  },
  {
    slug: 'ai-readiness-audit',
    title: 'AI Readiness Audit',
    type: 'product',
    price: 'from £3,500',
    duration: '2 weeks',
    summary:
      'A fixed-price assessment of where AI genuinely saves your business time and money — and where it’s just hype.',
    description:
      'We map your workflows, identify the 3–5 places where AI or automation would actually pay for itself, and estimate the ROI of each. You get a prioritized roadmap you can execute with us or with anyone else — grounded in your operations, not in vendor marketing.',
    deliverables: [
      'Workflow and process mapping across your team',
      '3–5 scored automation opportunities with ROI estimates',
      'Build-vs-buy recommendation for each opportunity',
      'A pilot plan for the single highest-value use case',
    ],
    idealFor: [
      'SMEs hearing about AI constantly but unsure what’s real',
      'Leadership teams who need a business case before spending',
      'Companies burned by a previous “AI initiative” that went nowhere',
    ],
  },
  {
    slug: 'technical-due-diligence',
    title: 'Technical Due Diligence',
    type: 'product',
    price: 'from £5,000',
    duration: '1–3 weeks',
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

  // ── Ongoing advisory (where audits naturally lead) ──────────────────
  {
    slug: 'fractional-cto',
    title: 'Fractional CTO',
    type: 'advisory',
    price: 'from £3,000/month',
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
    type: 'advisory',
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
    type: 'advisory',
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
    type: 'advisory',
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
];

export const products = services.filter((s) => s.type === 'product');
export const advisory = services.filter((s) => s.type === 'advisory');

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
