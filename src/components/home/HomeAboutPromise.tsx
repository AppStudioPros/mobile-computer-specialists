"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeAboutPromise() {
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
          <div className="space-y-4 text-lg text-[var(--color-mcs-muted)] leading-relaxed max-w-3xl mb-10">
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

          {/* The MCS Promise, merged in */}
          <div className="rounded-2xl border border-[var(--color-mcs-line)] bg-[var(--color-mcs-page-2)] p-8 lg:p-10 mb-10">
            <h3 className="text-2xl lg:text-3xl font-black text-[var(--color-mcs-text)] leading-tight mb-5">
              Once you&apos;re a customer,{" "}
              <span className="mcs-gradient-text">support never stops.</span>
            </h3>
            <div className="space-y-4 text-lg text-[var(--color-mcs-muted)] leading-relaxed max-w-3xl">
              <p>
                We care about you using your technology with confidence. That
                means our line stays open. If you have a question, big or small,
                technical or curious, you can call us. We mean it.
              </p>
              <p>
                We never charge to answer a question. Not when you call to
                troubleshoot. Not when you call for advice. Not when you call
                just to ask if the new laptop you&apos;re eyeing is worth it.
              </p>
              <p className="text-[var(--color-mcs-amber-deep)] font-semibold text-xl">
                Your peace of mind is our actual job.
              </p>
            </div>
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
        </motion.div>
      </div>
    </section>
  );
}
