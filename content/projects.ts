// ---------------------------------------------------------------------------
// SELECTED PROJECTS — curated, quality over quantity.
// Rendered as square cards in a horizontally scrolling row on the home page.
// To add a project: copy a block. Lead with the OUTCOME, keep bullets short
// and in simple language. Set links you don't have to "" and they won't
// render. TODO = needs a real URL.
// ---------------------------------------------------------------------------

export type ProjectLink = {
  label: string; // e.g. "Live", "Demo", "Repo", "Devpost"
  href: string;
};

export type Project = {
  // Lead line: the outcome or what it does. This is what recruiters read first.
  outcome: string;
  // Project name.
  name: string;
  // 2–4 short bullets in plain language. No paragraphs.
  bullets: string[];
  // Your role.
  role: string;
  // Optional time / context label (e.g. "MIT Sloan · 2026").
  meta?: string;
  // Optional small tech/stack chips — telegraph technical depth at a glance.
  tags?: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    outcome: "1st place / $5K at Google's PM Hackathon — beating 30+ MIT teams",
    name: "CarePrice",
    bullets: [
      "Tells patients what a procedure will really cost — before it happens",
      "Uses AI and DRG-based bundling to surface the hidden costs that wreck people financially",
      "Built and pitched in a weekend",
    ],
    role: "Co-creator & lead presenter (team of 5)",
    meta: "Google PM Hackathon · MIT · 2026",
    tags: ["AI", "DRG bundling", "Healthcare"],
    links: [
      // TODO: add Devpost / demo / deck links if you have them
      { label: "Demo", href: "" },
      { label: "Deck", href: "" },
    ],
  },
  {
    outcome: "Co-founded an AI styling startup; validated demand across 30+ interviews",
    name: "DressingRoom",
    bullets: [
      "AI shopping agent that reads your social media to learn your style, then curates clothing to your proportions and lifestyle",
      "Started as B2B virtual try-on with 3D digital twins; pivoted to a consumer styling agent",
      "Backed by MIT Fuse ($15K/founder) and competed in MIT 100K",
      "Wound it down in 2026 when the unit economics didn't hold — a clean call I'd make again",
    ],
    role: "Co-founder · product, research & build",
    meta: "MIT Sloan / Martin Trust Center · 2025–2026",
    tags: ["AI agents", "3D try-on", "0→1"],
    links: [
      // TODO: add a live link / landing page / writeup if one exists
      { label: "Writeup", href: "" },
    ],
  },
  {
    outcome: "Deep-tech commercialization rated best presentation in 5 years of MIT iTeams",
    name: "Underwater Data Center",
    bullets: [
      "Assessed how to commercialize submerged data centers — unlimited ocean cooling for AI compute",
      "Built the economics for three deployment models",
      "Showed the industry-standard PUE metric hides 60–200% of real cooling costs",
    ],
    role: "Commercialization strategy (team of 4)",
    meta: "MIT Innovation Teams · 2026",
    tags: ["Deep tech", "Infrastructure", "Unit economics"],
    links: [
      { label: "Deck", href: "" }, // TODO: optional
    ],
  },
  {
    outcome: "Shipped 10+ AI applications — agent orchestration, autonomous trading, speech coaching",
    name: "AI build sprints",
    bullets: [
      "An ongoing habit: idea to working AI product in days, not quarters",
      "Spans agent orchestration, autonomous trading, and speech coaching",
      "Built to learn fast — ship, watch real usage, iterate",
    ],
    role: "Builder",
    meta: "Ongoing · 2025–present",
    tags: ["Claude Code", "Next.js", "Supabase", "Vercel"],
    links: [
      // TODO: link your best demos / repos here — this section sells "shipping velocity"
      { label: "GitHub", href: "" },
    ],
  },
];
