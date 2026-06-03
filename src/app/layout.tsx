import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StringTuneProvider } from "@/components/stringtune/StringTuneProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { CONTACT } from "@/data/content";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sona-sapphire.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CONTACT.legal} — Creative Agency · Video Production · Web Development`,
    template: "%s — Sona Sapphire",
  },
  description:
    "Sona Sapphire Global Solutions is a creative-and-growth studio offering cinematic advertisement videos, social media handling, Next.js website development, and brand development for ambitious brands worldwide.",
  applicationName: CONTACT.legal,
  authors: [{ name: CONTACT.legal, url: SITE_URL }],
  creator: CONTACT.legal,
  publisher: CONTACT.legal,
  category: "Creative Agency",
  keywords: [
    // Brand
    "Sona Sapphire",
    "Sona Sapphire Global Solutions",
    "Sona's Sapphire Media International",
    "sonasapphire",
    "sonasapphiregs",
    // Agency / studio
    "creative agency",
    "creative and growth studio",
    "creative media agency",
    "digital growth studio",
    "marketing agency India",
    "creative agency India",
    "full-service agency",
    "advertising agency",
    "production house India",
    // Advertisement videos
    "advertisement videos",
    "advertisement video production",
    "cinematic ads",
    "cinematic brand films",
    "TVC production",
    "TV commercial production",
    "brand films",
    "founder films",
    "manifesto films",
    "product reels",
    "explainer videos",
    "performance creative",
    "video production agency",
    "video production India",
    "education campaign films",
    "school ad films",
    "campus films",
    "PAL College film",
    // Social media
    "social media handling",
    "social media management",
    "social media agency",
    "Instagram growth",
    "Instagram reels",
    "Reels production",
    "YouTube channel strategy",
    "YouTube long-form",
    "Meta ads",
    "Facebook ads",
    "LinkedIn for founders",
    "content calendar",
    "influencer marketing",
    "community management",
    // Web
    "website development",
    "web development agency",
    "Next.js development",
    "React development",
    "TypeScript development",
    "headless CMS",
    "Sanity CMS",
    "Contentful CMS",
    "Shopify development",
    "headless commerce",
    "landing page design",
    "marketing website",
    "software product development",
    "SaaS development",
    "Core Web Vitals optimization",
    "SEO optimization",
    "Awwwards-style websites",
    "cinematic websites",
    // Brand
    "brand development",
    "brand strategy",
    "brand positioning",
    "naming and verbal identity",
    "logo design",
    "identity systems",
    "typography systems",
    "tone of voice",
    "messaging frameworks",
    "launch playbooks",
    "rebrand",
    // Process / outcomes
    "measurable growth",
    "conversion instrumentation",
    "A/B testing creative",
    "growth marketing",
  ],
  openGraph: {
    type: "website",
    title: `${CONTACT.legal} — Cinematic creative · Measurable growth`,
    description:
      "A creative-and-growth studio for brands that refuse the average. Cinematic advertisement videos, social media handling, Next.js websites, and brand development — built end to end.",
    siteName: CONTACT.legal,
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sona Sapphire Global Solutions — Cinematic creative, Measurable growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.legal} — Cinematic creative · Measurable growth`,
    description:
      "Cinematic advertisement videos, social media handling, Next.js websites, and brand development — built end to end.",
    images: ["/opengraph-image"],
    creator: "@sonasapphiregs",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", "x-default": "/" },
  },
  formatDetection: { telephone: false, email: false, address: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1B3A" },
    { media: "(prefers-color-scheme: light)", color: "#0B1B3A" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-svh bg-navy text-ink antialiased">
        <StringTuneProvider>{children}</StringTuneProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
