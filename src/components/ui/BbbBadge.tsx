"use client";

import { motion } from "framer-motion";

const BBB_PROFILE =
  "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509";

/**
 * BBB A+ trust badge, styled to match the Web Design Pros 365 site:
 * navy "Better Business Bureau / Accredited Business" pill connected to a
 * blue "A+ RATING" section, with Trust Verified text alongside.
 * Renders inline (no section wrapper) so it can be dropped into any section.
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
      className="group inline-flex flex-col sm:flex-row items-center gap-5 bg-white rounded-2xl border border-[var(--color-mcs-line)] shadow-sm hover:shadow-md transition-all px-6 py-5"
    >
      {/* BBB + A+ connected pill */}
      <div className="flex items-stretch shrink-0 rounded-xl overflow-hidden">
        {/* Navy: Better Business Bureau / Accredited Business */}
        <div className="flex items-center gap-2 bg-[#0A2A66] text-white px-4 py-3">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
            <path d="M12 2c-1.1 2.2-2.5 3.4-4 4 .6 2.4-.2 4.2-1.2 5.6C8.4 11.4 10 11 12 11s3.6.4 5.2.6c-1-1.4-1.8-3.2-1.2-5.6-1.5-.6-2.9-1.8-4-4z" />
            <path d="M6 13c0 4 2.7 7 6 9 3.3-2 6-5 6-9-1.8-.3-3.9-.6-6-.6s-4.2.3-6 .6z" opacity="0.85" />
          </svg>
          <div className="leading-none">
            <div className="text-[9px] font-extrabold tracking-tight uppercase">
              Better Business
            </div>
            <div className="text-[9px] font-extrabold tracking-tight uppercase">
              Bureau
            </div>
            <div className="text-[6px] font-semibold tracking-widest uppercase opacity-70 mt-0.5">
              Accredited Business
            </div>
          </div>
        </div>
        {/* Blue: A+ RATING */}
        <div className="flex flex-col items-center justify-center bg-[#1F6FE0] text-white px-4 py-3 leading-none">
          <span className="text-xl font-black">A+</span>
          <span className="text-[7px] font-bold tracking-widest uppercase mt-0.5 opacity-90">
            Rating
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="text-center sm:text-left">
        <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-mcs-amber-deep)] mb-1">
          Trust Verified
        </div>
        <div className="text-lg font-bold text-[var(--color-mcs-text)] group-hover:text-[var(--color-mcs-amber-deep)] transition-colors">
          View BBB Profile
          <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </div>
        <div className="text-sm text-[var(--color-mcs-muted)] mt-0.5">
          A+ Rating &middot; Accredited since 9/15/2021
        </div>
      </div>
    </motion.a>
  );
}
