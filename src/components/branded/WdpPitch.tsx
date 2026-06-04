"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Service = { id?: string; title: string; body: string; points?: string[] };

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
    <>
      {/* Intro + branded logo panel */}
      <section className="py-20 lg:py-24 bg-[var(--color-mcs-page)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-white border border-[var(--color-mcs-line)] shadow-sm p-8 sm:p-12 mb-12 flex justify-center"
          >
            {/* Web Design Pros 365 brand accent bars (purple / royal blue / gold) */}
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
            className="max-w-3xl text-lg lg:text-xl text-[var(--color-mcs-muted)] leading-relaxed"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Full-width stacked service sections, alternating background bands */}
      {services.map((s, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={s.title}
            id={s.id}
            className={`scroll-mt-20 py-16 lg:py-20 ${
              alt
                ? "bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]"
                : "bg-[var(--color-mcs-page)]"
            }`}
          >
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-1 w-10 rounded-full mcs-gradient-amber" />
                  <span className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider">
                    Web Design Pros 365
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-5">
                  {s.title}
                </h2>
                <p className="max-w-3xl text-lg text-[var(--color-mcs-muted)] leading-relaxed">
                  {s.body}
                </p>

                {s.points && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-[var(--color-mcs-text)]"
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)]" />
                        <span className="text-base">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Branded text link out to the Web Design Pros 365 contact page */}
      <section className="py-16 bg-[var(--color-mcs-page)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group inline-flex items-center gap-2 text-lg font-bold text-[#1F4FD0] underline underline-offset-4 decoration-2 decoration-[#1F4FD0]/40 hover:text-[#8B2F9E] hover:decoration-[#8B2F9E] transition-colors"
          >
            {ctaLabel}
            <span className="group-hover:translate-x-1 transition-transform">
              &#8599;
            </span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
