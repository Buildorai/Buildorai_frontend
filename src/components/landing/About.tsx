// === Landing: About / Scale section component ===
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

export default function About() {
  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 md:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column: Visual Anchor */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-surface/50 p-2 shadow-2xl"
            >
              <Image
                src="/team-intelligence.png"
                alt="Engineering Team Intelligence"
                width={800}
                height={600}
                className="rounded-[1.8rem] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -right-6 z-20 rounded-3xl border border-primary/30 bg-surface/90 p-8 shadow-2xl backdrop-blur-xl md:-right-10 md:p-10"
            >
              <div className="text-center">
                <div className="mb-1 text-5xl font-black text-primary md:text-6xl tracking-tighter">10K+</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-text-secondary">
                  Architected<br/>Sprints
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows (Visual only for layout) */}
            <div className="mt-12 flex gap-4 pl-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10">
                <ArrowLeft size={20} />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-all hover:bg-primary/20">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              title={<>Scaling Engineering Performance with <span className="text-primary">AI Intelligence</span></>}
              description="We empower high-growth engineering organizations with the autonomous coordination layers needed to scale faster without increasing management overhead."
              badge="About Buildorai"
              align="left"
              className="mb-10"
            />

            <div className="mb-12 grid gap-4">
              {[
                "24/7 autonomous workload balancing",
                "Neural bottlenecks detection and self-healing",
                "Advanced SOC-2 compliant security perimeter",
                "Seamless integration with existing CI/CD stacks",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-text-primary text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Info Blocks */}
            <div className="grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-white">Full Governance</h4>
                  <p className="text-sm text-text-secondary">Fully compliant with enterprise-grade data security.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-white">Award Winning</h4>
                  <p className="text-sm text-text-secondary">Recipient of the 2026 AI Innovation Excellence Award.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
