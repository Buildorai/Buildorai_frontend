// === Landing: DashboardPreview component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Zap } from "lucide-react";

const FloatingCard = ({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`absolute z-20 rounded-xl border border-white/10 bg-surface/80 p-4 shadow-2xl backdrop-blur-md ${className}`}
  >
    {children}
  </motion.div>
);

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-8 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-6xl tracking-tight">
            The Command Center <span className="text-primary">in Action</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            A high-fidelity interface designed for peak engineering efficiency. See your projects through a lens of intelligence.
          </p>
        </motion.div>

        {/* Dashboard Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ perspective: 1200 }}
          className="relative mx-auto max-w-5xl"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: -2, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl"
          >
            {/* Mockup Header */}
            <div className="flex h-10 items-center justify-between border-b border-white/5 bg-background/50 px-4">
              <div className="flex gap-1.5 font-bold">
                <div className="h-2.5 w-2.5 rounded-full bg-danger/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-warning/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-success/50" />
              </div>
              <div className="rounded-md bg-white/5 px-4 py-1 text-[10px] font-medium text-text-secondary">
                app.buildorai.com/overview
              </div>
              <div className="w-10" />
            </div>

            {/* Dashboard Images */}
            <div className="relative w-full">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image 
                  src="/dashboard-desktop.PNG" 
                  alt="BuildorAI Desktop Dashboard Preview" 
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image 
                  src="/dashboard-mobile.PNG" 
                  alt="BuildorAI Mobile Dashboard Preview" 
                  width={400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Inner Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
}
