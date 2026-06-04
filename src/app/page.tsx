import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WeComeToYou from "@/components/home/WeComeToYou";
import HomeServiceSections from "@/components/home/HomeServiceSections";
import McsPromise from "@/components/home/McsPromise";
import SocialProof from "@/components/home/SocialProof";
import HomeAbout from "@/components/home/HomeAbout";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WeComeToYou />
      <HomeAbout />
      <HomeServiceSections />
      <McsPromise />
      <SocialProof />
      <FinalCta />
    </>
  );
}
