import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import WdpPitch from "@/components/branded/WdpPitch";
import LegacyMarketingList from "@/components/branded/LegacyMarketingList";
import MarketingSections from "@/components/branded/MarketingSections";

const flagshipServices = [
  {
    title: "AI Visibility Stack (SEO + AEO + GEO)",
    body:
      "Flagship service. Rank in Google, be the answer in AI Overviews, and get cited by ChatGPT, Claude, Gemini, and Perplexity. Three disciplines, one engagement.",
    badge: "Flagship",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    body:
      "Get selected as THE direct answer in Google AI Overviews, voice search, and featured snippets.",
  },
  {
    title: "SEO & Performance Optimization",
    body:
      "Top Google rankings and Core Web Vitals tuning. Pairs with AEO and GEO for full visibility.",
  },
  {
    title: "Digital Marketing & Analytics",
    body:
      "Data-driven campaigns, GA4 setup, conversion tracking, A/B testing, and ROI reporting.",
  },
];

export const metadata: Metadata = {
  title: "Marketing | Mobile Computer Specialists",
  description:
    "Grow your business with modern marketing. AI Visibility, SEO, AEO, GEO, digital advertising, and brand growth through our sister company Web Design Pros 365.",
};

export default function MarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketing"
        title="Marketing that drives"
        highlight="real growth"
        subtitle="Modern visibility and brand growth, powered by our sister company Web Design Pros 365."
      />
      <WdpPitch
        intro="Marketing has changed. SEO alone is no longer enough. To win today, you need to rank in Google, be the answer in AI Overviews, and get cited by ChatGPT, Claude, Gemini, and Perplexity. Our sister company runs all of it."
        services={flagshipServices}
        ctaLabel="Explore Web Design Pros 365 Services"
        ctaHref="https://webdesignpros365.com/services"
      />
      <LegacyMarketingList />
      <MarketingSections />
      <PageCta
        title="Ready to grow?"
        subtitle="Start with MCS or jump straight to our sister company. Either way, we&apos;ll get you in front of the right audience."
        primaryLabel="Get Started With MCS"
      />
    </>
  );
}
