"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Link from "next/link";

export type BuildDetail = {
  intro: string[];
  includesTitle: string;
  includes: string[];
  process: string;
};

export type BuildCategory = {
  id: string;
  title: string;
  short: string;
  body: string;
  spec: string;
  detail: BuildDetail;
};

export default function BuildModal({
  category,
  onClose,
}: {
  category: BuildCategory | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!category) return;
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
  }, [category, onClose]);

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[var(--color-mcs-ink)]/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal card (dark, to match Custom PCs section) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={category.title}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl mcs-card-dark shadow-2xl"
          >
            <div className="h-1.5 w-full mcs-gradient-amber rounded-t-3xl" />

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-10">
              <div className="text-[var(--color-mcs-amber)] text-xs font-bold uppercase tracking-wider mb-3">
                Custom PCs
              </div>
              <h2 className="text-3xl font-black text-white leading-tight mb-2">
                {category.title}
              </h2>
              <div className="text-xs font-mono text-white/50 mb-6">
                {category.spec}
              </div>

              <div className="space-y-4 mb-7">
                {category.detail.intro.map((para, i) => (
                  <p key={i} className="text-base text-white/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mb-7">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
                  {category.detail.includesTitle}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {category.detail.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full mcs-gradient-amber flex items-center justify-center">
                        <Check className="w-3 h-3 text-[var(--color-mcs-ink)]" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-white/85 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-8">
                <p className="text-sm text-white/70 leading-relaxed">
                  {category.detail.process}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="mcs-shine group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-sm hover:scale-[1.02] transition-transform"
                >
                  Start My Build
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
                <a
                  href="tel:7202760797"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/8 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
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
