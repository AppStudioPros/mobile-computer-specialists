"use client";

import { motion } from "framer-motion";

const trustItems = [
  { label: "5-Star Google", value: "154+ Reviews" },
  { label: "A+ Rating", value: "Better Business Bureau" },
  { label: "26+ Years", value: "Serving Denver" },
  { label: "Mobile Service", value: "We Come to You" },
  { label: "Local Experts", value: "Denver, Colorado" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-14 bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col text-center md:text-left border-l-2 border-[var(--color-mcs-amber)] pl-4"
            >
              <div className="text-base font-bold text-[var(--color-mcs-text)] tracking-tight">
                {item.label}
              </div>
              <div className="text-xs text-[var(--color-mcs-muted)] mt-0.5">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
