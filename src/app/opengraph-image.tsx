import { ImageResponse } from "next/og";
import { site } from "@content/site";

export const alt = `${site.name} — ${site.eyebrow}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card. Monochrome, type-forward — matches the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          {site.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#111111",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#3f3f46",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            {site.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          <span>{site.location}</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
