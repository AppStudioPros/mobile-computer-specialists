"use client";

import { motion } from "framer-motion";

/**
 * Cute animated robot head — pure SVG + Framer Motion.
 * No Lordicon dependency, guaranteed to look like a robot.
 * Eyes blink, antenna pulses, mouth dots flicker.
 */
export default function RobotHead({
  size = 48,
  primaryColor,
  accentColor,
}: {
  size?: number;
  primaryColor?: string;
  accentColor?: string;
}) {
  const primary = primaryColor || "currentColor";
  const accent = accentColor || "#ffb547";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Antenna */}
      <line
        x1="32"
        y1="6"
        x2="32"
        y2="14"
        stroke={primary}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Antenna ball, pulsing */}
      <motion.circle
        cx="32"
        cy="6"
        r="3"
        fill={accent}
        animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "32px 6px" }}
      />

      {/* Head body */}
      <rect
        x="10"
        y="14"
        width="44"
        height="36"
        rx="8"
        ry="8"
        fill="none"
        stroke={primary}
        strokeWidth="2.5"
      />

      {/* Ear/circle left */}
      <rect
        x="6"
        y="26"
        width="4"
        height="12"
        rx="2"
        fill={primary}
      />
      {/* Ear/circle right */}
      <rect
        x="54"
        y="26"
        width="4"
        height="12"
        rx="2"
        fill={primary}
      />

      {/* Eyes — blink animation */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{
          duration: 3.5,
          times: [0, 0.7, 0.75, 0.8, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "32px 30px" }}
      >
        <circle cx="23" cy="30" r="3.5" fill={accent} />
        <circle cx="41" cy="30" r="3.5" fill={accent} />
      </motion.g>

      {/* Mouth — flicker dots */}
      <motion.g
        animate={{ opacity: [0.4, 1, 0.4, 1, 0.4] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="24" cy="42" r="1.6" fill={primary} />
        <circle cx="32" cy="42" r="1.6" fill={primary} />
        <circle cx="40" cy="42" r="1.6" fill={primary} />
      </motion.g>

      {/* Side bolts */}
      <circle cx="14" cy="20" r="1.5" fill={primary} opacity="0.6" />
      <circle cx="50" cy="20" r="1.5" fill={primary} opacity="0.6" />
    </svg>
  );
}
