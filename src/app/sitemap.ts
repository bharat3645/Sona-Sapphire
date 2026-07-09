import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sona-sapphire.vercel.app";
  const lastModified = new Date();
  return [
    { url: base,              lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
