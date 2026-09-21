import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import ManagedServices from "@/components/managed/ManagedServices";

export const metadata: Metadata = {
  title:
    "Business Technologies | Managed IT, Cloud & Security | Mobile Computer Specialists",
  description:
    "Business technology services for Denver companies: managed IT, cloud services, and managed security. Proactive monitoring, backups, and protection on a simple monthly plan. We come to you.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/business-technologies" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Technology Services Denver",
  serviceType: "Managed IT Services",
  description: "Managed IT, cloud services, and managed security for Denver businesses. Proactive monitoring, backups, and protection on a simple monthly plan. A real person who answers when you call.",
  provider: { "@type": "LocalBusiness", name: "Mobile Computer Specialists", url: "https://mobilecomputerspecialists.com" },
  areaServed: { "@type": "City", name: "Denver, CO" },
  offers: { "@type": "Offer", description: "Monthly managed IT plans with proactive monitoring, cloud management, and security." },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Business Technologies", item: "https://mobilecomputerspecialists.com/business-technologies" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is managed IT support for small businesses?", acceptedAnswer: { "@type": "Answer", text: "Managed IT means we monitor your systems, handle backups, apply security updates, and resolve issues proactively — before they become problems. You pay a predictable monthly fee instead of reacting to expensive emergencies." } },
    { "@type": "Question", name: "Do you offer IT support for Denver small businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists provides on-site and remote IT support for small and mid-size businesses across Denver and the metro. We come to you, handle your technology setup, and keep systems running." } },
    { "@type": "Question", name: "What is included in managed cloud services?", acceptedAnswer: { "@type": "Answer", text: "Cloud services include setup, management, and monitoring of your cloud infrastructure — Microsoft 365, file storage, backups, and cloud security. We handle the technical side so you can focus on your business." } },
    { "@type": "Question", name: "How do you help with business cybersecurity?", acceptedAnswer: { "@type": "Answer", text: "Managed security includes endpoint protection, network monitoring, threat detection, and security policy setup. We help Denver businesses meet basic security hygiene standards and respond quickly when threats emerge." } },
  ],
};

export default function BusinessTechnologiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Business Technologies"
        title="IT that runs in the"
        highlight="background"
        subtitle="Cloud services and managed security for Denver businesses, on a simple monthly plan. We watch your systems, back up your data, and stop problems before they cost you."
      />
      <ManagedServices />
      <PageCta
        title="Ready to stop putting out fires?"
        subtitle="Let us set up managed services so your technology takes care of itself. Start with a free assessment."
        primaryLabel="Get a Free Assessment"
      />
    </>
  );
}
