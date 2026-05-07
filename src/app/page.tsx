import { TopNav } from "@/components/nav/TopNav";
import { VideoStack } from "@/components/stack/VideoStack";
import { ServicesGlide } from "@/components/services/ServicesGlide";
import { StatsAbout } from "@/components/stats/StatsAbout";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
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
