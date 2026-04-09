// === Landing: HeroSection component ===
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Activity, Cpu, Globe, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full flex-col pt-32 pb-20 lg:pb-8 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-ai.png" 
          alt="Engineering Intelligence" 
          fill 
          className="object-cover opacity-80 brightness-[0.9]"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        
        {/* Animated Glows */}
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-1 items-center px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div className="max-w-3xl">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-heading text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl [&>span]:font-sans"
            >
              Unleashing <span className="text-primary italic">Intelligence</span> in Every Project
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg text-text-secondary md:text-xl leading-relaxed"
            >
              Transforming project management with secure, decentralized, and intelligent coordination technology. Accelerate your engineering workflows today.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/overview"
                className="group flex h-14 items-center gap-2 rounded-full bg-primary px-8 font-bold text-white transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
              >
                Get Started with Buildorai
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#how-it-works"
                className="flex h-14 items-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Floating Intelligence Cards */}
          <div className="relative hidden h-[500px] lg:block">
            {/* Card 1: AI Engine */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: [0, -15, 0] }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-10 right-0 z-20 flex w-64 items-center gap-4 rounded-2xl border border-white/10 bg-background/40 p-4 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Cpu size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">AI Core Status</p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                  <p className="text-lg font-bold text-white whitespace-nowrap">Active & Syncing</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Optimization Index */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: [0, 15, 0] }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute left-10 top-1/2 z-10 flex w-60 -translate-y-1/2 items-center gap-4 rounded-2xl border border-white/10 bg-background/40 p-4 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Efficiency Index</p>
                <p className="text-2xl font-black text-white">98.4%</p>
              </div>
            </motion.div>

            {/* Card 3: Global Nodes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-10 right-10 z-20 flex w-56 items-center gap-4 rounded-2xl border border-white/10 bg-background/40 p-4 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Global Nodes</p>
                <p className="text-lg font-bold text-white">1,420 Active</p>
              </div>
            </motion.div>

            {/* Decorative Connection Lines or Glows */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
