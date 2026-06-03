"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";
import LordIcon from "@/components/ui/LordIcon";

// Lordicon: animated diagnostic / cog wrench (substitute as needed)
const ICON_DIAGNOSTIC = "https://cdn.lordicon.com/jeuxydnh.json"; // computer scan/diagnostic

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mcs-section-dark">
      {/* Animated tech background */}
      <TechBackground variant="dark" intensity={1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-mcs-amber)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/95">
                Denver&apos;s Trusted IT Service for 26+ Years
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="block text-white">Home of the</span>
              <span className="block mcs-gradient-text-on-dark">
                Free PC Diagnostics
              </span>
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
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <a
                href="tel:7202760797"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/8 border border-white/20 text-white font-semibold text-base hover:bg-white/15 transition-colors backdrop-blur-sm"
              >
                Call 720-276-0797
              </a>
            </div>
          </motion.div>

          {/* Right: animated diagnostic icon (Lordicon - one of our few icons) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--color-mcs-blue)] blur-[80px] opacity-40" />
              <div className="relative w-72 h-72 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
                <LordIcon
                  src={ICON_DIAGNOSTIC}
                  trigger="loop"
                  colors="primary:#ffb547,secondary:#189dfc"
                  size={200}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to light */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-mcs-page)] pointer-events-none" />
    </section>
  );
}
