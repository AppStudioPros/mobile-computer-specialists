"use client";

import { motion } from "framer-motion";

const BBB_PROFILE =
  "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509";

/**
 * BBB A+ trust badge using the official accredited seal image
 * (same asset as the Web Design Pros 365 site). Renders inline
 * (no section wrapper) so it can be dropped into any section.
 */
export default function BbbBadge() {
  return (
    <motion.a
      href={BBB_PROFILE}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="BBB Accredited Business — A+ Rating — View profile"
      title="BBB Accredited · A+ Rating since 9/15/2021"
      className="group inline-flex items-center gap-4 px-7 py-5 rounded-2xl bg-white border border-[var(--color-mcs-line)] shadow-md hover:border-[var(--color-mcs-amber)] hover:shadow-xl transition-all"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/bbb-accredited.png"
        alt="BBB Accredited Business A+ Rating"
        className="h-16 md:h-20 w-auto"
        width={170}
        height={70}
      />
      <div className="text-left">
        <div className="text-xs uppercase tracking-wider text-[var(--color-mcs-muted)] mb-0.5">
          Trust Verified
        </div>
        <div className="text-base md:text-lg font-bold text-[var(--color-mcs-text)] group-hover:text-[var(--color-mcs-amber-deep)] transition-colors">
          View BBB Profile
          <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </div>
        <div className="text-xs text-[var(--color-mcs-muted)] mt-1">
          A+ Rating &middot; Accredited since 9/15/2021
        </div>
      </div>
    </motion.a>
  );
}
