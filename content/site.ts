// ---------------------------------------------------------------------------
// SITE CONTENT — edit this file to change your name, headline, bio, and links.
// Anything marked TODO needs a real value from you.
// ---------------------------------------------------------------------------

// Your production domain (no trailing slash). Used for SEO, sitemap, OG, RSS.
// Override via the NEXT_PUBLIC_SITE_URL env var, or change the fallback here
// (e.g. when you buy a custom domain like karshincheo.com).
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://karshincheo.github.io"
).replace(/\/$/, "");

if (
  process.env.NODE_ENV === "production" &&
  SITE_URL.includes("example.com")
) {
  // Loud warning so a misconfigured deploy doesn't silently ship example.com
  // into every share preview and the sitemap.
  console.warn(
    "[site] NEXT_PUBLIC_SITE_URL is not set — using https://example.com. " +
      "Set your real domain before sharing the site.",
  );
}

export const site = {
  name: "Kar Shin Cheo",
  url: SITE_URL,

  // The small label above the headline (rendered in mono).
  eyebrow: "Strategy consultant · Ships AI products",

  // Short positioning line shown in the hero. Keep it to one sentence.
  headline:
    "I build GTM and product strategy — then execute it by shipping AI products.",

  // 2–3 sentence intro. Strategy depth first, execution as the differentiator.
  bio: [
    "Ex-Oliver Wyman strategy consultant, now an MBA at MIT Sloan. I spent years building GTM and product strategy for banks, insurers, and fintechs across Southeast Asia — presenting straight to CEOs.",
    "The difference: I don't stop at the strategy deck. I execute it — co-founding startups, winning hackathons, and shipping 10+ AI applications along the way.",
  ],

  // Scannable proof chips shown right under the bio (the 20-second skim).
  proofPoints: [
    "ex-Oliver Wyman",
    "1st place · Google PM Hackathon",
    "Co-founder · MIT-backed startup",
    "MIT Sloan MBA",
  ],

  // Short meta description for SEO/social (aim ~150 chars). Distinct from bio.
  metaDescription:
    "Kar Shin Cheo is an ex-Oliver Wyman strategy consultant and MIT Sloan MBA who builds GTM and product strategy — then executes it by shipping AI products.",

  // Where the resume PDF lives. Replace public/resume.pdf to swap it.
  resumePath: "/resume.pdf",
  email: "karshin@mit.edu",
  location: "Cambridge, Massachusetts",

  // Social / contact links. Set href to "" to hide a link.
  links: {
    email: "mailto:karshin@mit.edu",
    whatsapp: "https://wa.me/60136669949",
    linkedin: "https://www.linkedin.com/in/karshincheo/",
    github: "", // TODO: add your GitHub profile URL — proof for the shipping story
    x: "", // TODO: add your X/Twitter URL, e.g. https://x.com/yourhandle
  },
};

export type Site = typeof site;
