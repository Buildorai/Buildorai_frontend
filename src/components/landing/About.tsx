// === Landing: About / Scale section component ===
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

export default function About() {
  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
        
        {/* Spectral Glows */}
        <div className="absolute -left-[10%] top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute -right-[10%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        
        {/* Brand Watermark (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
           <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
             <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
           </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column: Visual Anchor */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/40 p-2 shadow-2xl backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-[2.2rem]">
                <Image
                  src="/team-intelligence.png"
                  alt="Engineering Team Intelligence"
                  width={800}
                  height={800}
                  className="w-full object-cover grayscale-[20%] transition-all duration-700 hover:scale-105 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Floating Stat Card - Premium Upgrade */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 z-20 rounded-3xl border border-primary/20 bg-surface/95 p-8 shadow-2xl backdrop-blur-3xl md:-right-8 md:p-10"
            >
              <div className="text-center">
                <div className="mb-1 text-5xl font-black text-primary md:text-6xl tracking-tighter drop-shadow-sm">10K+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                  Architected<br/>Sprints
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              title={<>Scaling Engineering Performance with <span className="text-primary italic">AI Intelligence</span></>}
              description="Buildorai empowers high-growth engineering organizations with the autonomous coordination layers needed to scale faster without management friction."
              badge="About Buildorai"
              align="left"
              className="mb-10"
            />

            <div className="mb-12 space-y-5">
              {[
                "24/7 autonomous workload balancing",
                "Neural bottlenecks detection & self-healing",
                "Advanced SOC-2 compliant security perimeter",
                "Seamless integration with modern DevOps stacks",
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 transition-transform hover:translate-x-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-text-primary font-medium text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Info Blocks - Standardized Grid */}
            <div className="grid gap-6 border-t border-white/5 pt-10 sm:grid-cols-2">
              <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Full Governance</h4>
                  <p className="text-[11px] leading-tight text-text-secondary">Enterprise-grade data security & compliance.</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Award Winning</h4>
                  <p className="text-[11px] leading-tight text-text-secondary">2026 AI Innovation Excellence Award.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
