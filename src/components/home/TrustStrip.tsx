"use client";

import { motion } from "framer-motion";
import { Star, Award, Clock, MapPin, Truck } from "lucide-react";

const trustItems = [
  { icon: Star, label: "5-Star Google", value: "154+ Reviews" },
  { icon: Award, label: "A+ Rating", value: "Better Business Bureau" },
  { icon: Clock, label: "26+ Years", value: "Serving Denver" },
  { icon: Truck, label: "Mobile Service", value: "We Come to You" },
  { icon: MapPin, label: "Denver, CO", value: "Local Experts" },
];

export default function TrustStrip() {
  return (
    <section className="relative py-12 border-y border-[var(--color-mcs-line)] bg-[var(--color-mcs-ink-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-mcs-amber)]/15 border border-[var(--color-mcs-amber)]/25 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[var(--color-mcs-amber)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-white/50">{item.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
