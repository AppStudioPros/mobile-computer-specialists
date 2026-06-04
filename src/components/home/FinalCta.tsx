"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";

export default function FinalCta() {
  return (
    <section className="relative py-24 lg:py-32 mcs-section-dark overflow-hidden">
      <TechBackground variant="dark" intensity={0.7} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
            Claim Your Free Diagnostic
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            No trip fee. No obligation. <br />
            <span className="mcs-gradient-text-on-dark">No kidding.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Honest assessment. Fair price. Real human on the other end of the
            phone. The first step costs you nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="mcs-shine group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber"
            >
              Book My Diagnostic
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <a
              href="tel:7202760797"
              className="mcs-shine inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              Call 720-276-0797
            </a>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Not sure if we cover your area?{" "}
            <Link
              href="/service-area"
              className="font-semibold text-white/80 underline underline-offset-4 decoration-white/30 hover:text-[var(--color-mcs-amber)] hover:decoration-[var(--color-mcs-amber)] transition-colors"
            >
              See where we go
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
