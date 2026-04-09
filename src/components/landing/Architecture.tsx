// === Landing: Architecture component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Database, Network } from "lucide-react";
import Link from "next/link";
import Heading from "../ui/Heading";

const NodeIcon = ({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30 bg-background/80 text-primary shadow-[0_0_20px_rgba(14,165,233,0.2)] backdrop-blur-md"
  >
    <Icon size={28} />
    <div className="absolute inset-0 -z-10 animate-pulse rounded-xl bg-primary/10 blur-xl" />
  </motion.div>
);

export default function Architecture() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background Glow Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* The main diagonal beam */}
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[20%] w-[150%] h-[150%] opacity-50"
          style={{ 
            background: 'conic-gradient(from 135deg at 15% 15%, transparent 0deg, rgba(14,165,233,0.15) 15deg, rgba(14,165,233,0.3) 25deg, rgba(14,165,233,0.15) 35deg, transparent 50deg)',
            filter: 'blur(100px)'
          }} 
        />
        
        {/* Soft highlight beam (the "ray" effect) */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] opacity-30"
          style={{ 
            background: 'conic-gradient(from 140deg at 10% 10%, transparent 0deg, rgba(255,255,255,0.05) 5deg, rgba(14,165,233,0.1) 10deg, transparent 20deg)',
            filter: 'blur(60px)'
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.1),transparent_70%)]" />
        
        {/* Noise overlay for texture */}
        <div className="noise-overlay !opacity-[0.08]" />
      </div>

      <div className="container mx-auto max-w-7xl px-8 md:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              title={<>System <span className="text-primary">Architecture</span></>}
              description="Buildorai is built on a distributed AI architecture that optimizes workload distribution across global edge nodes. Our decentralized coordination engine ensures sub-millisecond latency and enterprise-grade resilience."
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
              href="/docs"
              className="group inline-flex items-center gap-2 rounded-full bg-surface-hover px-8 py-4 font-bold text-white transition-all hover:bg-white/10 hover:shadow-lg"
            >
              Explore Product
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column: Animated Architecture Diagram */}
          <div className="relative flex min-h-[400px] items-center justify-center rounded-3xl border border-white/5 bg-surface/20 p-8 py-16 backdrop-blur-sm lg:p-12">
            <svg 
              viewBox="0 0 400 400" 
              className="h-full w-full max-w-[500px]"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection Lines (Pulsing Paths) */}
              <motion.path
                d="M200 100 L100 200 M200 100 L300 200 M100 200 L200 300 M300 200 L200 300"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#0EA5E9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Isometric Boxes (Drawn with SVG Paths) */}
              {/* Nodes will be overlaid as HTML elements for better icon control */}
            </svg>

            {/* Overlay Nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full max-w-[400px] max-h-[400px]">
                {/* Central AI Node */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                  <NodeIcon icon={Cpu} delay={0.1} />
                </div>
                
                {/* Edge Nodes */}
                <div className="absolute top-1/2 left-[10%] -translate-y-1/2">
                  <NodeIcon icon={Cloud} delay={0.3} />
                </div>
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2">
                  <NodeIcon icon={Network} delay={0.5} />
                </div>

                {/* Data Core */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
                  <NodeIcon icon={Database} delay={0.7} />
                </div>
                
                {/* Secondary Connections (SVG lines behind) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
