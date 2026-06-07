import type { NextConfig } from "next";

/**
 * 301 redirect map — preserves SEO authority from the old WordPress site.
 * Every legacy URL points to its consolidated new home (page + section anchor).
 * Next.js matches these server-side before rendering. permanent: true = HTTP 308/301.
 *
 * TRAILING SLASH: the old WordPress site indexed every URL WITH a trailing slash
 * (e.g. /virus-removal/). With trailingSlash:false, Next would first 308 /foo/ -> /foo
 * and THEN hit our redirect = a 2-hop chain on every legacy URL (verified 2026-06-07).
 * To keep authority transfer to a single clean hop, we emit BOTH a slash-less and a
 * slashed source for every entry, each pointing directly at the final destination.
 * See buildRedirects() below.
 */

const redirectMap: { from: string; to: string }[] = [
  // --- Computer Repairs consolidation ---
  { from: "/computer-repair", to: "/computer-repairs" },
  { from: "/computer-clean-up", to: "/computer-repairs#computer-cleanup" },
  { from: "/computer-protection", to: "/computer-repairs#computer-protection" },
  { from: "/virus-removal", to: "/computer-repairs#virus-removal" },
  { from: "/data-recovery", to: "/computer-repairs#data-recovery" },
  { from: "/it-support", to: "/computer-repairs#it-support" },

  // --- Custom PCs consolidation ---
  { from: "/custom-pc", to: "/custom-pcs" },
  { from: "/gaming-pc-builds", to: "/custom-pcs#gaming" },
  { from: "/workstations", to: "/custom-pcs#workstations" },

  // --- Websites consolidation (land on matching anchored section) ---
  { from: "/branding", to: "/websites#branding" },
  { from: "/domain-hosting", to: "/websites#domain-hosting" },
  { from: "/website-design", to: "/websites#website-design" },
  { from: "/website-development", to: "/websites#website-development" },
  { from: "/website-security", to: "/websites#website-security" },

  // --- Marketing consolidation (/marketing keeps its URL; land on combined section) ---
  { from: "/seo", to: "/marketing#seo" },
  { from: "/digital-advertising", to: "/marketing#digital-advertising" },
  { from: "/social-media-marketing", to: "/marketing#social-media-marketing" },
  { from: "/graphic-design", to: "/marketing#graphic-design" },
  { from: "/apparel", to: "/marketing#graphic-design" }, // folded into Brand & Design

  // --- Business Technologies rename (was Managed Services) ---
  { from: "/managed-services", to: "/business-technologies" },

  // --- Services hub: send to home (nav covers service navigation) ---
  { from: "/services", to: "/" },

  // --- WooCommerce shop pages (abandoned — no e-commerce on new site) ---
  { from: "/shop", to: "/contact" },
  { from: "/cart", to: "/contact" },
  { from: "/checkout", to: "/contact" },
  { from: "/my-account", to: "/contact" },

  // --- Fix-A-Fone: partnership ended, hard cutoff to home ---
  { from: "/fix-a-fone", to: "/" },

  // --- Default WP placeholder post ---
  { from: "/hello-world", to: "/" },
];

/**
 * Expand each entry into two redirects: slash-less and slashed, both -> final
 * destination in ONE hop. Skips the slashed variant for "/" (no such thing).
 */
function buildRedirects() {
  return redirectMap.flatMap(({ from, to }) => {
    const base = from.replace(/\/$/, "");
    const entries = [{ source: base, destination: to, permanent: true }];
    if (base !== "") {
      entries.push({ source: `${base}/`, destination: to, permanent: true });
    }
    return entries;
  });
}

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return buildRedirects();
  },
};

export default nextConfig;
