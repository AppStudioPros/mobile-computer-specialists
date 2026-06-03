"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient + grid */}
      <div className="absolute inset-0 bg-[var(--color-mcs-ink)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--color-mcs-blue)] blur-[160px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[var(--color-mcs-amber)] blur-[180px] opacity-60" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <ShieldCheck className="w-4 h-4 text-[var(--color-mcs-amber)]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              Denver&apos;s Trusted IT Service for 26+ Years
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="block text-white">Home of the</span>
            <span className="block mcs-gradient-text">Free PC Diagnostics</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light">
            We come to you. No trip fee. No obligation. No kidding.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber"
            >
              Claim Free Diagnostic
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
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-widest"
      >
        Scroll
      </motion.div>
    </section>
  );
}
