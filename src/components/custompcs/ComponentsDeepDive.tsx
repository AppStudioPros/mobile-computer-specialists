"use client";

import { motion } from "framer-motion";

const parts = [
  {
    title: "Cutting-Edge GPUs",
    body:
      "From RTX 4070 to RTX 4090 to professional Quadros. We help you pick the right card for your workload and budget. No upsell.",
  },
  {
    title: "Top Processors",
    body:
      "Intel Core, AMD Ryzen, Threadripper, Xeon, Apple Silicon. We pair the processor to your real-world workflow.",
  },
  {
    title: "Memory & Storage",
    body:
      "Generous DDR5 RAM. Multi-tier NVMe storage. Optical drives if you really need them. We spec for speed and headroom.",
  },
  {
    title: "Cooling & Cases",
    body:
      "Quiet, efficient cooling. Cases that match your aesthetic and your airflow needs. Looks matter, but thermals win.",
  },
];

export default function ComponentsDeepDive() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page-2)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            Components
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            The parts inside, picked on purpose.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {parts.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-2xl mcs-card-light shadow-sm hover:shadow-lg hover:border-[var(--color-mcs-amber)]/50 hover:scale-[1.02] transition-all"
            >
              <h3 className="text-xl font-bold text-[var(--color-mcs-text)] mb-3">
                {p.title}
              </h3>
              <p className="text-base text-[var(--color-mcs-muted)] leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
