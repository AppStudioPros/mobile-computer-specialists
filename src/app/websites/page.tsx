import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import WdpPitch from "@/components/branded/WdpPitch";

const services = [
  {
    id: "website-design",
    title: "Website Design",
    body:
      "Modern, mobile-first website design that looks beautiful and turns visitors into customers. Choosing Web Design Pros 365 for your website design means a team driven by creativity, quality, and results. Start with us at Mobile Computer Specialists and we will get you connected.",
  },
  {
    id: "website-development",
    title: "Website Development",
    body:
      "Website development is the art and science of building and maintaining dynamic, functional websites. Web Design Pros 365 builds on a modern stack with fast load times and clean code, the same approach behind the best sites on the web. Tell Mobile Computer Specialists what you need and we will hand you to the right developers.",
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    body:
      "Every great website begins with the perfect name, and a powerful online presence starts there. Web Design Pros 365 handles domain registration, transfers, and reliable hosting so you set it up once and forget about it. Mobile Computer Specialists gets you pointed in the right direction.",
  },
  {
    id: "website-security",
    title: "Website Security",
    body:
      "Web Design Pros 365 delivers website security services designed to safeguard your online presence with precision and care. SSL, malware protection, regular audits, and security hardening keep your site safe and your customers protected. Come through Mobile Computer Specialists and we will connect you.",
  },
  {
    id: "branding",
    title: "Brand Identity",
    body:
      "Strengthen your brand awareness with Mobile Computer Specialists and sister company Web Design Pros 365. Logos, color systems, typography, and brand guidelines that make your business unmistakable and consistent everywhere people find you.",
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
