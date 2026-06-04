"use client";

import { motion } from "framer-motion";

const WDP_CONTACT = "https://www.webdesignpros365.com/contact";

const sections = [
  {
    id: "seo",
    eyebrow: "SEO",
    title: "Search engine optimization that gets you found.",
    body: "We get your business ranking where your customers are searching. On-page SEO, technical performance, local search, and Core Web Vitals tuning, built to put you at the top of Google and keep you there. Modern SEO pairs with answer engine and AI visibility work so you show up everywhere people look now.",
  },
  {
    id: "social-media-marketing",
    eyebrow: "Social Media Marketing",
    title: "Show up where your audience already spends time.",
    body: "Social media marketing that builds your brand and keeps you in front of the people who matter. Content, posting, community, and paid social, managed so your business stays active and visible without you having to live on every platform.",
  },
  {
    id: "digital-advertising",
    eyebrow: "Digital Advertising",
    title: "Ads that put your money where the results are.",
    body: "Data-driven digital advertising across search and social. Campaign setup, targeting, conversion tracking, A/B testing, and ROI reporting, so every dollar is working and you can see exactly what it brings back.",
  },
  {
    id: "graphic-design",
    eyebrow: "Graphic Design & Logos",
    title: "Design that makes your business look the part.",
    body: "Logos, graphics, and visual identity that make you unmistakable. From a new logo to full brand visuals, we create design that stays consistent across your website, your ads, and everywhere else people find you.",
  },
  {
    id: "apparel",
    eyebrow: "Printing & Apparel",
    title: "Put your brand on something you can hand someone.",
    body: "Printing and branded apparel to carry your identity into the real world. Shirts, signage, and printed materials done in the same look and feel as the rest of your brand, so everything matches from screen to street.",
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
