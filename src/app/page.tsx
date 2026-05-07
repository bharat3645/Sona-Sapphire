import { TopNav } from "@/components/nav/TopNav";
import { VideoStack } from "@/components/stack/VideoStack";
import { ServicesGlide } from "@/components/services/ServicesGlide";
import { StatsAbout } from "@/components/stats/StatsAbout";
import { Footer } from "@/components/footer/Footer";
import { Curtain } from "@/components/overlays/Curtain";
import { Grain } from "@/components/overlays/Grain";
import { ScrollProgress } from "@/components/overlays/ScrollProgress";
import { Spotlight } from "@/components/overlays/Spotlight";

export default function HomePage() {
  return (
    <>
      <Curtain />
      <Grain />
      <Spotlight />
      <ScrollProgress />
      <TopNav />
      <main>
        <VideoStack />
        <ServicesGlide />
        <StatsAbout />
      </main>
      <Footer />
    </>
  );
}
