import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  draft?: boolean;
};

export type Post = PostMeta & {
  content: string;
};

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  // Friendly guardrails so a non-engineer never silently loses a post.
  if (process.env.NODE_ENV === "development") {
    if (!data.title) warn(fileName, "missing `title` in frontmatter");
    if (!data.summary) warn(fileName, "missing `summary` in frontmatter");
    if (!data.date) {
      warn(fileName, "missing `date` — it will sort to the top unpredictably");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))) {
      warn(fileName, `date "${data.date}" should be YYYY-MM-DD`);
    }
    if (typeof data.draft === "string") {
      warn(
        fileName,
        `draft is the string "${data.draft}" — use draft: true / false (no quotes)`,
      );
    }
  }

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    // Only an explicit boolean `true` hides a post. Avoids the classic
    // `draft: "false"` (a truthy string) silently dropping a published post.
    draft: data.draft === true,
    content,
  };
}

function warn(fileName: string, message: string): void {
  console.warn(`[posts] ${fileName}: ${message}`);
}

/** All published posts, newest first. Drafts are excluded in production. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
  const isDev = process.env.NODE_ENV === "development";
  return files
    .map(readPostFile)
    .filter((p) => isDev || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const mdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const md = path.join(POSTS_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? `${slug}.mdx` : fs.existsSync(md) ? `${slug}.md` : null;
  if (!file) return null;
  return readPostFile(file);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
