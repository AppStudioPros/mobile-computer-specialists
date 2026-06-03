import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import AboutStory from "@/components/about/AboutStory";
import FounderSpotlight from "@/components/about/FounderSpotlight";
import AboutTrust from "@/components/about/AboutTrust";
import AboutReviews from "@/components/about/AboutReviews";

export const metadata: Metadata = {
  title: "About Mobile Computer Specialists",
  description:
    "Denver's trusted IT service since 2000. Founded and led by Corey Strange. Home of the Free PC Diagnostics. We come to you, no trip fee, no obligation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Home of the"
        highlight="Free Diagnostics"
        subtitle="26+ years serving Denver. One mission: honest tech work for real people."
      />
      <AboutStory />
      <FounderSpotlight />
      <AboutTrust />
      <AboutReviews />
      <PageCta />
    </>
  );
}
