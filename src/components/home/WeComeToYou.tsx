"use client";

import { motion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";

const steps = [
  {
    title: "Diagnostic Consultation",
    body: "Free, honest assessment of what your computer actually needs.",
  },
  {
    title: "Visit and Quote",
    body: "We show up to your home or office, ready to work.",
  },
  {
    title: "Repair In Home or In Shop",
    body: "Most fixes happen on-site. Heavy lifts come back to the shop.",
  },
  {
    title: "Setup In Home or Office",
    body: "New, rebuilt, refurbished. Setup is always free.",
  },
  {
    title: "Test and Verify",
    body: "We test your system, peripherals, and answer every question.",
  },
  {
    title: "Follow Up Call",
    body: "We check in after to make sure everything is still humming.",
  },
];

export default function WeComeToYou() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-mcs-page)]">
      <TechBackground variant="light" intensity={0.6} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            How it Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
            We come to you.
          </h2>
          <p className="text-lg text-[var(--color-mcs-muted)] leading-relaxed">
            Six steps from your first call to a working machine. No trip fee.
            No obligation. No kidding.
          </p>
        </motion.div>

        {/* Dark cards on light background — keeping the dark card vibe Kelsi liked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-7 rounded-2xl mcs-card-dark hover:border-[var(--color-mcs-amber)]/50 transition-colors"
            >
              <div className="text-5xl font-black text-[var(--color-mcs-amber)]/25 group-hover:text-[var(--color-mcs-amber)] transition-colors mb-4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
