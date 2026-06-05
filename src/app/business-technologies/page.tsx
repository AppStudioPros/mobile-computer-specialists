import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import ManagedServices from "@/components/managed/ManagedServices";

export const metadata: Metadata = {
  title:
    "Business Technologies | Managed IT, Cloud & Security | Mobile Computer Specialists",
  description:
    "Business technology services for Denver companies: managed IT, cloud services, and managed security. Proactive monitoring, backups, and protection on a simple monthly plan. We come to you.",
  alternates: { canonical: "/business-technologies" },
};

export default function BusinessTechnologiesPage() {
  return (
    <>
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
