"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "websites",
    eyebrow: "Websites and Web Apps",
    title: "Modern websites that win you business.",
    body: "Fast, modern websites and custom web apps built on the same architecture used by today's top technology companies. Designed, developed, hosted, and secured by Web Design Pros 365, our in-house web team. Built to load fast, rank well, and turn visitors into clients.",
    points: ["Website and web app design", "Next.js development", "Hosting and security", "Brand identity"],
    href: "/websites",
    cta: "Explore Websites",
    accent: "amber" as const,
  },
  {
    id: "marketing",
    eyebrow: "Marketing and AI Visibility",
    title: "Get found in search and AI.",
    body: "SEO, AI search visibility (AEO and GEO), digital advertising, and brand growth, run by Web Design Pros 365. We make sure your business shows up where your customers are already looking, in Google and in AI answer engines like ChatGPT and Perplexity.",
    points: ["SEO, AEO, and GEO", "Digital advertising", "Social media", "Brand growth"],
    href: "/marketing",
    cta: "Explore Marketing",
    accent: "amber" as const,
  },
  {
    id: "repairs",
    eyebrow: "Computer Repairs",
    title: "When it breaks, we come to you.",
    body: "PC and Mac repair, virus removal, data recovery, IT support, computer cleanup, and free setup. Most fixes happen right at your home or office, with a free diagnostic before any work begins. The hands-on service that built our reputation over 26 years.",
    points: ["Free diagnostics", "On-site service", "PC and Mac", "By-the-job pricing"],
    href: "/computer-repairs",
    cta: "Explore Computer Repairs",
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
    accent: "blue" as const,
  },
];

export default function HomeServiceSections() {
  return (
    <>
      {services.map((s, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={s.id}
            className={`py-16 lg:py-20 ${
              alt
                ? "bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]"
                : "bg-[var(--color-mcs-page)]"
            }`}
          >
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                <p className="max-w-3xl text-lg text-[var(--color-mcs-muted)] leading-relaxed mb-6">
                  {s.body}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 max-w-2xl">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-[var(--color-mcs-text)]"
                    >
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)]" />
                      <span className="text-base">{p}</span>
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
          </section>
        );
      })}
    </>
  );
}
