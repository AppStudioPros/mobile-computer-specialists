"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-mcs-amber)] blur-[180px] opacity-15" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-[var(--color-mcs-ink-soft)] to-[var(--color-mcs-surface)] border border-[var(--color-mcs-line)] p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Decorative corner glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--color-mcs-amber)] blur-[100px] opacity-30" />

          <div className="relative">
            <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
              Claim Your Free Diagnostic
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              No trip fee. No obligation. <br />
              <span className="mcs-gradient-text">No kidding.</span>
            </h2>
            <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
              Honest assessment. Fair price. Real human on the other end of the
              phone. The first step costs you nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber"
              >
                Book My Diagnostic
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:7202760797"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 720-276-0797
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
