import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import BuildCategories from "@/components/custompcs/BuildCategories";
import BuildProcess from "@/components/custompcs/BuildProcess";
import ComponentsDeepDive from "@/components/custompcs/ComponentsDeepDive";

export const metadata: Metadata = {
  title: "Custom PC Builds Denver | Gaming, Editing, Workstations",
  description:
    "Custom PCs built in Denver. Gaming rigs, editing workstations, professional builds. Top GPUs and processors. Honest consultation, fair pricing.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/custom-pcs" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom PC Builds Denver",
  serviceType: "Custom Computer Building",
  description: "Custom PCs built in Denver — gaming rigs, video editing workstations, AI hardware builds, and professional systems. We come to you, or build in shop. Honest consultation, top components, fair pricing.",
  provider: { "@type": "LocalBusiness", name: "Mobile Computer Specialists", url: "https://mobilecomputerspecialists.com" },
  areaServed: { "@type": "City", name: "Denver, CO" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Custom PCs", item: "https://mobilecomputerspecialists.com/custom-pcs" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you build a custom gaming PC in Denver?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mobile Computer Specialists builds custom gaming PCs in Denver with top-tier GPUs (RTX 4080, 4090), high-refresh displays, and optimized cooling. We consult, source parts, and build to your exact specs." } },
    { "@type": "Question", name: "Do you build AI hardware and local LLM rigs?", acceptedAnswer: { "@type": "Answer", text: "Yes. We build AI workstations for running local large language models, multi-GPU setups, and on-device AI inference rigs. Ideal for developers, researchers, and businesses wanting local AI without cloud dependency." } },
    { "@type": "Question", name: "How long does a custom PC build take?", acceptedAnswer: { "@type": "Answer", text: "Most custom builds take 1-2 weeks from consultation to delivery, depending on parts availability. We give you a clear timeline upfront." } },
    { "@type": "Question", name: "Do you offer a warranty on custom PC builds?", acceptedAnswer: { "@type": "Answer", text: "Yes. All custom builds come with a workmanship warranty. Individual components carry their manufacturer warranties. We stand behind our builds." } },
    { "@type": "Question", name: "Can you build an editing workstation for video production?", acceptedAnswer: { "@type": "Answer", text: "Yes. We build video editing workstations optimized for DaVinci Resolve, Premiere Pro, and After Effects with fast NVMe storage, dedicated GPUs, and high-core-count processors." } },
  ],
};

export default function CustomPCsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        eyebrow="Custom PCs"
        title="Build your"
        highlight="dream machine"
        subtitle="Gaming. Editing. Professional. Each build tuned to what you actually do."
      />
      <BuildCategories />
      <ComponentsDeepDive />
      <BuildProcess />
      <PageCta
        title="Ready to spec your build?"
        subtitle="Tell us what you want it to do. We&apos;ll spec the right parts and quote it fairly."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
