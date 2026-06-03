"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            Our Story
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-8">
            Mobile means we come to you.
          </h2>
          <div className="space-y-5 text-lg text-[var(--color-mcs-muted)] leading-relaxed">
            <p>
              Mobile Computer Specialists was built on a simple idea: technology
              should serve you, not the other way around. For more than 26
              years, we&apos;ve been Denver&apos;s go-to for honest, mobile IT
              support. Repairs, custom builds, troubleshooting, advice. The kind
              of service where the person on the phone actually knows what
              they&apos;re talking about and isn&apos;t trying to upsell you.
            </p>
            <p>
              The &ldquo;mobile&rdquo; in our name is literal. We come to your
              home or office. Most jobs get fixed on-site. The heavier ones
              come back to our shop. Either way, you get your machine back
              working the way it should, and you keep the relationship after.
            </p>
            <p className="text-[var(--color-mcs-text)] font-semibold">
              No trip fee. No obligation. No kidding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
