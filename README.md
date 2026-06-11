# Kar Shin Cheo — Personal Site

A fast, minimalist personal site with a technical blog that's built to grow.

- **Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · MDX · TypeScript
- **Design:** Near-monochrome, Geist Sans + Geist Mono, one accent color
- **Deploy:** GitHub Pages (static export via Actions), or any static host

---

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other commands:

```bash
npm run build        # production build
npm run start        # serve the production build
```

---

## Edit your content

Everything you'll touch lives in two folders: **`content/`** (text/data) and **`public/`** (the resume PDF). You rarely need to touch `src/`.

### 1. Bio, headline, links, email

Edit **`content/site.ts`**. This controls your name, the hero headline, the intro paragraphs, your email, and your social links (email, LinkedIn, GitHub, X).

- Set a social link's `href` to `""` to hide it (empty links are not rendered).
- Set `url` to your real domain once you deploy (used for SEO + sitemap).

### 2. Selected projects

Edit **`content/projects.ts`**. Each project is one object in the `projects`
array, rendered as a card in a horizontally scrolling row.

To add a project, copy an existing block and fill it in. Lead with the
**outcome** — it's the first thing a visitor reads:

```ts
{
  outcome: "What it achieved or does — the headline result",
  name: "Project Name",
  bullets: ["2–4 short bullets", "in simple language"],
  role: "Your role",
  meta: "Context · Year",            // optional, shown under the name
  tags: ["Stack", "chips"],          // optional
  links: [{ label: "Live", href: "https://..." }], // empty href = hidden
}
```

### 3. Experience & education

Edit **`content/experience.ts`** — the `experience` array (jobs) and
`education` array. A role can use `groups` to section bullets by function
(GTM, Operations, AI/ML…) like a resume, or plain `bullets`. Lead each
bullet with impact.

### 4. Writing (blog) — currently hidden

The Writing section is **hidden for now**: the nav link and home-page section
were removed, and `/writing` is left out of the sitemap. All the plumbing
still works. To re-enable: add the Writing nav link back in
`src/components/Header.tsx`, restore the Writing section in
`src/app/page.tsx`, and re-add the `/writing` routes in `src/app/sitemap.ts`
(see git history for the exact code).

Posts themselves work like this:

Posts are MDX files in **`content/posts/`**. To add a post, create a new file
`content/posts/my-post.mdx`:

```mdx
---
title: "My Post Title"
date: "2026-07-01"        # YYYY-MM-DD — controls sort order (newest first)
summary: "One or two sentences shown in the list and as the meta description."
draft: false              # true = visible in dev only, hidden in production
---

Write your post in **Markdown / MDX** here. Headings, lists, links, code, and
blockquotes are all styled automatically.
```

That's it — the post appears on the home page (latest 2), the `/writing` index,
and at `/writing/my-post`. No code changes needed.

> If there are **no** posts, the Writing section shows a tasteful
> "Essays coming soon" empty state automatically.

### 5. Swap the resume PDF

Replace **`public/Kar Shin Cheo - Resume.pdf`** with your latest resume.
Keep the same filename and every "Resume" / "Download resume" button just
works — the filename is what people see when they download it.
(To change it, rename the file and update `resumePath` in `content/site.ts`.)

---

## Deploy

### GitHub Pages (current setup)

Every push to `main` runs the Actions workflow in `.github/workflows/`, which
builds the static export (`next build` with `output: "export"`) and publishes it
to GitHub Pages at the `site.url` domain. No server, no config.

### Anywhere else

The build is a fully static export — `npm run build` produces `out/`, which any
static host (Vercel, Netlify, an S3 bucket) can serve as-is.

---

## Project map

```
content/
  site.ts            # name, headline, bio, links, domain  ← edit
  projects.ts        # selected projects                   ← edit
  experience.ts      # work history + education            ← edit
  posts/*.mdx        # blog posts                          ← add files
public/
  Kar Shin Cheo - Resume.pdf   # your resume               ← replace
src/
  app/               # pages (home, /writing, /writing/[slug]), SEO, styles
  components/        # Header, Footer
  lib/posts.ts       # reads + sorts MDX posts
```

---

## Customize the look

- **Accent color & palette:** `src/app/globals.css` → the `@theme` block.
  Change `--color-accent` to re-skin every link/CTA at once.
- **Typeface:** Geist, loaded in `src/app/layout.tsx`. Swap via `next/font` if desired.
