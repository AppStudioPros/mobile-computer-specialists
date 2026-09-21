import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WeComeToYou from "@/components/home/WeComeToYou";
import FocusedServices from "@/components/home/FocusedServices";
import WdpSection from "@/components/home/WdpSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import HomeAboutPromise from "@/components/home/HomeAboutPromise";
import SocialProof from "@/components/home/SocialProof";
import FinalCta from "@/components/home/FinalCta";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mobilecomputerspecialists.com/#business",
  name: "Mobile Computer Specialists",
  alternateName: "MCS",
  description:
    "Denver's mobile IT service for over 26 years. Computer repair, custom PC builds, business technology, and IT support — we come to you. Free diagnostics, no trip fee, no obligation.",
  url: "https://mobilecomputerspecialists.com",
  telephone: "+17204735153",
  email: "info@mobilecomputerspecialists.com",
  foundingDate: "1998",
  slogan: "Home of the Free PC Diagnostics",
  areaServed: [
    { "@type": "City", name: "Denver, CO" },
    { "@type": "City", name: "Arvada, CO" },
    { "@type": "City", name: "Lakewood, CO" },
    { "@type": "City", name: "Littleton, CO" },
    { "@type": "City", name: "Westminster, CO" },
    { "@type": "City", name: "Thornton, CO" },
    { "@type": "City", name: "Broomfield, CO" },
    { "@type": "City", name: "Northglenn, CO" },
    { "@type": "City", name: "Commerce City, CO" },
    { "@type": "City", name: "Golden, CO" },
    { "@type": "City", name: "Englewood, CO" },
    { "@type": "City", name: "Wheat Ridge, CO" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "170",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Computer Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free PC Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom PC Builds" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virus Removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Recovery" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Technology" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Hardware Builds" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Mobile Computer Specialists charge a trip fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mobile Computer Specialists comes to your home or office with no trip fee and no obligation. The diagnostic is free on every job.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Mobile Computer Specialists serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile Computer Specialists serves Denver, Arvada, Lakewood, Littleton, Westminster, Thornton, Broomfield, Northglenn, Commerce City, Golden, Englewood, Wheat Ridge, and surrounding Denver metro communities.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Mobile Computer Specialists been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile Computer Specialists has been serving the Denver metro for over 26 years, since 1998.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mobile Computer Specialists BBB accredited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mobile Computer Specialists is BBB accredited with an A+ rating.",
      },
    },
    {
      "@type": "Question",
      name: "Can Mobile Computer Specialists repair both PCs and Macs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mobile Computer Specialists repairs all Windows desktops and laptops as well as MacBook, MacBook Pro, MacBook Air, and iMac computers.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
