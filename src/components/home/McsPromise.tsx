"use client";

import { motion } from "framer-motion";

export default function McsPromise() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-mcs-blue)] blur-[200px] opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[var(--color-mcs-amber)] text-sm font-bold uppercase tracking-wider mb-4">
            The MCS Promise
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            Once you&apos;re a customer,{" "}
            <span className="mcs-gradient-text">support never stops.</span>
          </h2>
          <div className="space-y-6 text-lg text-white/75 leading-relaxed">
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
            <p className="text-[var(--color-mcs-amber)] font-semibold text-xl">
              Your peace of mind is our actual job.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
