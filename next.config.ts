import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Security + cache headers. Applied at the Vercel edge.
  async headers() {
    const securityHeaders = [
      // Stop the browser from sniffing MIME types for served assets.
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Allow same-origin framing (Vercel preview iframes), block external.
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Don't leak full URLs as referers when navigating cross-origin.
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Disable powerful APIs we don't use; opt out of FLoC.
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
      },
      // 1-year HSTS — tells browsers to only ever talk to us over HTTPS.
      // includeSubDomains is conservative (we have none today, so no risk).
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
      },
      // Cross-Origin-Opener-Policy lets us isolate from any opener.
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];

    return [
      // Apply security headers to every route (including HTML, API, static).
      { source: "/:path*", headers: securityHeaders },

      // Long-cache the immutable client video assets at the edge.
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
      // Long-cache the brand emblem assets.
      {
        source: "/brand/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Next.js already caches /_next/static aggressively — re-affirming so
      // any custom CDN in front honours the same policy.
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
