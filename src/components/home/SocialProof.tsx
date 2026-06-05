"use client";

import { motion } from "framer-motion";

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

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-4 h-4 fill-[var(--color-mcs-amber)]"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3 7 7 .6-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.7L2 9.6l7-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-mcs-page-2)]">
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
              <svg
                key={s}
                className="w-7 h-7 fill-[var(--color-mcs-amber)]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3 7 7 .6-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.7L2 9.6l7-.6z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
            What our neighbors say.
          </h2>
          <p className="text-lg text-[var(--color-mcs-muted)]">
            4.8 stars across 170 Google reviews and counting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-8 rounded-2xl mcs-card-light shadow-sm hover:shadow-lg hover:border-[var(--color-mcs-amber)]/50 hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl font-black text-[var(--color-mcs-amber)]/30 leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-base text-[var(--color-mcs-text)] leading-relaxed mb-6">
                {review.body}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[var(--color-mcs-text)]">
                    {review.name}
                  </div>
                  <div className="text-xs text-[var(--color-mcs-faint)]">
                    {review.source}
                  </div>
                </div>
                <Stars />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
