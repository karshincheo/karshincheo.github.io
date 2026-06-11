import type { MetadataRoute } from "next";
import { site } from "@content/site";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/writing`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getAllPosts().map((post) => ({
      url: `${base}/writing/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
