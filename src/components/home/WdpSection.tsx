"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WDP_CONTACT = "https://www.webdesignpros365.com/contact";

export default function WdpSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--color-mcs-page)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl mcs-card-light border border-[var(--color-mcs-line)] px-8 py-12 lg:px-16 lg:py-16 text-center shadow-sm"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-6">
            Our Web and Marketing Team
          </div>

          {/* Clickable WDP365 logo -> contact page */}
          <a
            href={WDP_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web Design Pros 365 — visit our contact page"
            className="inline-block transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/brand/wdp365-logo.png"
              alt="Web Design Pros 365"
              width={420}
              height={120}
              className="w-auto h-16 lg:h-20 mx-auto"
            />
          </a>

          <p className="mt-8 text-lg text-[var(--color-mcs-muted)] leading-relaxed max-w-2xl mx-auto">
            Our websites, web apps, and marketing run under Web Design Pros 365.
            Different name, same team, same standard. Ready to talk about your
            project?
          </p>

          <a
            href={WDP_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="mcs-shine group mt-8 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber"
          >
            Talk to Web Design Pros 365
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
