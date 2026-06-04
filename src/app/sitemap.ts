import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const BASE = "https://mobilecomputerspecialists.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes with priority weighting (home highest, legal/blog lower).
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/computer-repairs", priority: 0.9, freq: "monthly" },
    { path: "/custom-pcs", priority: 0.9, freq: "monthly" },
    { path: "/service-area", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/websites", priority: 0.6, freq: "monthly" },
    { path: "/marketing", priority: 0.6, freq: "monthly" },
    { path: "/blog", priority: 0.6, freq: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
