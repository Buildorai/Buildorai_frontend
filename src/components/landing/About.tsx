// === Landing: About / Scale section component ===
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

export default function About() {
  return (
    <section className="relative bg-background py-16 md:py-44 overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image Layer */}
        <div className="hidden lg:block absolute inset-0">
          <Image 
            src="/About Section.png"
            alt="About Background"
            fill
            className="object-cover opacity-85"
            priority
          />
        </div>

        {/* Mobile/Tablet Premium Glow Layer */}
        <div className="lg:hidden absolute inset-0 bg-[#020617] overflow-hidden">
          {/* Main Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] opacity-60 animate-pulse" />
          
          {/* Accents */}
          <div className="absolute top-1/4 left-0 h-[300px] w-[300px] bg-primary/10 blur-[100px] rounded-full -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] bg-primary/5 blur-[100px] rounded-full translate-x-1/2" />
          
          {/* Radial Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 mt-[-40px]">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:gap-24">

          {/* Left Column: Visual Anchor & Trust Bar */}
          <div className="flex flex-col gap-10">
            <div className="relative group md:min-h-[480px] flex items-center">
              

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-4 -bottom-20 z-20 hidden md:block"
              >
                <div className="relative rounded-3xl border border-white/10 bg-surface/90 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-black text-white tracking-tighter">10K<span className="text-primary italic">+</span></div>
                    <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-primary/70">Architected Sprints</div>
                    <div className="mt-4 flex -space-x-2">
                      {[
                        "/images/testimonials/M1.png",
                        "/images/testimonials/W1.png",
                        "/images/testimonials/M2.png"
                      ].map((src, i) => (
                        <div key={i} className="relative h-7 w-7 rounded-full border-2 border-surface overflow-hidden shadow-lg">
                          <Image
                            src={src}
                            alt={`Active User ${i + 1}`}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
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
              className="flex flex-wrap items-center gap-y-6 gap-x-12  pt-8"
            >
              {/* <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover text-primary shadow-inner">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-white">Full Governance</h5>
                  <p className="text-[9px] font-medium text-text-secondary">Enterprise Secured</p>
                </div>
              </div> */}

              <div className="hidden h-8 w-px bg-white/5 sm:block" />

              {/* <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-hover text-primary shadow-inner">
                  <Award size={20} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-white">Top Tier Support</h5>
                  <p className="text-[9px] font-medium text-text-secondary">Innovation 2026</p>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <Heading
              title={<>AI Intelligence at the Core of <span className="text-primary">Every Workflow</span></>}
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
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/20 p-5 transition-all hover:bg-surface/40 hover:border-primary/20 duration-700"
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
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full duration-700" />
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
