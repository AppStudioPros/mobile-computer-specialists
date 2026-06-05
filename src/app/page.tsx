import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WeComeToYou from "@/components/home/WeComeToYou";
import FocusedServices from "@/components/home/FocusedServices";
import WdpSection from "@/components/home/WdpSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import HomeAboutPromise from "@/components/home/HomeAboutPromise";
import SocialProof from "@/components/home/SocialProof";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FocusedServices />
      <WdpSection />
      <ServicesGrid />
      <WeComeToYou />
      <HomeAboutPromise />
      <SocialProof />
      <FinalCta />
    </>
  );
}
