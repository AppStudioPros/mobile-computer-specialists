"use client";

import React from "react";

type LordIconProps = {
  src: string;
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "in"
    | "boomerang";
  delay?: number;
  colors?: string;
  size?: number;
  className?: string;
};

/**
 * Lordicon wrapper. The web component is registered globally by the
 * Lordicon CDN script in app/layout.tsx, then we render it via
 * React.createElement to avoid JSX intrinsic-element type complaints.
 */
export default function LordIcon({
  src,
  trigger = "loop",
  delay = 0,
  colors,
  size = 80,
  className,
}: LordIconProps) {
  return React.createElement("lord-icon", {
    src,
    trigger,
    delay: String(delay),
    colors,
    class: className,
    style: { width: size, height: size, display: "inline-block" },
  });
}
