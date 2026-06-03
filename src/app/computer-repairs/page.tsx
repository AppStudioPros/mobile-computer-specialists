import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import RepairsList from "@/components/repairs/RepairsList";
import FreeDiagnosticBanner from "@/components/repairs/FreeDiagnosticBanner";

export const metadata: Metadata = {
  title: "Computer Repairs Denver | PC & Mac Repair | Mobile Computer Specialists",
  description:
    "Fast, reliable computer repair in Denver. PC and Mac, virus removal, data recovery, IT support, computer cleanup. Free diagnostics. We come to you.",
};

export default function ComputerRepairsPage() {
  return (
    <>
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
