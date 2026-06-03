"use client";

import { motion } from "framer-motion";

const legacy = [
  "Social Media Marketing",
  "Digital Advertising",
  "Graphic Design & Logos",
  "Content Marketing",
  "Email Marketing",
  "Reputation Management",
  "Video Marketing",
  "Printing & Apparel",
];

export default function LegacyMarketingList() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-8"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-3">
            Also Offered
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-[var(--color-mcs-text)] leading-tight">
            All the marketing classics, too.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {legacy.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="px-5 py-4 rounded-xl bg-[var(--color-mcs-card)] border border-[var(--color-mcs-line)] text-sm font-semibold text-[var(--color-mcs-text)]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
