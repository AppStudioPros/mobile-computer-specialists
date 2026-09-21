import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSplit from "@/components/contact/ContactSplit";

export const metadata: Metadata = {
  title: "Contact Mobile Computer Specialists",
  description:
    "Schedule your free PC diagnostic. Call 720-276-0797 or email info@mobilecomputerspecialists.com. We come to you in Denver, Colorado.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mobile Computer Specialists",
  url: "https://mobilecomputerspecialists.com/contact",
  description: "Schedule a free PC diagnostic. Mobile Computer Specialists comes to your home or office in Denver and the surrounding metro. No trip fee, no obligation.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Mobile Computer Specialists",
    telephone: "+17204735153",
    email: "info@mobilecomputerspecialists.com",
    url: "https://mobilecomputerspecialists.com",
    areaServed: { "@type": "State", name: "Colorado" },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mobilecomputerspecialists.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://mobilecomputerspecialists.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
