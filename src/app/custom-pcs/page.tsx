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
};

export default function CustomPCsPage() {
  return (
    <>
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
