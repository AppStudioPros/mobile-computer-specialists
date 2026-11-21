import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Computer Repair, Custom PCs & Business IT Services",
  description:
    "Explore mobile computer repair, custom PCs, managed IT, websites, and marketing from Mobile Computer Specialists and the Web Design Pros 365 team.",
  alternates: { canonical: "https://mobilecomputerspecialists.com/services" },
};

const services = [
  { name: "Mobile Computer Repair", href: "/computer-repairs", description: "PC and Mac repair, malware removal, data recovery, and at-home or office diagnostics." },
  { name: "Custom PCs", href: "/custom-pcs", description: "Gaming PCs, editing systems, professional workstations, and AI hardware builds." },
  { name: "Business Technologies", href: "/business-technologies", description: "Managed IT, cloud services, backups, and security for businesses." },
  { name: "Websites", href: "/websites", description: "Website design, development, hosting, and security through Web Design Pros 365." },
  { name: "Marketing", href: "/marketing", description: "Search visibility, advertising, social media, and design through Web Design Pros 365." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile Computer Specialists"
        title="Computer and business"
        highlight="technology services"
        subtitle="Get help with a computer problem at home or find ongoing support for your business."
      />
      <section className="px-6 py-16">
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {services.map(({ name, href, description }) => (
            <li key={href}>
              <Link href={href} className="mcs-card-light block h-full rounded-xl border p-6 hover:underline">
                <h2 className="mb-2 text-xl font-bold">{name}</h2>
                <p className="text-[var(--color-mcs-muted)]">{description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
