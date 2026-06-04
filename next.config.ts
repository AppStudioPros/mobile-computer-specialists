import type { NextConfig } from "next";

/**
 * 301 redirect map — preserves SEO authority from the old WordPress site.
 * Every legacy URL points to its consolidated new home (page + section anchor).
 * Next.js matches these server-side before rendering. permanent: true = HTTP 308/301.
 *
 * The old site used trailing slashes. Next.js (with default trailingSlash: false)
 * normalizes /foo/ -> /foo, so a single source "/foo" catches both forms.
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

  // --- Websites consolidation ---
  { from: "/branding", to: "/websites" },
  { from: "/domain-hosting", to: "/websites" },
  { from: "/website-design", to: "/websites" },
  { from: "/website-development", to: "/websites" },
  { from: "/website-security", to: "/websites" },

  // --- Marketing consolidation (/marketing keeps its URL) ---
  { from: "/apparel", to: "/marketing" },
  { from: "/digital-advertising", to: "/marketing" },
  { from: "/graphic-design", to: "/marketing" },
  { from: "/seo", to: "/marketing" },
  { from: "/social-media-marketing", to: "/marketing" },

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

const nextConfig: NextConfig = {
  async redirects() {
    return redirectMap.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
