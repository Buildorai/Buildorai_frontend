// === Landing: DashboardPreview component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Activity, PieChart } from "lucide-react";

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
                buildorai.com/dashboard
              </div>
              <div className="w-10" />
            </div>

            {/* Mockup Body Content */}
            <div className="relative aspect-[16/10] bg-[#0d121d] p-6 lg:p-10">
              <div className="grid h-full grid-cols-12 gap-6">
                {/* Simulated Sidebar */}
                <div className="col-span-2 hidden h-full space-y-4 lg:block">
                  <div className="h-8 w-full rounded bg-white/5" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-2 w-full rounded bg-white/[0.03]" />
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-12 lg:col-span-10">
                  <div className="grid grid-rows-3 gap-6 h-full">
                    <div className="row-span-1 grid grid-cols-3 gap-6">
                      <div className="rounded-xl border border-white/5 bg-background/50 p-4">
                        <Activity size={16} className="text-primary mb-2" />
                        <div className="h-2 w-12 rounded bg-white/10 mb-2" />
                        <div className="h-4 w-full rounded bg-white/5" />
                      </div>
                      <div className="rounded-xl border border-white/5 bg-background/50 p-4">
                        <Shield size={16} className="text-secondary mb-2" />
                        <div className="h-2 w-8 rounded bg-white/10 mb-2" />
                        <div className="h-4 w-full rounded bg-white/5" />
                      </div>
                      <div className="rounded-xl border border-white/5 bg-background/50 p-4">
                        <PieChart size={16} className="text-warning mb-2" />
                        <div className="h-2 w-16 rounded bg-white/10 mb-2" />
                        <div className="h-4 w-full rounded bg-white/5" />
                      </div>
                    </div>
                    <div className="row-span-2 rounded-xl border border-white/5 bg-background/30 p-6 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                         <Zap size={100} strokeWidth={0.5} />
                       </div>
                       <div className="h-4 w-32 rounded bg-white/10 mb-6" />
                       <div className="space-y-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 items-center">
                              <div className="h-1 tracking-wider w-8 rounded bg-primary/20" />
                              <div className="h-2 flex-1 rounded bg-white/5" />
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inner Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>

          {/* Floating UI Cards */}
          <FloatingCard className="-left-14 top-1/4" delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2 text-primary">
                <Terminal size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase text-text-secondary font-bold tracking-widest">Status</div>
                <div className="text-sm font-bold text-white">Neural Optimizing</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-14 bottom-1/4 border-primary/30" delay={0.6}>
            <div className="flex items-center gap-4">
               <div>
                  <div className="text-2xl font-bold text-primary">98.2%</div>
                  <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">Accuracy</div>
               </div>
               <div className="h-10 w-px bg-white/10" />
               <Zap size={24} className="text-primary animate-pulse" />
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}
