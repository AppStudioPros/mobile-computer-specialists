"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ClipboardCheck,
  Wrench,
  Settings,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const steps = [
  {
    icon: Stethoscope,
    title: "Diagnostic Consultation",
    body: "Free, honest assessment of what your computer actually needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Visit and Quote",
    body: "We show up to your home or office, ready to work.",
  },
  {
    icon: Wrench,
    title: "Repair In Home or In Shop",
    body: "Most fixes happen on-site. Heavy lifts come back to the shop.",
  },
  {
    icon: Settings,
    title: "Setup In Home or Office",
    body: "New, rebuilt, refurbished. Setup is always free.",
  },
  {
    icon: CheckCircle2,
    title: "Test and Verify",
    body: "We test your system, peripherals, and answer every question.",
  },
  {
    icon: PhoneCall,
    title: "Follow Up Call",
    body: "We check in after to make sure everything is still humming.",
  },
];

export default function WeComeToYou() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
            How it Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            We come to you.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Six steps from your first call to a working machine. No trip fee.
            No obligation. No kidding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative p-6 rounded-2xl bg-[var(--color-mcs-ink-soft)] border border-[var(--color-mcs-line)] hover:border-[var(--color-mcs-amber)]/40 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl mcs-gradient-blue flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-[var(--color-mcs-amber)]/30 group-hover:text-[var(--color-mcs-amber)]/70 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
