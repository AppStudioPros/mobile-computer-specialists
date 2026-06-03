"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FreeDiagnosticBanner() {
  return (
    <section className="bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber-deep)] mb-2">
            Always Free
          </div>
          <div className="text-2xl lg:text-3xl font-black text-[var(--color-mcs-text)] leading-tight">
            Diagnostics. Setup. Recycling. Advice.
          </div>
        </motion.div>
        <Link
          href="/contact"
          className="shrink-0 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform"
        >
          Book Your Free Diagnostic →
        </Link>
      </div>
    </section>
  );
}
