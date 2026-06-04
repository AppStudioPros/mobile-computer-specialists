import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import WdpPitch from "@/components/branded/WdpPitch";

const services = [
  {
    title: "Website Design",
    body: "Modern, mobile-first design that looks beautiful and converts visitors into customers.",
  },
  {
    title: "Website Development",
    body: "Next.js, React, fast servers. Built on the same modern stack used by Vercel and the rest of the web's best.",
  },
  {
    title: "Domain & Hosting",
    body: "Domain registration, transfers, and rock-solid hosting. Set it up once, forget about it.",
  },
  {
    title: "Website Security",
    body: "SSL, malware protection, regular audits, and security hardening so your site stays safe.",
  },
  {
    title: "Brand Identity",
    body: "Logos, color systems, typography, and brand guidelines that make your business unmistakable.",
  },
];

export const metadata: Metadata = {
  title: "Websites | Mobile Computer Specialists",
  description:
    "Need a website? Mobile Computer Specialists partners with Web Design Pros 365 for modern, fast websites built on Next.js. Free consultation.",
};

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Websites"
        title="Meet our sister company,"
        highlight="Web Design Pros 365"
        subtitle="When you need a website, you want a specialist. We partner with Web Design Pros 365 so you get the best of both worlds."
      />
      <WdpPitch
        intro="MCS knows our lane: hardware, repair, custom builds. For websites, we partner with the experts at Web Design Pros 365. Modern stack, fast sites, real designers, real developers."
        services={services}
        ctaLabel="Explore Web Design Pros 365"
        ctaHref="https://webdesignpros365.com"
      />
      <PageCta
        title="Want us to make the intro?"
        subtitle="If you&apos;d rather start with MCS, we&apos;ll get you connected and walk you through it together."
        primaryLabel="Get Started With MCS"
      />
    </>
  );
}
