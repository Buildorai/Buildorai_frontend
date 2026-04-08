"use client";

import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "AI-Powered Scheduling", "Smart Resource Allocation", "Predictive Analytics", "Automated Workflows", "Team Intelligence", "Enterprise Security", "Global Scalability", "Data-Driven Decisions",
];

const LogoMarqueeContent = () => (
  <div className="flex shrink-0 items-center gap-12 px-6">
    {marqueeItems.map((item, index) => (
      <div key={index} className="flex items-center gap-12">
        <span className="whitespace-nowrap text-xs font-black tracking-[0.3em] text-[#475569] uppercase transition-colors hover:text-primary cursor-default">
          {item}
        </span>
        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
      </div>
    ))}
  </div>
);

export default function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-[#020617] py-3">
      {/* Soft masks for edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#020617] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#020617] to-transparent" />

      <div className="flex w-fit">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap"
        >
          <LogoMarqueeContent />
          <LogoMarqueeContent />
          <LogoMarqueeContent />
        </motion.div>
      </div>
    </section>
  );
}
