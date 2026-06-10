// ---------------------------------------------------------------------------
// SITE CONTENT — edit this file to change your name, headline, bio, and links.
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
  console.warn(
    "[site] NEXT_PUBLIC_SITE_URL is not set — using https://example.com. " +
      "Set your real domain before sharing the site.",
  );
}

export const site = {
  name: "Kar Shin Cheo",
  url: SITE_URL,

  // Short tag used in the browser-tab title and the social share card.
  tagline: "AI-native builder",

  // The headline shown in the hero.
  headline:
    "AI-native builder, experienced in executing GTM and product strategy for corporations across Asia",

  // Intro paragraphs under the headline.
  bio: [
    "Ex-Oliver Wyman strategy consultant. I spent years building GTM and product strategy for fintechs, private equity firms, and large corporations across Asia.",
    "Now an MBA at MIT Sloan, transitioning into builder mode — co-founding startups, winning hackathons, and shipping 10+ AI applications along the way.",
  ],

  // Circular photo shown next to the hero title. Replace public/profile.jpg.
  photoPath: "/profile.jpg",

  // Scannable proof chips shown under the bio (the 20-second skim).
  proofPoints: [
    "ex-Oliver Wyman",
    "1st place · Google PM Hackathon",
    "Co-founder · MIT-backed startup",
    "MIT Sloan MBA",
  ],

  // Short meta description for SEO/social (aim ~150 chars).
  metaDescription:
    "Kar Shin Cheo is an AI-native builder and MIT Sloan MBA — ex-Oliver Wyman, with years of GTM and product strategy for corporations across Asia.",

  // Where the resume PDF lives. Replace the file in public/ to swap it —
  // the filename is what recruiters see when they download it.
  resumePath: "/Kar Shin Cheo - Resume.pdf",
  email: "karshin@mit.edu",
  location: "Cambridge, Massachusetts",

  // Social / contact links. Set href to "" to hide a link.
  links: {
    email: "mailto:karshin@mit.edu",
    whatsapp: "https://wa.me/60136669949",
    linkedin: "https://www.linkedin.com/in/karshincheo/",
    github: "https://github.com/karshincheo",
    x: "", // add your X/Twitter URL to show it, e.g. https://x.com/yourhandle
  },
};

export type Site = typeof site;
