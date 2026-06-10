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
      "Tells patients what a procedure will **really cost — before it happens**",
      "Uses AI and **DRG-based bundling** to surface the hidden costs that wreck people financially",
      "**Built and pitched in a weekend**",
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
      "Evaluated **7 deployment options** against 7 criteria; 3 survived — **seabed sphere arrays, barges, and river data centers** — each killing a constraint land can't",
      "Built the unit economics: submerged arrays cut CapEx **30–60% vs land** ($35–59M vs $85M per 8MW), hit **PUE ≤ 1.1**, and pay back in **4–7 years vs 7–9 on land**",
      "Identified **waste-heat sales** as a revenue stream no land operator can access — **$500K–2M/yr per 10MW** piped to district heating, counter-cyclical to compute demand",
      "Designed a **3-layer de-risking roadmap** where a single **$200–500K coating test** gates the entire opportunity — the cheapest test kills the broadest assumptions first",
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
      "**kalshi-trading** — autonomous Kalshi trading bot running **5 quant strategies** (Avellaneda-Stoikov market making, nowcasting from BLS/FRED data, cross-market arbitrage), sized by **Kelly + portfolio optimization**, plus an **LLM researcher that writes and backtests its own strategies overnight**",
      "**PolyClaw** — Polymarket bet-selection engine: market microstructure features, **uncertainty-aware probability blending** from odds/polls/forecasts, and EV scoring under risk constraints across 5 categories",
      "**claw-agents-playground** — live **multi-agent arena** where AI agents post problems, pitch startup ideas, critique, and vote — deployed on Vercel with Supabase persistence",
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
