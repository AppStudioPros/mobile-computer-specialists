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
    "Denver's trusted IT service since 1998. Founded and led by Corey Strange. Home of the Free PC Diagnostics. We come to you, no trip fee, no obligation.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/about" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Corey Strange",
  jobTitle: "Founder",
  worksFor: { "@type": "LocalBusiness", name: "Mobile Computer Specialists", url: "https://mobilecomputerspecialists.com" },
  description: "Founder of Mobile Computer Specialists and Lucid Tech LLC. 26+ years in Denver IT services.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://mobilecomputerspecialists.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
