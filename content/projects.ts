// ---------------------------------------------------------------------------
// SELECTED PROJECTS — curated, quality over quantity.
// To add a project: copy a block. Lead with the OUTCOME, keep bullets short
// and in simple language. Wrap key phrases in **double asterisks** to bold
// them. Set links you don't have to "" and they won't render.
// ---------------------------------------------------------------------------

export type ProjectLink = {
  label: string; // e.g. "Live", "Demo", "Repo", "Deck"
  href: string;
};

export type Project = {
  // Lead line: the outcome or what it does. This is what recruiters read first.
  outcome: string;
  // Project name.
  name: string;
  // 2–4 short bullets in plain language. **bold** is supported.
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
    outcome: "1st place at Google PM Hackathon 2026, beating 30+ MIT teams",
    name: "CarePrice",
    bullets: [
      "Shows patients **upfront, transparent prices** for care across hospitals — tackling the problem that **4 in 5 US adults don't know costs** before receiving care, and that surprise bills have pushed **50%+ into medical debt** over the last five years",
      "Surfaces **financial assistance options** patients are otherwise unaware of, going beyond competitors that show only price or only aid — enabled by recent regulation (the **2022 No Surprises Act**)",
      "**Gives power back to patients** by combining cost transparency with financial assistance and, in the premium tier, **AI-enabled coupon search and bill negotiation** — so people can shop and plan for non-emergency care before they're billed",
    ],
    role: "Co-creator & lead presenter (team of 5)",
    meta: "Google PM Hackathon · MIT · 2026",
    tags: ["AI", "DRG bundling", "Healthcare"],
    links: [
      {
        label: "Pitch deck",
        href: "https://drive.google.com/file/d/1_kCz5zhHWx-pDCUPwQe9xEfmALB6hY_6/view?usp=sharing",
      },
      { label: "Prototype", href: "https://careprice-ten.vercel.app" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=INBo2Re4xBw" },
    ],
  },
  {
    outcome:
      "Co-founded an AI styling startup; validated demand across 100+ interviews",
    name: "DressingRoom",
    bullets: [
      "Designed and co-built a prototype that **decodes personal style from Instagram posts + follows** and generates curated collections with **AI try-ons** — no chats, no forms, no burden on users to describe their style",
      "Led **100+ customer discovery interviews** through **MIT FUSE**; won **Top Banana** (most market research in a cohort of 50+ teams), earned a **$1.5K MIT Sandbox grant**, and pitched at the **IIA AI Summit**",
      "**Sunset after 4 months** — after pivots we couldn't give it 100%, and two MBAs with overlapping skills lacked a co-founder with an **unfair advantage**. Passion is a prerequisite",
    ],
    role: "Co-founder · product, research & build",
    meta: "MIT Sloan / Martin Trust Center · 2025–2026",
    tags: ["GenAI", "AI try-on", "0→1"],
    links: [
      { label: "Demo", href: "https://youtu.be/BJkAuJV233A" },
      {
        label: "Pitch deck",
        href: "https://drive.google.com/file/d/1jgCtQQ-fVblV1yo8lWCtxyKo7cIs-Saw/view?usp=sharing",
      },
    ],
  },
  {
    outcome:
      "Deep-tech commercialization plan rated one of the best presentations in 5 years of MIT iTeams",
    name: "Underwater Data Center",
    bullets: [
      "**Evaluated deployment strategies** — screened 7 ways to put data centers in or near water (e.g. seabed, barge, river) and identified the 3 worth pursuing",
      "**Built the unit economics** — submerged data centers cut build costs 30–60% vs land and pay back in 4–7 years, with cooling provided by the water itself",
      "**Developed the business model and roadmap** — three ventures with distinct customers (hyperscalers, ports, cities), each de-risked by one cheap upfront test",
    ],
    role: "Commercialization strategy (team of 4)",
    meta: "MIT Innovation Teams · 2026",
    tags: ["Deep tech", "Infrastructure", "Unit economics"],
    links: [
      {
        label: "Presentation deck",
        href: "https://drive.google.com/file/d/1ZX60inH5Hox1sRlSxw9qqZIsYiNfJKlH/view?usp=sharing",
      },
      {
        label: "Final report",
        href: "https://drive.google.com/file/d/1CD3kcsT2fQlJlq-20UZK1vP3q0r4xqB7/view?usp=sharing",
      },
    ],
  },
  {
    outcome:
      "Shipped 10+ AI applications — agent orchestration, autonomous trading, speech coaching",
    name: "AI build sprints",
    bullets: [
      "**kalshi-trading** — autonomous prediction-market trading bot running **5 quant strategies**, plus an **LLM researcher that improves its own strategies overnight**",
      "**PolyClaw** — bet-selection engine that finds the **highest-value bets on Polymarket** by blending odds, polls, and forecasts",
      "**claw-agents-playground** — live **multi-agent arena** where AI agents pitch startup ideas, critique each other, and vote",
    ],
    role: "Builder",
    meta: "Ongoing · 2025–present",
    tags: ["Claude Code", "Python", "Next.js", "Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/karshincheo" },
      {
        label: "Flagship: kalshi-trading",
        href: "https://github.com/karshincheo/kalshi-trading",
      },
    ],
  },
];
