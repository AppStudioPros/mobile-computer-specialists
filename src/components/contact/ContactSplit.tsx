"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Free PC Diagnostic",
  "Computer Repair",
  "Custom PC Build",
  "Data Recovery",
  "Virus Removal",
  "IT Support",
  "Website (via WDP365)",
  "Marketing (via WDP365)",
  "Other",
];

export default function ContactSplit() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: services[0],
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
              Send a Message
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight mb-8">
              We&apos;ll get back to you fast.
            </h2>

            {status === "sent" ? (
              <div className="p-8 rounded-2xl mcs-card-light text-center">
                <div className="text-2xl font-bold text-[var(--color-mcs-text)] mb-3">
                  Got it!
                </div>
                <p className="text-[var(--color-mcs-muted)]">
                  We&apos;ll be in touch soon. For anything urgent, call us at{" "}
                  <a
                    href="tel:7202760797"
                    className="text-[var(--color-mcs-amber-deep)] font-semibold"
                  >
                    720-276-0797
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-mcs-muted)] mb-2">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-mcs-card)] border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] focus:outline-none focus:border-[var(--color-mcs-amber)] transition-colors"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-mcs-muted)] mb-2">
                    Tell us what&apos;s going on
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-mcs-card)] border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] focus:outline-none focus:border-[var(--color-mcs-amber)] transition-colors resize-none"
                    placeholder="Brief description of what you need help with..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-7 py-4 rounded-full mcs-gradient-amber text-[var(--color-mcs-ink)] font-bold text-base hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please call us directly at
                    720-276-0797.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl mcs-card-dark">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber)] mb-3">
                Reach Us Directly
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Or just give us a call.
              </h3>
              <div className="space-y-4">
                <InfoRow
                  label="Phone"
                  value="720-276-0797"
                  href="tel:7202760797"
                />
                <InfoRow
                  label="Email"
                  value="info@mobilecomputerspecialists.com"
                  href="mailto:info@mobilecomputerspecialists.com"
                />
                <InfoRow label="Service Area" value="Denver, Colorado + Metro" />
                <InfoRow label="Hours" value="Mon–Sun · 8am to 9pm" />
              </div>
            </div>

            <div className="p-8 rounded-2xl mcs-card-light">
              <h3 className="text-lg font-bold text-[var(--color-mcs-text)] mb-3">
                What happens after you submit?
              </h3>
              <ol className="space-y-3 text-sm text-[var(--color-mcs-muted)]">
                <li>
                  <span className="font-bold text-[var(--color-mcs-text)]">
                    1.
                  </span>{" "}
                  We read your message (a human, not a bot).
                </li>
                <li>
                  <span className="font-bold text-[var(--color-mcs-text)]">
                    2.
                  </span>{" "}
                  We call or email back within one business day.
                </li>
                <li>
                  <span className="font-bold text-[var(--color-mcs-text)]">
                    3.
                  </span>{" "}
                  We schedule your free diagnostic at your home or office.
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-mcs-muted)] mb-2">
        {label}
        {required && <span className="text-[var(--color-mcs-amber-deep)]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-[var(--color-mcs-card)] border border-[var(--color-mcs-line)] text-[var(--color-mcs-text)] focus:outline-none focus:border-[var(--color-mcs-amber)] transition-colors"
      />
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="text-xs font-bold uppercase tracking-wider text-white/50">
        {label}
      </div>
      <div className="text-base font-semibold text-white">{value}</div>
    </>
  );
  return href ? (
    <a
      href={href}
      className="block hover:text-[var(--color-mcs-amber)] transition-colors"
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
