// === Landing: HowItWorks component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, Sparkles, Wand2, Play } from "lucide-react";
import Heading from "../ui/Heading";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Securely link your existing project management tools and data sources. Our zero-config integration maps your entire technical ecosystem in minutes.",
    icon: Link2,
  },
  {
    number: "02",
    title: "Synthesize",
    description: "Our proprietary AI engine analyzes historical patterns, team velocity, and task dependencies to identify hidden bottlenecks and optimization paths.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Automate",
    description: "Autonomous coordination layers take over the scheduling and workload balancing, freeing your engineering leaders from manual spreadsheet tracking.",
    icon: Wand2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#020617] py-24 md:py-32 overflow-hidden">
      {/* Cinematic Blue Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Large radial glow mimicking the user's image (bottom center/right light source) */}
        <div className="absolute -bottom-[20%] right-[10%] h-[800px] w-[800px] rounded-full bg-primary/20 blur-[150px] opacity-40" />
        <div className="absolute -bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[130px] opacity-30" />
        
        {/* Subtle grid for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-8 md:px-20">
        <Heading 
          title={<>How Intelligent Execution <span className="text-primary">Works</span></>}
          description="See how Buildorai transforms complex engineering workflows into a streamlined, autonomous machine."
          badge="How it Works"
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: 3-Step Process */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative flex gap-6"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl font-black text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </div>
                <div>
                  <h3 className="mb-3 flex items-center gap-3 text-2xl font-bold text-white tracking-tight">
                    
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed md:text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Video Player Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Accent behind video */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30" />
            
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-background">
                <video 
                  controls 
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 hover:opacity-100"
                >
                  <source src="https://res.cloudinary.com/dbaqnxlx5/video/upload/q_auto/f_auto/v1776337834/video-final_lmsrjo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-text-secondary">
               <div className="h-px w-8 bg-white/10" />
               Experience the Pulse of Intelligence
               <div className="h-px w-8 bg-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
