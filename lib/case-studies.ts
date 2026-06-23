export type CaseStudy = {
  slug: string;
  client: string;
  service: string;
  challenge: string;
  approach: string[];
  outcome: string[];
};

// TechRightly is a new firm — these are illustrative engagement scenarios
// describing how we approach common situations, not claims about specific
// named clients. Replace with real, named case studies as engagements close.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'seed-stage-fintech',
    client: 'Seed-stage fintech startup',
    service: 'Fractional CTO',
    challenge:
      'A non-technical founding team had outsourced early development to an agency and needed someone to own architecture, evaluate the existing codebase, and build an in-house engineering team ahead of a Series A raise.',
    approach: [
      'Audited the existing codebase and flagged the changes needed before scaling',
      'Defined the first three engineering hires and ran technical interviews',
      'Built a 12-month technology roadmap tied to fundraising milestones',
      'Represented technology directly to investors during due diligence',
    ],
    outcome: [
      'In-house team of three engineers hired and onboarded within 90 days',
      'Codebase risks identified and resolved before investor technical review',
      'Founders entered fundraising with a credible, documented technology narrative',
    ],
  },
  {
    slug: 'series-b-healthtech',
    client: 'Series B healthtech platform',
    service: 'Solution Architecture',
    challenge:
      'A platform built for a single large customer needed to scale to dozens of customers with different data and compliance requirements, without a full rebuild.',
    approach: [
      'Mapped current architecture against projected multi-tenant load',
      'Designed a phased migration path to a multi-tenant data model',
      'Identified the two services most likely to break first and re-architected those ahead of the rest',
      'Documented trade-offs for the engineering team to execute independently',
    ],
    outcome: [
      'Migration path executed in stages without a feature freeze',
      'Infrastructure cost growth decoupled from customer count',
      'Engineering team executed remaining migration without further outside support',
    ],
  },
  {
    slug: 'pe-acquisition-due-diligence',
    client: 'Private equity acquirer evaluating a SaaS target',
    service: 'Technical Due Diligence',
    challenge:
      'A PE firm needed an independent technical assessment of a SaaS acquisition target within a three-week diligence window, with findings that could directly inform deal terms.',
    approach: [
      'Reviewed codebase quality, test coverage, and architecture against stated scalability claims',
      'Assessed the technical team’s structure and key-person risk',
      'Evaluated security posture and outstanding technical debt',
      'Delivered a risk-adjusted report with cost estimates for identified gaps',
    ],
    outcome: [
      'Findings used directly in deal structuring and post-close technical roadmap',
      'Two material risks identified that were priced into the final terms',
      'Acquirer entered post-close integration with a clear 100-day technical plan',
    ],
  },
];
