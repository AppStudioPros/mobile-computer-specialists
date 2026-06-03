"use client";

import { motion } from "framer-motion";

type Variant = "light" | "dark";

/**
 * Subtle techy/computer-y animated background.
 * - light: faint grid with drifting blue dots, suitable for white sections
 * - dark: deeper grid with drifting blue+amber glow blobs, suitable for hero/CTA
 */
export default function TechBackground({
  variant = "light",
  intensity = 1,
}: {
  variant?: Variant;
  intensity?: number;
}) {
  if (variant === "dark") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 mcs-tech-grid-dark opacity-60" />
        <div className="absolute inset-0 mcs-dots opacity-50" />
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{
            background: "var(--color-mcs-blue)",
            opacity: 0.35 * intensity,
          }}
        />
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[180px]"
          style={{
            background: "var(--color-mcs-amber)",
            opacity: 0.4 * intensity,
          }}
        />
      </div>
    );
  }

  // light variant
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 mcs-tech-grid-light opacity-80" />
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full blur-[160px]"
        style={{
          background: "var(--color-mcs-blue-bright)",
          opacity: 0.08 * intensity,
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 left-0 w-[350px] h-[350px] rounded-full blur-[180px]"
        style={{
          background: "var(--color-mcs-amber)",
          opacity: 0.12 * intensity,
        }}
      />
    </div>
  );
}
