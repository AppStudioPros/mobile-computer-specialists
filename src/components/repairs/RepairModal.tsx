"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Link from "next/link";
import type { RepairService } from "@/data/repairs";

export default function RepairModal({
  service,
  onClose,
}: {
  service: RepairService | null;
  onClose: () => void;
}) {
  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[var(--color-mcs-ink)]/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[var(--color-mcs-page)] shadow-2xl border border-[var(--color-mcs-line)]"
          >
            {/* Amber top accent */}
            <div className="h-1.5 w-full mcs-gradient-amber rounded-t-3xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 rounded-full text-[var(--color-mcs-muted)] hover:text-[var(--color-mcs-text)] hover:bg-[var(--color-mcs-page-2)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-10">
              <div className="text-[var(--color-mcs-amber-deep)] text-xs font-bold uppercase tracking-wider mb-3">
                Computer Repairs
              </div>
              <h2 className="text-3xl font-black text-[var(--color-mcs-text)] leading-tight mb-5">
                {service.title}
              </h2>

              {/* Intro paragraphs */}
              <div className="space-y-4 mb-7">
                {service.detail.intro.map((para, i) => (
                  <p
                    key={i}
                    className="text-base text-[var(--color-mcs-muted)] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Includes list */}
              <div className="mb-7">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-mcs-text)] mb-4">
                  {service.detail.includesTitle}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.detail.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full mcs-gradient-amber flex items-center justify-center">
                        <Check className="w-3 h-3 text-[var(--color-mcs-ink)]" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-[var(--color-mcs-text)] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process / what to expect */}
              <div className="rounded-2xl bg-[var(--color-mcs-page-2)] border border-[var(--color-mcs-line)] p-5 mb-8">
                <p className="text-sm text-[var(--color-mcs-muted)] leading-relaxed">
                  {service.detail.process}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="mcs-shine group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-sm hover:scale-[1.02] transition-transform"
                >
                  Claim Free Diagnostic
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
                <a
                  href="tel:7202760797"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[var(--color-mcs-page-2)] border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] font-semibold text-sm hover:border-[var(--color-mcs-amber)]/50 transition-colors"
                >
                  Call 720-276-0797
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
