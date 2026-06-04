"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BbbBadge from "@/components/ui/BbbBadge";

export default function HomeAbout() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
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
              About Us
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-5 max-w-3xl">
            The same people, here for Denver for more than 26 years.
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-mcs-muted)] leading-relaxed max-w-3xl mb-8">
            <p>
              Mobile Computer Specialists has served the Denver metro for over
              26 years. We are a local business built on honest work, fair
              pricing, and treating people the way we would want to be treated.
              When you call, you reach the same people who do the work.
            </p>
            <p>
              Our website, marketing, and IT services run under our company Web
              Design Pros 365. Different name, same team, same standard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-base font-bold text-[var(--color-mcs-amber-deep)] hover:text-[var(--color-mcs-amber)] transition-colors"
            >
              More about us
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>

          {/* BBB trust badge (moved here from its own section) */}
          <div className="mt-10">
            <BbbBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
