"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    body: "Corey saved the day. I'm a business owner in California with a remote employee in Colorado. We had a tech issue and Corey fixed it.",
    name: "Scott McColgan",
  },
  {
    body: "Within hours, Corey was scrubbing our hacked computers. He was informative, patient, and made recommendations for future security. Our go-to computer geeks forever.",
    name: "Connie Davidson",
  },
  {
    body: "Helped me fix my problem over the phone without even charging me a penny. Thank you so much!",
    name: "Blake Kullman",
  },
  {
    body: "A very honest person who won't upcharge you or try to squeeze money out of you. Knowledgeable, professional, and reasonable.",
    name: "Darren Bailey",
  },
  {
    body: "I gave Corey a call to ask what I'm sure we're complete asinine and simple questions, but he was incredibly patient. He helped me recover a ton of information off my old laptop and gave great laptop recommendations without an upsell.",
    name: "Veronica B.",
  },
  {
    body: "Called them about a data recovery issue and spoke with the owner. He gave me a possible price range, then told me ways to try and fix it myself. Out of 5 shops I called, I would use them.",
    name: "Mike Stinger",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3.5 h-3.5 fill-[var(--color-mcs-amber)]"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3 7 7 .6-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.7L2 9.6l7-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function AboutReviews() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            From Our Customers
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            Real reviews from real Denver neighbors.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl mcs-card-light"
            >
              <Stars />
              <p className="mt-4 text-sm text-[var(--color-mcs-text)] leading-relaxed mb-4">
                {r.body}
              </p>
              <div className="text-xs font-bold text-[var(--color-mcs-muted)]">
                — {r.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
