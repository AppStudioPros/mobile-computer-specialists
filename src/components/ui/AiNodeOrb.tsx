"use client";

/**
 * AiNodeOrb (MCS) — 4 light nodes physically bouncing inside a circular container,
 * kissing the inner wall on impact. Ported from the Web Design Pros 365 orb concept
 * and tuned for MCS (white nodes on the brand-blue gradient launcher).
 *
 * Each node has its own velocity vector and reflects off the inner wall of the
 * 30x30 viewBox using radial-reflection physics. Connection lines track the nodes
 * each frame so the network shape morphs as they move. Nodes pulse in size on
 * their own beat. Pure React state via requestAnimationFrame; cleans up on unmount.
 * Respects prefers-reduced-motion: nodes freeze in their initial positions.
 */

import { useEffect, useRef, useState } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseR: number;
  pulsePhase: number;
};

// 30x30 viewBox, center at 15, inner radius 15.
const CENTER = 15;
const INNER_RADIUS = 15;

function initialNodes(): Node[] {
  // Deterministic seed positions near the inner walls so the orb reads as
  // "already in motion across the full diameter." SSR + first client paint agree.
  return [
    { x: 5, y: 13, vx: 6.0, vy: -5.0, baseR: 3.0, pulsePhase: 0 },
    { x: 24, y: 6, vx: -5.4, vy: 5.6, baseR: 3.2, pulsePhase: 0.4 },
    { x: 21, y: 24, vx: -5.8, vy: -4.8, baseR: 2.8, pulsePhase: 0.7 },
    { x: 8, y: 23, vx: 5.2, vy: 5.2, baseR: 3.0, pulsePhase: 1.1 },
  ];
}

export default function AiNodeOrb({ className }: { className?: string }) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      lastTsRef.current = ts;

      setNodes((prev) =>
        prev.map((n) => {
          let { x, y, vx, vy } = n;
          x += vx * dt;
          y += vy * dt;

          // Reflect off the inner wall of the circular container.
          // Max travel = (orb radius - node radius) so the node visually kisses the wall.
          const dx = x - CENTER;
          const dy = y - CENTER;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = INNER_RADIUS - n.baseR;
          if (dist > maxDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const dot = vx * nx + vy * ny;
            vx = vx - 2 * dot * nx;
            vy = vy - 2 * dot * ny;
            x = CENTER + nx * maxDist;
            y = CENTER + ny * maxDist;
          }

          return {
            ...n,
            x,
            y,
            vx,
            vy,
            pulsePhase: (n.pulsePhase + dt / 1.6) % 1,
          };
        }),
      );

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, []);

  // Connect each node to the next in a loop so all 4 form a morphing network.
  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mcs-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connection lines tracking nodes */}
      {links.map(([a, b], i) => (
        <line
          key={`link-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ))}

      {/* Halo layer — large soft glow under each node */}
      {nodes.map((n, i) => {
        const sine = Math.sin(n.pulsePhase * Math.PI * 2);
        const r = n.baseR + sine * 0.85;
        return (
          <circle
            key={`halo-${i}`}
            cx={n.x}
            cy={n.y}
            r={r * 2.5}
            fill="url(#mcs-node-glow)"
          />
        );
      })}

      {/* Solid node circles on top of the halo */}
      {nodes.map((n, i) => {
        const sine = Math.sin(n.pulsePhase * Math.PI * 2);
        const r = n.baseR + sine * 0.85;
        const opacity = 0.85 + sine * 0.15;
        return (
          <circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r={Math.max(1.4, r)}
            fill="#ffffff"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}
