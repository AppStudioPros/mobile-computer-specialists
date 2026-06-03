"use client";

import { motion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  highlight,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 mcs-section-dark overflow-hidden">
      <TechBackground variant="dark" intensity={0.85} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/90">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white mb-5">
            {title}
            {highlight && (
              <>
                <br />
                <span className="mcs-gradient-text-on-dark">{highlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-mcs-page)] pointer-events-none" />
    </section>
  );
}
