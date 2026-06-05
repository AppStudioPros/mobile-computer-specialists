"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import TechBackground from "@/components/ui/TechBackground";

const BBB_PROFILE =
  "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509";

export default function Hero() {
  return (
    <section className="relative overflow-hidden mcs-section-dark">
      {/* Animated tech background */}
      <TechBackground variant="dark" intensity={1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
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
                Denver Business Technology · 26+ Years
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="block text-white">Technology that grows</span>
              <span className="block mcs-gradient-text-on-dark">
                your business
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-xl sm:text-2xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light">
              Modern websites, AI search visibility, and managed IT for Denver
              businesses. Built by the same team Denver has trusted for over 26
              years.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="mcs-shine group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber"
              >
                Get a Free Audit
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/websites"
                className="mcs-shine inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/8 border border-white/20 text-white font-semibold text-base hover:bg-white/15 transition-colors backdrop-blur-sm"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right: bare BBB A+ badge, links to profile, hover-zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Soft glow that drifts/breathes slowly behind the badge */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[var(--color-mcs-blue)] blur-[100px]"
                animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.9, 1.08, 0.9] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <a
                href={BBB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BBB Accredited Business — A+ Rating — View profile"
                title="BBB Accredited · A+ Rating since 9/15/2021"
                className="relative block transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/brand/bbb-accredited.png"
                  alt="BBB Accredited Business A+ Rating"
                  width={316}
                  height={131}
                  className="w-72 h-auto drop-shadow-2xl"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to light */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-mcs-page)] pointer-events-none" />
    </section>
  );
}
