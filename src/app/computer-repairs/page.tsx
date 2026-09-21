import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import RepairsList from "@/components/repairs/RepairsList";
import FreeDiagnosticBanner from "@/components/repairs/FreeDiagnosticBanner";

export const metadata: Metadata = {
  title: "Computer Repairs Denver | PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Fast, reliable computer repair in Denver. PC and Mac, virus removal, data recovery, IT support, computer cleanup. Free diagnostics. We come to you.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/computer-repairs" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Computer Repair Denver",
  serviceType: "Computer Repair",
  description: "Mobile computer repair for PC and Mac in Denver and surrounding communities. Virus removal, data recovery, IT support, computer cleanup, and free diagnostics on every job. We come to you.",
  provider: { "@type": "LocalBusiness", name: "Mobile Computer Specialists", url: "https://mobilecomputerspecialists.com" },
  areaServed: { "@type": "City", name: "Denver, CO" },
  offers: { "@type": "Offer", description: "Free PC diagnostic on every job. No trip fee." },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Computer Repairs", item: "https://mobilecomputerspecialists.com/computer-repairs" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you charge for computer diagnostics?", acceptedAnswer: { "@type": "Answer", text: "No. Every job starts with a free diagnostic. We assess the problem before any work begins and quote you before touching anything." } },
    { "@type": "Question", name: "Do you repair both PCs and Macs?", acceptedAnswer: { "@type": "Answer", text: "Yes. We repair all Windows desktops and laptops as well as MacBook, MacBook Pro, MacBook Air, and iMac computers." } },
    { "@type": "Question", name: "Can you come to my home or office?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists comes to your home or office anywhere in the Denver metro. No trip fee, no obligation." } },
    { "@type": "Question", name: "How fast can you fix my computer?", acceptedAnswer: { "@type": "Answer", text: "Most repairs are completed on-site during the first visit. Complex repairs or parts orders may require an additional visit. We give you a clear timeline before starting." } },
    { "@type": "Question", name: "Do you remove viruses and malware?", acceptedAnswer: { "@type": "Answer", text: "Yes. Virus and malware removal is one of our most common services. We clean the infection, identify the entry point, and help you prevent reinfection." } },
  ],
};

export default function ComputerRepairsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Computer Repairs"
        title="Fast, reliable repairs"
        highlight="for PC and Mac"
        subtitle="One team. Eight services. Honest pricing. Free diagnostics on every job."
      />
      <FreeDiagnosticBanner />
      <RepairsList />
      <PageCta
        title="Stuck with a busted computer?"
        subtitle="Book a free diagnostic and we&apos;ll come take a look. No trip fee. No obligation."
      />
    </>
  );
}
