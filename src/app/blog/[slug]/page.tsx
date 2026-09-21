import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageCta from "@/components/ui/PageCta";
import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const BASE = "https://mobilecomputerspecialists.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${BASE}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
    author: { "@type": "Organization", name: "Mobile Computer Specialists", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Mobile Computer Specialists",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/mcs-logo-og.jpg` },
    },
    ...(post.category ? { articleSection: post.category } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />
      <section className="py-20 bg-[var(--color-mcs-page)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-[var(--color-mcs-muted)] mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose-lg text-[var(--color-mcs-text)] leading-relaxed text-lg">
            <p>{post.body}</p>
            <p className="mt-6 text-[var(--color-mcs-muted)] italic">
              Full article coming soon. Got a question we should write about?
              Send it our way.
            </p>
          </div>
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--color-mcs-amber-deep)]"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </section>
      <PageCta />
    </>
  );
}
