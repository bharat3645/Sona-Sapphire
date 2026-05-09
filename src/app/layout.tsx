import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
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
    default: `${CONTACT.legal} — Digital Growth · Creative Media · Web Solutions`,
    template: "%s — Sona Sapphire",
  },
  description:
    "Sona Sapphire Global Solutions engineers cinematic ads, social systems, and high-conversion websites for brands that refuse the average.",
  applicationName: CONTACT.legal,
  authors: [{ name: CONTACT.legal }],
  keywords: [
    "creative media agency",
    "digital growth",
    "advertisement videos",
    "social media management",
    "website development",
    "Sona Sapphire",
  ],
  openGraph: {
    type: "website",
    title: `${CONTACT.legal} — Cinematic creative · Measurable growth`,
    description:
      "Cinematic ads, social systems, websites, and brand — built end to end.",
    siteName: CONTACT.legal,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.legal} — Cinematic creative · Measurable growth`,
    description:
      "Cinematic ads, social systems, websites, and brand — built end to end.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
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
      </body>
    </html>
  );
}
