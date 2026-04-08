// === Landing: HeroSection component ===
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-8 md:px-20 pt-20 pb-10">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-dark backdrop-blur-md"
            >
              <Terminal size={14} />
              <span>v1.0.0 Now in Beta</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-heading text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              Unleashing the Power of <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Project Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg text-text-secondary md:text-xl leading-relaxed"
            >
              Transforming project management with secure, decentralized, and intelligent coordination technology. Accelerate your engineering workflows today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/overview"
                className="group flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Get Started with Buildorai
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="flex h-14 items-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white/10 backdrop-blur-sm">
                Discover How It Works
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl">
              <Image 
                src="/hero-ai.png" 
                alt="AI Intelligence Visual" 
                width={800} 
                height={800}
                className="w-full object-cover"
                priority
              />
              {/* Optional glowing overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Pulsating background glow behind image */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 animate-pulse rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
