import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSplit from "@/components/contact/ContactSplit";

export const metadata: Metadata = {
  title: "Contact Mobile Computer Specialists",
  description:
    "Schedule your free PC diagnostic. Call 720-276-0797 or email info@mobilecomputerspecialists.com. We come to you in Denver, Colorado.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s get your"
        highlight="tech back on track"
        subtitle="Free diagnostic. Honest quote. Real human. The first step costs you nothing."
      />
      <ContactSplit />
    </>
  );
}
