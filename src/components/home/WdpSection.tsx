"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WDP_CONTACT = "https://www.webdesignpros365.com/contact";

const pills = ["Web Design", "Web Apps", "SEO and AI Visibility", "Branding"];

export default function WdpSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-[var(--color-mcs-line)] shadow-lg"
        >
          {/* LEFT: branded gradient logo panel (WDP brand: purple -> blue -> magenta) */}
          <div
            className="relative flex items-center justify-center p-12 lg:p-16 min-h-[280px] overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #8734E1 0%, #2F73EE 55%, #BF5DE0 100%)",
            }}
          >
            {/* drifting light accents */}
            <motion.div
              className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-white/20 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 20, 0], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -right-8 w-64 h-64 rounded-full bg-[#BF5DE0]/40 blur-3xl"
              animate={{ x: [0, -24, 0], y: [0, -18, 0], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <a
              href={WDP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Web Design Pros 365 — visit our contact page"
              className="relative z-10 inline-block transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/brand/wdp365-logo.png"
                alt="Web Design Pros 365"
                width={460}
                height={130}
                className="w-auto h-16 lg:h-24 drop-shadow-2xl brightness-0 invert"
                priority={false}
              />
            </a>
          </div>

          {/* RIGHT: copy + pills + CTA */}
          <div className="bg-[var(--color-mcs-page-2)] p-10 lg:p-14 flex flex-col justify-center">
            <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
              Our Web and Marketing Team
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
              Web Design Pros 365.
            </h2>
            <p className="text-lg text-[var(--color-mcs-muted)] leading-relaxed mb-6">
              Our websites, web apps, and marketing run under Web Design Pros
              365. Different name, same team, same standard.
            </p>

            {/* capability pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold text-[var(--color-mcs-text)] bg-[var(--color-mcs-page)] border border-[var(--color-mcs-line)]"
                >
                  {p}
                </span>
              ))}
            </div>

            <a
              href={WDP_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="mcs-shine group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.03] transition-transform mcs-glow-amber self-start"
            >
              Talk to Web Design Pros 365
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
