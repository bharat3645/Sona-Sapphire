import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { StringTuneProvider } from "@/components/stringtune/StringTuneProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://sonasapphire.com"),
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
    title: CONTACT.legal,
    description: "Cinematic creative · Measurable growth.",
    siteName: CONTACT.legal,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-svh bg-navy text-ink antialiased">
        <StringTuneProvider>{children}</StringTuneProvider>
      </body>
    </html>
  );
}
