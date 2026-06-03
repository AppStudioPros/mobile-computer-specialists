"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Consult", b: "Tell us your goals, your software, your budget. We listen." },
  { n: "02", t: "Spec", b: "We design the build, send the parts list, and price it honestly." },
  { n: "03", t: "Build", b: "Careful assembly. Burn-in testing. Stress tests. All the boring-but-important stuff." },
  { n: "04", t: "Test", b: "We push the machine through its paces before you ever see it." },
  { n: "05", t: "Deliver", b: "Setup at your home or office. We tune it for you, then we&apos;re a phone call away forever." },
];

export default function BuildProcess() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            How We Build
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            Five steps from idea to delivered.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl mcs-card-light"
            >
              <div className="text-4xl font-black text-[var(--color-mcs-amber)]/35 mb-3">
                {s.n}
              </div>
              <div className="text-lg font-bold text-[var(--color-mcs-text)] mb-2">
                {s.t}
              </div>
              <p className="text-sm text-[var(--color-mcs-muted)] leading-relaxed">
                {s.b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
