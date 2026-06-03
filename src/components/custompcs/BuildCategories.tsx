"use client";

import { motion } from "framer-motion";

const categories = [
  {
    id: "gaming",
    title: "Gaming PC Builds",
    short: "Flawless gaming.",
    body:
      "High-performance machines built for immersive play. Powerful GPUs, fast processors, smooth frame rates, and the kind of headroom that future-proofs your build.",
    spec: "RTX 4070+ • i7/Ryzen 7 • 32GB+ DDR5 • NVMe storage",
  },
  {
    id: "editing",
    title: "Editing PC Builds",
    short: "Fastest rendering.",
    body:
      "Optimized for video editing, graphic design, 3D, and creative workflows. Heavy processing power, generous RAM, fast scratch disks. Built for projects that punish weak hardware.",
    spec: "RTX 4080+ or Apple Silicon • 64GB+ RAM • Multi-NVMe",
  },
  {
    id: "workstations",
    title: "PC Workstations",
    short: "Unlimited capability.",
    body:
      "Professional builds for engineering, CAD, 3D modeling, scientific computing, and demanding business workloads. Reliability and longevity are the priorities.",
    spec: "Xeon/Threadripper • ECC RAM • Quadro/RTX A-series",
  },
];

export default function BuildCategories() {
  return (
    <section id="builds" className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            Three Build Categories
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            Built for what you actually do.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              id={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="scroll-mt-24 p-8 rounded-2xl mcs-card-dark"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber)] mb-3">
                {c.short}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{c.title}</h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                {c.body}
              </p>
              <div className="text-xs font-mono text-white/50 border-t border-white/10 pt-4">
                {c.spec}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
