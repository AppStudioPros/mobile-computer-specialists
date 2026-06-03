"use client";

import { motion } from "framer-motion";

const GOOGLE_PROFILE =
  "https://www.google.com/search?kgmid=/g/11cffbzp9&q=Mobile+Computer+Specialists";
const BBB_PROFILE =
  "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509";

const trustItems = [
  { label: "5.0 Stars", value: "168 Google Reviews", href: GOOGLE_PROFILE },
  { label: "A+ Rating", value: "BBB Accredited", href: BBB_PROFILE },
  { label: "26+ Years", value: "Serving Denver Metro", href: null },
  { label: "Free Diagnostics", value: "We Come to You", href: null },
  { label: "Mobile Service", value: "35-Mile Radius", href: null },
];

export default function TrustStrip() {
  return (
    <section className="relative py-14 bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-8">
          {trustItems.map((item, i) => {
            const inner = (
              <>
                <div className="text-base font-bold text-[var(--color-mcs-text)] tracking-tight">
                  {item.label}
                </div>
                <div className="text-xs text-[var(--color-mcs-muted)] mt-0.5">
                  {item.value}
                </div>
              </>
            );
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col text-center md:text-left border-l-2 border-[var(--color-mcs-amber)] pl-4"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-colors hover:[&_div:first-child]:text-[var(--color-mcs-amber-deep)]"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
