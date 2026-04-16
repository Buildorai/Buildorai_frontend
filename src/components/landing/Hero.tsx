// === Landing: HeroSection component ===
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Activity, Cpu, Globe, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full flex-col pt-32 pb-20 lg:pb-8 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image Layer */}
        <div className="hidden lg:block absolute inset-0">
          <Image 
            src="/Hero-banner.webp" 
            alt="Engineering Intelligence" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40 z-10" />
          
          {/* Desktop Premium Glow Overlay */}
          <div className="absolute inset-0 z-20">
            {/* Left Headline Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px] opacity-70" />
            
            {/* Right Cards Accent Glow */}
            <div className="absolute top-1/3 right-0 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-primary/10 blur-[140px] opacity-40" />
            
            {/* Center Mesh Detail */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.1)_0%,transparent_60%)]" />
          </div>
        </div>

        {/* Mobile/Tablet Premium Glow Layer */}
        <div className="lg:hidden absolute inset-0 bg-[#020617] overflow-hidden">
          {/* Main Glow Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] opacity-60 animate-pulse" />
          
          {/* Secondary Accents */}
          <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
          
          {/* Radial Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)]" />
          
          {/* Subtle Grid for high-tech feel */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(rgba(14,165,233,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Universal Animated Glow */}
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] opacity-30 md:opacity-50" />
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
              Transforming project management through secure, intelligent coordination to accelerate modern workflows.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/product"
                className="group flex h-14 items-center gap-2 rounded-full bg-primary px-8 font-bold text-white transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 duration-700"
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
              className="absolute -top-3 right-0 z-20 flex w-64 items-center gap-4 rounded-2xl border border-white/10 bg-background/40 p-4 backdrop-blur-xl shadow-2xl"
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
