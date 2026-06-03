import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | Mobile Computer Specialists",
  description:
    "Tech tips, PC building guides, cybersecurity advice, and Denver IT news from Mobile Computer Specialists.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tech advice from"
        highlight="real specialists"
        subtitle="Tips, guides, and honest takes from 26+ years of fixing computers in Denver."
      />

      <section className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block mb-14 p-8 lg:p-12 rounded-3xl mcs-card-dark hover:border-[var(--color-mcs-amber)]/50 transition-colors group"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber)] mb-4">
                Featured · {featured.category}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 group-hover:text-[var(--color-mcs-amber)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-5 max-w-3xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/45">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block p-7 rounded-2xl mcs-card-light hover:border-[var(--color-mcs-amber)]/50 hover:shadow-md transition-all group"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber-deep)] mb-3">
                  {p.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-mcs-text)] leading-tight mb-3 group-hover:text-[var(--color-mcs-amber-deep)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--color-mcs-muted)] leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--color-mcs-faint)]">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Got a tech question?"
        subtitle="Call us. We answer for free, even if you&apos;re not a customer yet."
      />
    </>
  );
}
