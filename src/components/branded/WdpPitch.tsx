"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Service = { id?: string; title: string; body: string; badge?: string };

export default function WdpPitch({
  intro,
  services,
  ctaLabel,
  ctaHref,
}: {
  intro: string;
  services: Service[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Web Design Pros 365 branded logo panel (light bg so the navy mark reads) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white border border-[var(--color-mcs-line)] shadow-sm p-8 sm:p-12 mb-12 flex justify-center"
        >
          {/* WDP365 brand accent bars (purple / royal blue / gold) */}
          <span className="absolute top-0 left-0 h-1.5 w-1/3 bg-gradient-to-r from-[#5B2E8C] to-[#A23DB5]" />
          <span className="absolute top-0 left-1/3 h-1.5 w-1/3 bg-gradient-to-r from-[#1F4FD0] to-[#0F6FE8]" />
          <span className="absolute top-0 left-2/3 h-1.5 w-1/3 bg-gradient-to-r from-[#0F6FE8] to-[#F5B71E]" />
          <Image
            src="/brand/wdp365-logo.png"
            alt="Web Design Pros 365"
            width={2412}
            height={1111}
            className="h-20 sm:h-28 w-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-lg lg:text-xl text-[var(--color-mcs-muted)] leading-relaxed mb-14"
        >
          {intro}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden scroll-mt-24 p-7 rounded-2xl mcs-card-light hover:border-[var(--color-mcs-amber)]/50 hover:shadow-md transition-all"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-[var(--color-mcs-amber)] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
              {s.badge && (
                <span className="inline-block px-3 py-1 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] text-[10px] font-bold uppercase tracking-wider mb-3">
                  {s.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--color-mcs-text)] mb-3">
                {s.title}
              </h3>
              <p className="text-base text-[var(--color-mcs-muted)] leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mcs-shine group inline-flex items-center gap-2 px-8 py-4 rounded-full mcs-gradient-blue text-white font-bold text-base hover:scale-[1.03] transition-transform"
          >
            {ctaLabel}
            <span className="group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
