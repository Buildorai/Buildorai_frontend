// === Landing: About / Scale section component ===
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

export default function About() {
  return (
    <section className="relative bg-background py-24 md:py-44 overflow-hidden">
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

      <div className="container relative z-10 mx-auto max-w-6xl px-4 mt-[-40px]">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:gap-24">
          
          {/* Left Column: Visual Anchor & Trust Bar */}
          <div className="flex flex-col gap-10">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface/30 p-2 shadow-[0_0_80px_-20px_rgba(14,165,233,0.15)] backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-square lg:aspect-auto lg:h-[480px]">
                  <Image
                    src="/team-intelligence.png"
                    alt="Engineering Team Intelligence"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover grayscale-[20%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10" />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl" />
              </motion.div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block"
              >
                <div className="relative rounded-3xl border border-white/10 bg-surface/90 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-white tracking-tighter">10K<span className="text-primary italic">+</span></div>
                    <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-primary/70">Architected Sprints</div>
                    <div className="mt-4 flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-6 w-6 rounded-full border border-background bg-surface-hover" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Redesigned Horizontal Trust Bar (Moved under image) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-y-6 gap-x-12 border-t border-white/5 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover text-primary shadow-inner">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-white">Full Governance</h5>
                  <p className="text-[9px] font-medium text-text-secondary">Enterprise Secured</p>
                </div>
              </div>
              
              <div className="hidden h-8 w-px bg-white/5 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover text-primary shadow-inner">
                  <Award size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-white">Top Tier Support</h5>
                  <p className="text-[9px] font-medium text-text-secondary">Innovation 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <Heading 
              title={<>Scaling Engineering Performance with <span className="text-primary">AI Intelligence</span></>}
              description="Buildorai empowers high-growth engineering organizations with the autonomous coordination layers needed to scale faster."
              badge="Evolution of Work"
              align="left"
              className="!mb-8"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Autonomous Balancing", desc: "24/7 workload distribution" },
                { label: "Neural Detection", desc: "AI-driven bottleneck alerts" },
                { label: "SOC-2 Governance", desc: "Enterprise-grade security" },
                { label: "DevOps Integrated", desc: "Seamless stack connectivity" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/20 p-5 transition-all hover:bg-surface/40 hover:border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                      <p className="text-xs text-text-secondary leading-tight">{item.desc}</p>
                    </div>
                  </div>
                  {/* Subtle accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
