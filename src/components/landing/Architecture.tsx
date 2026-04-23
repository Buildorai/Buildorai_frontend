// === Landing: Architecture component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Shield, Network } from "lucide-react";
import Link from "next/link";
import Heading from "../ui/Heading";

/* ─── Layout constants ─────────────────────────────────── */
const W = 520, H = 490;
const BX = W / 2, BY = 418; // vortex base centre

/* ─── Node definitions ─────────────────────────────────── */
const NODES = [
  { id: "cpu",  cx: 68,  cy: 202, icon: Cpu,     label: "Processing" },
  { id: "net",  cx: 168, cy: 72,  icon: Network, label: "Network"    },
  { id: "cld",  cx: 345, cy: 78,  icon: Cloud,   label: "Cloud"      },
  { id: "sec",  cx: 448, cy: 194, icon: Shield,  label: "Security"   },
];

/* Cubic-bezier path from vortex centre to node */
function getPath(cx: number, cy: number) {
  const cp1y = BY - 100;
  const cp2y = cy + 120;
  return `M ${BX},${BY} C ${BX},${cp1y} ${cx},${cp2y} ${cx},${cy}`;
}

/* ─── Glowing beam ─────────────────────────────────────── */
function BranchBeam({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  const d = getPath(cx, cy);
  return (
    <g>
      <path d={d} stroke="rgba(14,165,233,0.06)" strokeWidth={12} fill="none" strokeLinecap="round" />
      <path d={d} stroke="rgba(14,165,233,0.11)" strokeWidth={6}  fill="none" strokeLinecap="round" />
      <motion.path
        d={d} stroke="url(#beamGrad)" strokeWidth={2} fill="none" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: "easeOut" }}
      />
      <motion.path
        d={d} stroke="rgba(186,230,255,0.5)" strokeWidth={0.8} fill="none" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: delay + 0.15, ease: "easeOut" }}
      />
      <FlowDot cx={cx} cy={cy} duration={2.6} delay={delay + 1.2} />
      <FlowDot cx={cx} cy={cy} duration={2.6} delay={delay + 2.5} />
    </g>
  );
}

/* Dot that travels along the bezier via CSS offset-path */
function FlowDot({ cx, cy, duration, delay }: { cx: number; cy: number; duration: number; delay: number }) {
  const path = getPath(cx, cy);
  return (
    <motion.circle
      r={3.5} fill="#7DD3FC" filter="url(#dotGlow)"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ offsetPath: `path('${path}')` } as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      initial={{ offsetDistance: "0%", opacity: 0 } as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] } as any}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ─── 3-D glass-orb node ───────────────────────────────── */
function HoloNode({
  id, cx, cy, icon: Icon, label, delay,
}: {
  id: string; cx: number; cy: number; icon: React.ElementType; label: string; delay: number;
}) {
  const gId  = `sg_${id}`;   // sphere gradient
  const rimId = `rim_${id}`; // rim gradient

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <defs>
        {/* 3D sphere shading: top-left light source */}
        <radialGradient id={gId} cx="33%" cy="26%" r="65%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="rgba(186,230,255,0.75)" />
          <stop offset="28%"  stopColor="rgba(56,189,248,0.35)"  />
          <stop offset="65%"  stopColor="rgba(14,165,233,0.10)"  />
          <stop offset="100%" stopColor="rgba(2,6,23,0.88)"      />
        </radialGradient>
        {/* Rim / edge highlight */}
        <radialGradient id={rimId} cx="50%" cy="50%" r="50%">
          <stop offset="78%"  stopColor="transparent"           />
          <stop offset="100%" stopColor="rgba(56,189,248,0.65)" />
        </radialGradient>
      </defs>

      {/* Outer pulse ring */}
      <motion.circle
        cx={cx} cy={cy} r={42} fill="none"
        stroke="rgba(14,165,233,0.18)" strokeWidth={1}
        animate={{ r: [42, 49, 42], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      />

      {/* 3-D sphere body */}
      <circle cx={cx} cy={cy} r={30} fill={`url(#${gId})`} />
      {/* Rim edge glow */}
      <circle cx={cx} cy={cy} r={30} fill={`url(#${rimId})`} />
      {/* Subtle border ring */}
      <circle cx={cx} cy={cy} r={30} fill="none" stroke="rgba(56,189,248,0.45)" strokeWidth={1.4} />

      {/* Interior gloss disc at bottom-right (back-scatter) */}
      <ellipse cx={cx + 7} cy={cy + 10} rx={10} ry={6}
        fill="rgba(14,165,233,0.08)" style={{ filter: "blur(3px)" }} />

      {/* Specular highlight top-left */}
      <ellipse cx={cx - 9} cy={cy - 11} rx={8} ry={5}
        fill="rgba(210,240,255,0.5)" style={{ filter: "blur(2px)" }} />

      {/* Icon */}
      <foreignObject x={cx - 13} y={cy - 13} width={26} height={26}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#7DD3FC", width: "100%", height: "100%",
        }}>
          <Icon size={19} strokeWidth={1.5} />
        </div>
      </foreignObject>

      {/* Label ABOVE node */}
      <text
        x={cx} y={cy - 40}
        textAnchor="middle"
        fill="rgba(148,163,184,0.88)"
        fontSize={10}
        fontFamily="Inter, sans-serif"
        fontWeight={500}
        letterSpacing={0.5}
      >
        {label}
      </text>
    </motion.g>
  );
}

/* ─── 3-D disc / vortex platform base ─────────────────── */
const DISC_RX = 78, DISC_RY = 24, DISC_H = 20;

function VortexBase() {
  const rings = [
    { rx: 64, op: 0.18, sw: 0.8  },
    { rx: 50, op: 0.28, sw: 1.0  },
    { rx: 37, op: 0.42, sw: 1.2  },
    { rx: 24, op: 0.60, sw: 1.5  },
    { rx: 13, op: 0.85, sw: 1.8  },
  ];

  return (
    <g>
      {/* Wide outer glow halo */}
      <ellipse cx={BX} cy={BY} rx={110} ry={34} fill="rgba(14,165,233,0.05)" filter="url(#baseGlow)" />

      {/* ── Cylinder side face (gives 3-D depth) ── */}
      <path
        d={`M ${BX - DISC_RX},${BY} A ${DISC_RX},${DISC_RY} 0 0 0 ${BX + DISC_RX},${BY} L ${BX + DISC_RX},${BY + DISC_H} A ${DISC_RX},${DISC_RY} 0 0 1 ${BX - DISC_RX},${BY + DISC_H} Z`}
        fill="rgba(14,165,233,0.07)"
        stroke="rgba(14,165,233,0.18)"
        strokeWidth={0.8}
      />
      {/* Bottom edge ellipse */}
      <ellipse cx={BX} cy={BY + DISC_H} rx={DISC_RX} ry={DISC_RY}
        fill="rgba(14,165,233,0.04)" stroke="rgba(14,165,233,0.12)" strokeWidth={0.6} />

      {/* ── Top disc face ── */}
      {/* Dark base fill */}
      <ellipse cx={BX} cy={BY} rx={DISC_RX} ry={DISC_RY}
        fill="rgba(2,6,23,0.65)" />
      {/* Outer border ring */}
      <ellipse cx={BX} cy={BY} rx={DISC_RX} ry={DISC_RY}
        fill="none" stroke="rgba(56,189,248,0.55)" strokeWidth={1.2} />

      {/* Concentric rings on disc surface */}
      {rings.map(({ rx, op, sw }, i) => {
        const ry = rx * (DISC_RY / DISC_RX); // keep perspective ratio
        return (
          <motion.ellipse
            key={rx}
            cx={BX} cy={BY} rx={rx} ry={ry}
            fill="none"
            stroke={`rgba(56,189,248,${op})`}
            strokeWidth={sw}
            animate={{
              ry: [ry, ry * 1.09, ry],
              opacity: [op * 0.65, op * 1.25, op * 0.65],
            }}
            transition={{ duration: 2.8 + i * 0.22, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        );
      })}

      {/* Center vortex glowing core */}
      <motion.ellipse
        cx={BX} cy={BY} rx={10} ry={3}
        fill="rgba(56,189,248,0.55)"
        stroke="rgba(125,211,252,0.95)"
        strokeWidth={1.2}
        animate={{ rx: [10, 13, 10], ry: [3, 4, 3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hot-spot centre dot */}
      <circle cx={BX} cy={BY} r={3.5} fill="#BAE6FD" filter="url(#dotGlow)" />
    </g>
  );
}

/* ─── Main component ───────────────────────────────────── */
export default function Architecture() {
  return (
    <section id="architecture" className="relative overflow-hidden bg-background py-16 md:py-32">

      {/* Background Glow Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[20%] w-[150%] h-[150%] opacity-50"
          style={{
            background: "conic-gradient(from 135deg at 15% 15%, transparent 0deg, rgba(14,165,233,0.15) 15deg, rgba(14,165,233,0.3) 25deg, rgba(14,165,233,0.15) 35deg, transparent 50deg)",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] opacity-30"
          style={{
            background: "conic-gradient(from 140deg at 10% 10%, transparent 0deg, rgba(255,255,255,0.05) 5deg, rgba(14,165,233,0.1) 10deg, transparent 20deg)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.1),transparent_70%)]" />
        <div className="noise-overlay !opacity-[0.08]" />
      </div>

      <div className="container mx-auto max-w-7xl px-8 md:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              title={<>System <span className="text-primary">Architecture</span></>}
              description="Buildorai is built on a distributed AI architecture that optimizes workload distribution across global edge nodes. Our decentralised coordination engine ensures sub-millisecond latency and enterprise-grade resilience."
              badge="Infrastructure"
              align="left"
              className="mb-8"
            />
            <ul className="mb-10 space-y-4">
              {[
                "Distributed GPU processing clusters",
                "Sub-millisecond data persistence",
                "Encrypted end-to-end edge gateways",
                "Adaptive AI workload balancing",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 rounded-full bg-surface-hover px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:shadow-lg"
            >
              Explore Product
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column — SVG diagram */}
          <div className="relative flex md:min-h-[430px] items-center justify-center rounded-3xl md:border border-white/5 bg-surface/20 overflow-hidden backdrop-blur-sm p-4">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              width="100%"
              height="100%"
              style={{ maxHeight: 470, overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                {/* beam gradient bottom→top */}
                <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                  <stop offset="0%"   stopColor="#0EA5E9" stopOpacity={0.12} />
                  <stop offset="45%"  stopColor="#38BDF8" stopOpacity={1}    />
                  <stop offset="100%" stopColor="#7DD3FC" stopOpacity={0.28} />
                </linearGradient>
                {/* glow for dots */}
                <filter id="dotGlow" x="-120%" y="-120%" width="340%" height="340%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* glow for base */}
                <filter id="baseGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="20" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Beams (behind everything) */}
              {NODES.map((n, i) => (
                <BranchBeam key={n.id} cx={n.cx} cy={n.cy} delay={0.2 + i * 0.18} />
              ))}

              {/* 3-D platform base */}
              <VortexBase />

              {/* 3-D glass sphere nodes */}
              {NODES.map((n, i) => (
                <HoloNode key={n.id} {...n} delay={0.5 + i * 0.18} />
              ))}
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
