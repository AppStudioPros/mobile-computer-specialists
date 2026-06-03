"use client";

import { motion } from "framer-motion";
import { repairServices } from "@/data/repairs";

export default function RepairsList() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            What We Repair
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            Every fix, under one roof.
          </h2>
        </motion.div>

        <div className="space-y-5">
          {repairServices.map((s, i) => (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden scroll-mt-24 mcs-card-light p-6 lg:p-8 rounded-2xl grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 shadow-sm hover:shadow-md hover:border-[var(--color-mcs-amber)]/50 transition-all"
            >
              {/* amber accent bar on hover */}
              <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-mcs-amber)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
              <div>
                <div className="text-3xl font-black text-[var(--color-mcs-amber)] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-mcs-text)] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-mcs-amber-deep)] font-semibold">
                  {s.short}
                </p>
              </div>
              <div>
                <p className="text-base text-[var(--color-mcs-muted)] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
