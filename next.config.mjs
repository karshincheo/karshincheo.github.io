/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — the site is fully static, so it can be served from
  // GitHub Pages (or any static host). Output lands in out/.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
