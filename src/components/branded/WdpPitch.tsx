"use client";

import { motion } from "framer-motion";

type Service = { title: string; body: string; badge?: string };

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-2xl mcs-card-light hover:border-[var(--color-mcs-amber)]/50 hover:shadow-md transition-all"
            >
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
