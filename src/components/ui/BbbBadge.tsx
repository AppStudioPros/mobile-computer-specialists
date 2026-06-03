"use client";

import { motion } from "framer-motion";

const BBB_PROFILE =
  "https://www.bbb.org/us/co/arvada/profile/computer-repair/mobile-computer-specialists-1296-90100509";

export default function BbbBadge() {
  return (
    <section className="relative py-16 lg:py-20 bg-[var(--color-mcs-page)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
        <motion.a
          href={BBB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl border border-[var(--color-mcs-line)] shadow-sm hover:shadow-md transition-all px-8 py-7 max-w-2xl w-full"
        >
          {/* BBB mark + A+ pill */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-center justify-center rounded-xl bg-[#003366] text-white px-4 py-3 leading-none">
              <span className="text-[10px] font-bold tracking-widest">BBB</span>
              <span className="text-[8px] font-semibold tracking-wide opacity-80 mt-1">
                ACCREDITED
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-[var(--color-mcs-page-2)] border border-[var(--color-mcs-line)] w-16 h-16">
              <span className="text-3xl font-black text-[#003366]">A+</span>
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
      </div>
    </section>
  );
}
