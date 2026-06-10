import { site } from "@content/site";
import { getAllPosts } from "@/lib/posts";

// RSS feed for the blog. Lives at /feed.xml. Regenerates on each build.
export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${base}/writing/${post.slug}`;
      const pubDate = post.date
        ? new Date(post.date + "T00:00:00Z").toUTCString()
        : "";
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ""}
      <description>${escapeXml(post.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} — Writing</title>
    <link>${base}/writing</link>
    <description>${escapeXml(site.metaDescription)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
