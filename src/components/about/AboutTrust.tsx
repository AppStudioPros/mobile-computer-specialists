"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "26+", label: "Years in Denver" },
  { value: "154+", label: "5-Star Reviews" },
  { value: "A+", label: "BBB Rating" },
  { value: "0", label: "Trip Fees, Ever" },
];

export default function AboutTrust() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-black mcs-gradient-text mb-2">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-[var(--color-mcs-muted)] uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
