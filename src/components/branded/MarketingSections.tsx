"use client";

import { motion } from "framer-motion";

const WDP_CONTACT = "https://www.webdesignpros365.com/contact";

const sections = [
  {
    id: "seo",
    eyebrow: "SEO & AI Visibility",
    title: "Get found, by people and by AI.",
    body: "We get your business ranking where your customers are searching. On-page SEO, technical performance, local search, and Core Web Vitals tuning to put you at the top of Google. Modern visibility goes further than that now, so we also work to get you cited in AI Overviews and by ChatGPT, Claude, Gemini, and Perplexity, the places people increasingly search first.",
  },
  {
    id: "digital-advertising",
    eyebrow: "Advertising & Campaigns",
    title: "Put your budget where the results are.",
    body: "Data-driven digital advertising and email campaigns that bring measurable returns. Search and social ads, targeting, email marketing, conversion tracking, A/B testing, and clear ROI reporting, so every dollar is working and you can see exactly what it brings back.",
  },
  {
    id: "social-media-marketing",
    eyebrow: "Social & Content",
    title: "Stay in front of your audience.",
    body: "Social media marketing, content, and video that keep your brand active and visible. Posting, community, content creation, and video, managed so your business shows up consistently where your audience already spends their time, without you having to live on every platform.",
  },
  {
    id: "graphic-design",
    eyebrow: "Brand & Design",
    title: "Look the part, everywhere people find you.",
    body: "Logos, graphics, printed materials, branded apparel, and reputation management that make your business unmistakable. From a new logo to signage, shirts, and the reviews people see first, we keep your brand sharp and consistent from screen to street.",
  },
];

export default function MarketingSections() {
  return (
    <>
      {sections.map((s, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 py-14 lg:py-18 ${
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
                  <span className="h-1 w-10 rounded-full mcs-gradient-amber" />
                  <span className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider">
                    {s.eyebrow}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-mcs-text)] leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="max-w-3xl text-lg text-[var(--color-mcs-muted)] leading-relaxed">
                  {s.body}
                </p>
                <a
                  href={WDP_CONTACT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-base font-bold text-[#1F4FD0] underline underline-offset-4 decoration-2 decoration-[#1F4FD0]/40 hover:text-[#8B2F9E] hover:decoration-[#8B2F9E] transition-colors"
                >
                  Get in touch with Web Design Pros 365
                  <span className="group-hover:translate-x-1 transition-transform">
                    &#8599;
                  </span>
                </a>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
