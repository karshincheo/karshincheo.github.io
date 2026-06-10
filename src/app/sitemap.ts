import type { MetadataRoute } from "next";
import { site } from "@content/site";

export const dynamic = "force-static";

// NOTE: The Writing section is hidden for now. When you re-enable it,
// restore the /writing routes here (see git history / README).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
