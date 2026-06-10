// ---------------------------------------------------------------------------
// EXPERIENCE — concise work history. Lead each bullet with impact.
// A role can either have flat `bullets`, or `groups` to section the work by
// function (GTM, Operations, AI/ML…) the way the resume does.
// ---------------------------------------------------------------------------

export type RoleGroup = {
  label: string; // e.g. "GTM & Partnerships"
  bullets: string[];
};

export type Role = {
  company: string;
  title: string;
  location: string;
  period: string;
  // Optional one-line context about the company.
  note?: string;
  // Use ONE of these: flat bullets, or functional groups.
  bullets?: string[];
  groups?: RoleGroup[];
};

export const experience: Role[] = [
  {
    company: "Oliver Wyman",
    title: "Associate Manager",
    location: "Kuala Lumpur, Malaysia",
    period: "2021 — 2025",
    note: "Strategy, financial modeling, and AI/ML for banks and fintechs across Southeast Asia.",
    groups: [
      {
        label: "GTM & Partnerships",
        bullets: [
          "Designed GTM and value-creation plans for five portfolio companies of a Malaysian investment holding company; presented directly to the CEO with projected equity uplift of ~$1.1B over five years.",
          "Developed the GTM strategy for a leading Southeast Asian SME bank — projected to lift topline revenue 30% and halve customer onboarding time.",
        ],
      },
      {
        label: "Financial Modeling & Reporting",
        bullets: [
          "Directed commercial due diligence and financial modeling for the acquisition of a Singaporean insurance company; the value-creation plan projected +7% growth and ~$400M in added annual revenue.",
          "Established cross-country reporting across six subsidiaries of a top ASEAN bank to manage a 500-employee anti-financial-crime program.",
        ],
      },
      {
        label: "Operations",
        bullets: [
          "Overhauled anti-money-laundering operations at a leading Malaysian bank, setting a compliance benchmark later adopted by two other major banks.",
          "Designed the SME onboarding process for Malaysia's first digital bank, enabling unregistered businesses to access banking — 100,000+ sign-ups in the first two weeks.",
        ],
      },
      {
        label: "AI/ML & Data Science",
        bullets: [
          "Led a 3-person data-science team building an ML customer price-elasticity model for a global bank, boosting profitability ~5%.",
          "Developed a customer risk-profiling model for a leading Malaysian bank — 30% fewer misclassified high-risk customers and 10% faster onboarding.",
        ],
      },
    ],
  },
  {
    company: "Tarayana Microfinance",
    title: "Pro Bono Consultant (secondment from Oliver Wyman)",
    location: "Thimphu, Bhutan",
    period: "2023 — 2024",
    note: "Bhutanese microfinance institution providing microloans to rural families.",
    groups: [
      {
        label: "Product & Operations",
        bullets: [
          "Built a digital credit-application platform that cut processing costs 60% and drove 400% year-on-year growth in the loan portfolio.",
          "Designed a staged loan-disbursement model that enabled earlier detection of repayment risk, slashing non-performing loans 50%.",
        ],
      },
      {
        label: "Fundraising",
        bullets: [
          "Secured ~$230K in debt funding from a Bhutanese bank through debt-sustainability analysis and stakeholder negotiation — extending loans to 200+ rural families.",
        ],
      },
    ],
  },
];

// Education is short — kept separate so the layout can render it compactly.
export type Education = {
  school: string;
  credential: string;
  location: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "MIT Sloan School of Management",
    credential: "MBA Candidate, May 2027",
    location: "Cambridge, MA",
    period: "2025 — Present",
    detail:
      "AI Venture Studio, Entrepreneurial Sales/GTM, Tech2Market. Led a team of MBAs to win 1st place at Google's PM Hackathon 2026.",
  },
  {
    school: "Heriot-Watt University",
    credential: "BSc Statistical Data Science, First Class Honors",
    location: "Putrajaya, Malaysia",
    period: "2018 — 2021",
    detail:
      "100% merit scholarship (2 of 30 in cohort). AIESEC President — led a 40-member team and pivoted to virtual volunteering during COVID-19.",
  },
];
