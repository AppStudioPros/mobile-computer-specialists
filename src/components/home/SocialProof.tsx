"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    body: "Corey saved the day. I'm a business owner in California with a remote employee in Colorado. We had a tech issue and Corey fixed it.",
    name: "Scott McColgan",
    source: "Google Review",
  },
  {
    body: "Helped me fix my problem over the phone without even charging me a penny. Thank you so much!",
    name: "Blake Kullman",
    source: "Google Review",
  },
  {
    body: "Within hours, Corey was scrubbing our hacked computers. He was informative, patient, and made recommendations for future security. Our go-to computer geeks forever.",
    name: "Connie Davidson",
    source: "Google Review",
  },
  {
    body: "A very honest person who won't upcharge you or try to squeeze money out of you. Knowledgeable, professional, and reasonable.",
    name: "Darren Bailey",
    source: "Google Review",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-mcs-ink-soft)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-7 h-7 fill-[var(--color-mcs-amber)] text-[var(--color-mcs-amber)]"
              />
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            What our neighbors say.
          </h2>
          <p className="text-lg text-white/60">
            154+ five-star Google reviews and counting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="p-8 rounded-2xl bg-[var(--color-mcs-surface)] border border-[var(--color-mcs-line)] relative"
            >
              <Quote className="w-8 h-8 text-[var(--color-mcs-amber)]/30 mb-4" />
              <p className="text-base text-white/85 leading-relaxed mb-6">
                {review.body}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {review.name}
                  </div>
                  <div className="text-xs text-white/40">{review.source}</div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-[var(--color-mcs-amber)] text-[var(--color-mcs-amber)]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
