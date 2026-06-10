import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: a "K" monogram on near-black. Matches the monochrome brand.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          color: "#ffffff",
          fontSize: 42,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
