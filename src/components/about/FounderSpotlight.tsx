"use client";

import { motion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";

const highlights = [
  "Founder of Mobile Computer Specialists (Denver, CO — 26+ years)",
  "Founder of Web Design Pros 365 (2005)",
  "Inventor, ACI (Adaptive Compound Intelligence) patent",
  "CAO + CTO of an SDVOSB federal contracting partner",
  "Architect on every Lucid Tech production system",
  "Top 1% cohort, Oxford AI University",
];

export default function FounderSpotlight() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden mcs-section-dark">
      <TechBackground variant="dark" intensity={0.7} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
            Meet the Founder
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            Corey Strange
          </h2>
          <p className="text-lg text-white/65 font-light">
            Founder & CTO, Mobile Computer Specialists
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-base lg:text-lg text-white/80 leading-relaxed"
          >
            <p>
              Corey has been in the full-circle technical space for almost 30
              years, including running the #1-rated independent IT company in
              Denver for 26+ years. Mobile Computer Specialists is his
              foundation. The business he built from the ground up, one
              customer at a time.
            </p>
            <p>
              He&apos;s a full-stack developer and web designer since 2005, and
              today he serves as Chief AI Officer and Chief Technology Officer
              for a federal contracting company, where he architects AI systems
              for government acquisition workflows. He is also the named
              inventor on the parent ACI (Adaptive Compound Intelligence)
              patent.
            </p>
            <p className="text-[var(--color-mcs-amber)] font-semibold">
              But MCS is where it started, and it&apos;s still the heart of
              the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-[var(--color-mcs-amber)]/40 transition-all"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-mcs-amber)] mb-5">
              Highlights
            </div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-white/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)] shrink-0" />
                  <span className="text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
