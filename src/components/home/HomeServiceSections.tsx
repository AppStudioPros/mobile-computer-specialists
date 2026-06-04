"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Cpu, Globe, Megaphone } from "lucide-react";

const services = [
  {
    id: "repairs",
    eyebrow: "Computer Repairs",
    title: "When it breaks, we come to you.",
    body: "PC and Mac repair, virus removal, data recovery, IT support, computer cleanup, and free setup. Most fixes happen right at your home or office, with a free diagnostic before any work begins.",
    points: ["Free diagnostics", "On-site service", "PC and Mac", "By-the-job pricing"],
    href: "/computer-repairs",
    cta: "Explore Computer Repairs",
    Icon: Wrench,
    accent: "blue" as const,
  },
  {
    id: "custom-pcs",
    eyebrow: "Custom PCs",
    title: "Built for what you actually do.",
    body: "Gaming rigs, editing workstations, and professional builds, each machine tuned to your work and your budget. We spec it, build it, and test it hard before it ever reaches your desk.",
    points: ["Gaming builds", "Editing rigs", "Workstations", "Built to your spec"],
    href: "/custom-pcs",
    cta: "Explore Custom PCs",
    Icon: Cpu,
    accent: "blue" as const,
  },
  {
    id: "websites",
    eyebrow: "Websites",
    title: "We build websites too.",
    body: "Modern, fast websites and web development, built by the same people you trust for your computers, under our company Web Design Pros 365. Design, development, hosting, security, and branding.",
    points: ["Website design", "Development", "Hosting and security", "Brand identity"],
    href: "/websites",
    cta: "Explore Websites",
    Icon: Globe,
    accent: "amber" as const,
  },
  {
    id: "marketing",
    eyebrow: "Marketing",
    title: "Get found and grow.",
    body: "SEO, AI visibility, digital advertising, and brand growth, run under Web Design Pros 365. The same team, helping your business show up where your customers are already looking.",
    points: ["SEO and AI visibility", "Digital advertising", "Social media", "Brand growth"],
    href: "/marketing",
    cta: "Explore Marketing",
    Icon: Megaphone,
    accent: "amber" as const,
  },
];

export default function HomeServiceSections() {
  return (
    <>
      {services.map((s, i) => {
        const alt = i % 2 === 1;
        const { Icon } = s;
        return (
          <section
            key={s.id}
            className={`py-20 lg:py-28 ${
              alt
                ? "bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]"
                : "bg-[var(--color-mcs-page)]"
            }`}
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  alt ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative flex items-center justify-center"
                >
                  <div
                    className={`absolute w-56 h-56 rounded-full blur-[80px] opacity-30 ${
                      s.accent === "amber"
                        ? "bg-[var(--color-mcs-amber)]"
                        : "bg-[var(--color-mcs-blue)]"
                    }`}
                  />
                  <div className="relative w-40 h-40 rounded-3xl mcs-card-light shadow-sm flex items-center justify-center">
                    <Icon
                      className={`w-20 h-20 ${
                        s.accent === "amber"
                          ? "text-[var(--color-mcs-amber-deep)]"
                          : "text-[var(--color-mcs-blue)]"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>

                {/* Copy side */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`h-1 w-10 rounded-full ${
                        s.accent === "amber"
                          ? "mcs-gradient-amber"
                          : "mcs-gradient-blue"
                      }`}
                    />
                    <span className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-lg text-[var(--color-mcs-muted)] leading-relaxed mb-6">
                    {s.body}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8 max-w-md">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-[var(--color-mcs-text)]"
                      >
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)]" />
                        <span className="text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-base font-bold text-[var(--color-mcs-amber-deep)] hover:text-[var(--color-mcs-amber)] transition-colors"
                  >
                    {s.cta}
                    <span className="group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
