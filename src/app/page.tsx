import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WeComeToYou from "@/components/home/WeComeToYou";
import ServicesGrid from "@/components/home/ServicesGrid";
import McsPromise from "@/components/home/McsPromise";
import SocialProof from "@/components/home/SocialProof";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WeComeToYou />
      <ServicesGrid />
      <McsPromise />
      <SocialProof />
      <FinalCta />
    </>
  );
}
