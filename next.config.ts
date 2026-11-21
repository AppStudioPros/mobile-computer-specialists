import type { NextConfig } from "next";

// Keep slash-less canonical URLs. Older slashed URLs may first go through
// Next.js slash normalization before reaching the matching permanent redirect.
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
  { from: "/gaming-pc-build", to: "/custom-pcs#gaming" },
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

  // The old services directory has a replacement at /services.
  // The catalog's closest current match is the custom PC page.
  { from: "/shop", to: "/custom-pcs" },
  // Retired checkout, account, partner, and placeholder pages have no equivalent.
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return redirectMap.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
