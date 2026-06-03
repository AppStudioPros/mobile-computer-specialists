"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Cpu, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Computer Repairs",
    body: "PC and Mac repair, virus removal, data recovery, IT support, computer cleanup, and free setup.",
    href: "/computer-repairs",
    accent: "from-[#189dfc] to-[#073b97]",
  },
  {
    icon: Cpu,
    title: "Custom PCs",
    body: "Gaming rigs, editing workstations, professional builds. Each machine tuned to what you actually do.",
    href: "/custom-pcs",
    accent: "from-[#189dfc] to-[#073b97]",
  },
  {
    icon: Globe,
    title: "Websites",
    body: "Modern web design and development through our sister company, Web Design Pros 365.",
    href: "/websites",
    accent: "from-[#ffb547] to-[#e89527]",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    body: "SEO, AI Visibility, digital ads, and brand growth through our sister company, Web Design Pros 365.",
    href: "/marketing",
    accent: "from-[#ffb547] to-[#e89527]",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-mcs-ink-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Built for Denver. Trusted everywhere.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Four service lines, one promise: honest work, fair pricing, free
            advice for life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={service.href}
                  className="group relative block p-8 rounded-2xl bg-[var(--color-mcs-surface)] border border-[var(--color-mcs-line)] hover:border-[var(--color-mcs-amber)]/40 transition-all hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed mb-6">
                    {service.body}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-mcs-amber)]">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
