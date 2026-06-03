import type { Metadata } from "next";
import { TopNav } from "@/components/nav/TopNav";
import { MobileMenu } from "@/components/nav/MobileMenu";
import { VideoStack } from "@/components/stack/VideoStack";
import { Marquee } from "@/components/marquee/Marquee";
import { ServicesGlide } from "@/components/services/ServicesGlide";
import { StatsAbout } from "@/components/stats/StatsAbout";
import { WorkShowcase } from "@/components/work/WorkShowcase";
import { Leadership } from "@/components/leadership/Leadership";
import { Footer } from "@/components/footer/Footer";
import { Curtain } from "@/components/overlays/Curtain";
import { Grain } from "@/components/overlays/Grain";
import { ScrollProgress } from "@/components/overlays/ScrollProgress";
import { Spotlight } from "@/components/overlays/Spotlight";
import { SectionReveal } from "@/components/overlays/SectionReveal";
import { InquiryDialog } from "@/components/inquiry/InquiryDialog";
import { InquirySection } from "@/components/inquiry/InquirySection";
import { SEOContent } from "@/components/seo/SEOContent";

export const metadata: Metadata = {
  title:
    "Sona Sapphire Global Solutions — Advertisement Videos · Social Media · Websites · Brand",
  description:
    "Creative-and-growth studio based in India, working worldwide. Cinematic advertisement videos, end-to-end social media handling, Next.js website development, and brand development — built under one roof. Reply within 24 hours.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Curtain />
      <Grain />
      <Spotlight />
      <ScrollProgress />
      <SectionReveal />
      <TopNav />
      <MobileMenu />
      <main>
        <VideoStack />
        <ServicesGlide />
        <StatsAbout />
        <WorkShowcase />
        <Leadership />
        <Marquee />
        <InquirySection />
        <SEOContent />
      </main>
      <Footer />
      <InquiryDialog />
    </>
  );
}
