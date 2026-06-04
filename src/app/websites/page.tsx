import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import WdpPitch from "@/components/branded/WdpPitch";

const services = [
  {
    id: "website-design",
    title: "Website Design",
    body:
      "Modern, mobile-first website design that looks beautiful and turns visitors into customers. Our design work is driven by creativity, quality, and results, built around your brand and the people you want to reach.",
    points: [
      "Mobile-first, responsive layouts",
      "Conversion-focused structure",
      "Built around your brand",
      "Clean, modern visual design",
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    body:
      "Website development is the art and science of building and maintaining dynamic, functional websites. We build on a modern stack with fast load times and clean code, the same approach behind the best sites on the web.",
    points: [
      "Next.js and React",
      "Fast load times and clean code",
      "Scalable and easy to maintain",
      "Integrations and custom features",
    ],
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    body:
      "Every great website begins with the perfect name, and a powerful online presence starts there. We handle domain registration, transfers, and reliable hosting so you set it up once and forget about it.",
    points: [
      "Domain registration and transfers",
      "Reliable, fast hosting",
      "SSL included",
      "Set it up once and forget it",
    ],
  },
  {
    id: "website-security",
    title: "Website Security",
    body:
      "We deliver website security services designed to safeguard your online presence with precision and care. SSL, malware protection, regular audits, and security hardening keep your site safe and your customers protected.",
    points: [
      "SSL and encryption",
      "Malware protection and removal",
      "Regular security audits",
      "Hardening and monitoring",
    ],
  },
  {
    id: "branding",
    title: "Brand Identity",
    body:
      "Strong branding makes your business unmistakable. Logos, color systems, typography, and brand guidelines that stay consistent everywhere people find you, from your website to your storefront.",
    points: [
      "Logo and mark design",
      "Color systems and typography",
      "Brand guidelines",
      "Consistent across every touchpoint",
    ],
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
        title="We build websites too, as"
        highlight="Web Design Pros 365"
        subtitle="Same team, same people. Our website, marketing, and IT services run under Web Design Pros 365. When you need a site, you are still working with us."
      />
      <WdpPitch
        intro="Web Design Pros 365 is us. It is the name our website and marketing work runs under, built by the same people you already trust for your computers. Modern stack, fast sites, real designers, real developers."
        services={services}
        ctaLabel="Get in touch with Web Design Pros 365"
        ctaHref="https://www.webdesignpros365.com/contact"
      />
      <PageCta
        title="Ready to build your website?"
        subtitle="Start here and we will take it from the first call all the way through launch."
        primaryLabel="Get Started"
      />
    </>
  );
}
