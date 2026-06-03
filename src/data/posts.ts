export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "free-pc-diagnostics-explained",
    title: "What a Free PC Diagnostic Actually Includes (And Why We Don't Charge)",
    excerpt:
      "A walk-through of exactly what we check during a free diagnostic, why most shops charge for this, and how we still make a living without trip fees.",
    date: "2026-06-01",
    category: "Tech Tips",
    readTime: "4 min read",
    body: "Coming soon. This is the placeholder blog post that gets replaced with real content once we are ready to start publishing.",
  },
  {
    slug: "how-to-tell-if-your-pc-needs-replaced",
    title: "How to Tell If Your PC Actually Needs to Be Replaced",
    excerpt:
      "Most computers don't need replaced. They need cleaned, tuned, and sometimes an SSD upgrade. Here's how to decide before you spend $1,500 on a new machine.",
    date: "2026-05-15",
    category: "Tech Tips",
    readTime: "6 min read",
    body: "Coming soon.",
  },
  {
    slug: "best-gaming-pc-budget-2026",
    title: "Best Gaming PC Build at Every Budget in 2026",
    excerpt:
      "What you can actually build for $1K, $2K, and $4K right now. Plus the components we'd skip and the ones worth splurging on.",
    date: "2026-05-01",
    category: "PC Building",
    readTime: "8 min read",
    body: "Coming soon.",
  },
];
