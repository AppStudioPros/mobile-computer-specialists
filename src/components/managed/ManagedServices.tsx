"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: "cloud-services",
    eyebrow: "Cloud Services",
    title: "Your files and systems, everywhere you work.",
    body: "Cloud setup, migration, and management for small businesses. Email, file storage, backups, and collaboration tools configured properly and kept running, so your team can work from anywhere without worrying about the tech behind it.",
    points: [
      "Cloud email and file storage setup",
      "Migration from old systems",
      "Automatic offsite backups",
      "Collaboration tools configured",
      "Ongoing management and support",
      "Scales as your business grows",
    ],
  },
  {
    id: "managed-security",
    eyebrow: "Managed Security",
    title: "Protection that never clocks out.",
    body: "Managed security keeps your business protected around the clock. We monitor your systems, keep protection up to date, run backups, and respond when something looks wrong, so threats get stopped before they turn into downtime or data loss.",
    points: [
      "Continuous monitoring",
      "Threat detection and response",
      "Patch and update management",
      "Backup and recovery",
      "Email and endpoint protection",
      "Security that stays current",
    ],
  },
];

export default function ManagedServices() {
  return (
    <>
      {/* Intro: the recurring, proactive value */}
      <section className="py-20 lg:py-24 bg-[var(--color-mcs-page)]">
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
                Proactive, Not Reactive
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-5 max-w-3xl">
              Stop paying for problems. Start preventing them.
            </h2>
            <p className="max-w-3xl text-lg text-[var(--color-mcs-muted)] leading-relaxed">
              Most computer help happens after something breaks. Managed
              services flip that around. For a simple monthly plan, we keep your
              systems monitored, updated, backed up, and protected, so the
              expensive emergencies mostly stop happening. Predictable cost,
              fewer surprises, and a team that already knows your setup when you
              need us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service bands */}
      {sections.map((s, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 py-16 lg:py-20 ${
              alt
                ? "bg-[var(--color-mcs-page-2)] border-y border-[var(--color-mcs-line)]"
                : "bg-[var(--color-mcs-page)]"
            }`}
          >
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-1 w-10 rounded-full mcs-gradient-blue" />
                  <span className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider">
                    {s.eyebrow}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-5">
                  {s.title}
                </h2>
                <p className="max-w-3xl text-lg text-[var(--color-mcs-muted)] leading-relaxed">
                  {s.body}
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[var(--color-mcs-text)]"
                    >
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-mcs-amber)]" />
                      <span className="text-base">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
