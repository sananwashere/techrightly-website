export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'fractional-tech-leadership-before-full-time-cto',
    title: 'Why Startups Need Fractional Tech Leadership Before They Need a Full-Time CTO',
    excerpt:
      'Hiring a full-time CTO too early is one of the most expensive mistakes a founder can make. Here is how to know when fractional leadership is the better call.',
    category: 'Fractional CTO',
    date: '2026-06-08',
    readTime: '5 min read',
    content: `Most founders assume the technology org chart should mirror the headcount of a "real" company: a CTO at the top, reporting lines beneath. In practice, that instinct creates two expensive failure modes. Either the founder hires a full-time CTO too early — paying senior-executive equity and salary for a problem that doesn't yet need full-time attention — or they don't hire technical leadership at all, and architecture, hiring, and vendor decisions get made ad hoc by whoever is in the room.

There is a third option that gets less attention than it deserves: engaging senior technical leadership on a fractional basis, scoped to the decisions that actually need it.

## What a full-time CTO hire is actually for

A full-time CTO earns their seat when a company has enough technical surface area — team size, product complexity, infrastructure scale — that someone needs to own it every day. Below that threshold, the job is mostly intermittent: set the architecture direction, make a handful of high-stakes calls per month, represent technology to the board, and otherwise let a strong senior engineer execute.

Paying full-time-executive compensation for intermittent work is not just expensive, it's a poor match. The best fractional engagements look like 2-4 days a month of structured involvement: roadmap reviews, hiring decisions, architecture sign-off, and investor updates — without the company carrying a six-figure executive salary for partial attention.

## The signs you need leadership, not more code

If your current technical problems are mostly "we need someone to make a decision and stand behind it," that's a leadership gap, not an execution gap. Common symptoms: engineering hires are stalling or churning, the product roadmap and the technical roadmap have diverged, nobody can give your board a confident answer about technical risk, or every new vendor and tool gets chosen by whoever evaluated it last.

None of those problems are solved by hiring another engineer. They're solved by someone senior enough to own the decision and experienced enough to be right more often than not.

## What good fractional engagement looks like

The engagement should have a defined scope and cadence — not an open-ended "help when needed" arrangement that quietly becomes unpaid full-time work. At TechRightly, a fractional CTO engagement typically includes a written technology roadmap reviewed quarterly, a fixed number of office hours and decision-review sessions per month, and direct involvement in senior engineering hiring. The fractional CTO should leave behind documentation and decisions your team can execute without daily hand-holding — that's the difference between fractional leadership and a permanent dependency.

## When to graduate to full-time

Fractional leadership has a natural end point: when technical decisions need to be made daily rather than monthly, or the team has grown past the point a part-time leader can stay close to. A good fractional CTO should be telling you when that point is approaching — and should be willing to help you hire their own full-time replacement.

If you're trying to figure out whether your company needs full-time technical leadership yet, that's exactly the kind of question a fractional engagement is built to answer.`,
  },
  {
    slug: 'agentic-ai-hype-vs-roadmap',
    title: 'Agentic AI in the Enterprise: Separating the Hype from the Roadmap',
    excerpt:
      'Agentic AI is moving fast from demo to deployment. Here is a practical framework for deciding where it actually belongs in your business.',
    category: 'AI Strategy',
    date: '2026-06-15',
    readTime: '6 min read',
    content: `Every leadership team is fielding the same question right now: what should we be doing with agentic AI? The honest answer is usually "less than the vendor pitch suggests, but more than you're doing today." The hard part is telling those two things apart.

## What "agentic" actually changes

Most AI adoption to date has been assistive: a model drafts something, a person reviews and ships it. Agentic systems are different because they take multi-step action with limited supervision — calling tools, querying data, executing a workflow end to end. That's a meaningful capability jump, but it also moves the risk profile: an agent that takes a wrong action is a different kind of problem than a chatbot that writes an awkward sentence.

That distinction should drive where you deploy it. Agentic AI is a strong fit for workflows that are well-defined, have clear success criteria, and where a wrong action is cheap to detect and reverse — first-pass triage, data reconciliation, internal research synthesis, scheduled report generation. It's a poor fit, today, for workflows with ambiguous success criteria, high cost of error, or decisions that require accountability to a named person.

## A simple way to evaluate use cases

We score candidate use cases on two axes: business impact if it works, and blast radius if it fails. High-impact, low-blast-radius use cases are where to start — they build organizational trust in the technology and produce real ROI quickly. High-impact, high-blast-radius use cases (anything touching money movement, customer-facing commitments, or compliance) deserve a pilot with a human checkpoint before any agent acts unsupervised, not a full rollout.

Low-impact use cases, regardless of risk, usually aren't worth the engineering and governance overhead agentic systems require. "We could automate this" is not the same as "we should."

## Build, buy, or wait

Most companies don't need to build agent infrastructure from scratch. The fastest path to value is usually adopting a vendor platform for a well-scoped use case, instrumenting it carefully, and deciding whether to go deeper based on real results. Building custom agent orchestration is worth the investment only when the workflow is core to your competitive advantage and no vendor solves it well — which is a smaller set of cases than the market currently implies.

## Governance is not optional

Before any agent gets production access to data or systems, you need answers to a short list of questions: What is the agent allowed to do without human approval? What does it log, and who reviews the logs? What happens when it's wrong? Companies that skip this step tend to find out the hard way — usually through an incident, not a postmortem they chose to run proactively.

## The bottom line

Agentic AI deserves real investment of attention right now, but the investment should go into identifying the right two or three use cases and instrumenting them well — not into a sweeping mandate to "use AI everywhere." A focused pilot that ships and is trusted by the team beats a broad rollout that gets quietly ignored.`,
  },
  {
    slug: 'investor-technical-due-diligence-questions',
    title: 'Five Questions Every Investor Should Ask in Technical Due Diligence',
    excerpt:
      'A strong product demo can hide real technical risk. These are the questions that surface it before the deal closes.',
    category: 'Technical Due Diligence',
    date: '2026-06-20',
    readTime: '5 min read',
    content: `A polished product demo and a clean technical due diligence report are two very different things. Demos are designed to show the best path through the system. Due diligence exists to find the paths the founders aren't showing you — not because they're hiding anything, but because most founding teams have never had a reason to look.

Here are the five questions that matter most, and what the answers actually tell you.

## 1. What happens if your two best engineers leave tomorrow?

This question tests for key-person risk and documentation debt. If the honest answer involves a long pause and a worried look, the company's technical capability lives in a small number of heads rather than in systems, documentation, or process. That's a real risk to price into the deal, and a fixable one post-investment — but only if it's identified before close.

## 2. How much of the system was built to be scaled, and how much was built to ship fast?

Every early-stage company makes speed-over-scale trade-offs, and that's usually the right call. The question is whether the team can tell you, specifically, which parts of the system will need to be rebuilt at 10x or 100x current load — and whether they have a credible plan and cost estimate for that rebuild. Vague reassurance ("it'll be fine") is a worse signal than a specific, honest list of known limitations.

## 3. What does your actual cloud and tooling spend look like against revenue or usage?

Infrastructure cost that scales linearly (or worse) with usage, rather than flattening out as the platform matures, often points to architectural inefficiency that will compress margins as the company grows. This is a place where the numbers tell a more reliable story than the narrative.

## 4. Walk me through your last security incident, or your last near-miss.

Every company with real users has had one. A team that can describe what happened, what they learned, and what they changed demonstrates exactly the kind of operational maturity due diligence is trying to find. A team that claims they've never had any issue at all is either very new, very lucky, or not looking closely enough at their own systems.

## 5. If we gave you the money today, what's the first technical hire or system you'd fix?

This question tests self-awareness more than it tests the system itself. Founding and technical teams that know their own weak points — and have a plan, even an early one — are a materially better bet than teams that present the system as essentially finished.

## Why this matters before the term sheet, not after

Technical risk uncovered during diligence is negotiable: it can be priced into the deal, written into milestones, or solved with a post-close hire. Technical risk discovered eighteen months after close is a crisis. The cost of a rigorous, independent technical review is small relative to the deal size — and consistently smaller than the cost of skipping it.`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
