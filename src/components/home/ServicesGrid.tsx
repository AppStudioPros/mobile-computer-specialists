"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Computer Repairs",
    body: "PC and Mac repair, virus removal, data recovery, IT support, computer cleanup, and free setup.",
    href: "/computer-repairs",
    accent: "blue",
  },
  {
    title: "Custom PCs",
    body: "Gaming rigs, editing workstations, professional builds. Each machine tuned to what you actually do.",
    href: "/custom-pcs",
    accent: "blue",
  },
  {
    title: "Websites",
    body: "Modern web design and development through our sister company, Web Design Pros 365.",
    href: "/websites",
    accent: "amber",
  },
  {
    title: "Marketing",
    body: "SEO, AI Visibility, digital ads, and brand growth through our sister company, Web Design Pros 365.",
    href: "/marketing",
    accent: "amber",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-mcs-page-2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
            Built for Denver. Trusted everywhere.
          </h2>
          <p className="text-lg text-[var(--color-mcs-muted)] leading-relaxed">
            Four service lines, one promise: honest work, fair pricing, free
            advice for life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="group relative block p-8 rounded-2xl mcs-card-light hover:border-[var(--color-mcs-amber)]/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className={`absolute top-8 right-8 w-12 h-1 rounded-full ${
                    service.accent === "amber"
                      ? "mcs-gradient-amber"
                      : "mcs-gradient-blue"
                  }`}
                />
                <h3 className="text-2xl font-bold text-[var(--color-mcs-text)] mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-[var(--color-mcs-muted)] leading-relaxed mb-6">
                  {service.body}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-mcs-amber-deep)]">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
