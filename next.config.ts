import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    // Brand emblem PNGs ship pre-sized; keep them out of the optimizer
    // so the gem doesn't get re-rasterised at micro nav scales.
    unoptimized: false,
  },
};

export default nextConfig;
