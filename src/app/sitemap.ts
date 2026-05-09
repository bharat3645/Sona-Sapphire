import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sona-sapphire.vercel.app";
  const lastModified = new Date();
  return [
    { url: base,                     lastModified, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}#work`,           lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}#services`,       lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}#about`,          lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}#work-showcase`,  lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}#inquiry`,        lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}#contact`,        lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`,        lastModified, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
