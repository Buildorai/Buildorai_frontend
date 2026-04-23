// === Landing: DashboardPreview component ===
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Terminal, 
  Zap, 
  LayoutGrid, 
  Activity, 
  Shield, 
  Settings, 
  Search, 
  Bell, 
  User, 
  MoreHorizontal,
  Home,
  Code
} from "lucide-react";

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

const TerminalFeed = () => {
  const [logs, setLogs] = React.useState<string[]>([
    "INITIALIZING_BUILDOR_OS... [OK]",
    "SCANNING_PROJECT_TOPOLOGY... DONE",
    "CONNECTING_TO_EDGE_NODES... STABLE",
    "AGENT_04_STATUS: STANDBY",
  ]);

  React.useEffect(() => {
    const feed = [
      "> Analysing performance bottlenecks...",
      "> Found 4 optimization vectors in /core/auth",
      "> Applying AI-driven refactoring...",
      "> Refactoring successful (savings: 124ms)",
      "> Checking security protocols...",
      "> Shield-AI: All systems nominal",
      "> Pushing optimized code to staging...",
      "> Build successful in 4.2s",
      "> Monitoring real-time traffic spikes...",
      "> Architect: Scaling GPU clusters...",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-12), feed[i]]);
      i = (i + 1) % feed.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {logs.map((log, index) => (
        <motion.div
          key={index + log}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-2"
        >
          <span className="text-primary/40">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
          <span className={log.startsWith('>') ? 'text-text-primary' : 'text-primary/70'}>{log}</span>
        </motion.div>
      ))}
    </div>
  );
};

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
          className="relative mx-auto max-w-6xl"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: -1, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl"
          >
            {/* Mockup Header (Browser Style) */}
            <div className="flex h-12 items-center justify-between border-b border-white/5 bg-background/80 px-4 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-danger/40" />
                <div className="h-3 w-3 rounded-full bg-warning/40" />
                <div className="h-3 w-3 rounded-full bg-success/40" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary border border-white/5">
                <Shield size={12} className="text-primary/70" />
                <span className="opacity-80">app.buildorai.com/dashboard/analytics</span>
              </div>
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Simulated Dashboard Content */}
            <div className="flex h-[400px] md:h-[600px] overflow-hidden bg-background/40">
              {/* Sidebar */}
              <div className="hidden w-16 flex-col items-center gap-6 border-r border-white/5 bg-background/20 py-8 md:flex">
                {[LayoutGrid, Activity, Terminal, Zap, Shield, Settings].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, color: "#0EA5E9" }}
                    className={`cursor-pointer transition-colors ${i === 0 ? "text-primary" : "text-text-secondary/60"}`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </motion.div>
                ))}
              </div>

              {/* Main App Area */}
              <div className="flex flex-1 flex-col overflow-hidden">
                {/* Dashboard Top Nav */}
                <div className="flex h-14 items-center justify-between border-b border-white/5 px-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-white">Project Nexus</h3>
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success ring-1 ring-success/20">Active</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden h-8 w-48 items-center gap-2 rounded-md bg-white/5 px-3 text-[10px] text-text-secondary md:flex">
                      <Search size={12} />
                      <span>Search modules...</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30" />
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Metrics Column */}
                    <div className="space-y-6 lg:col-span-2">
                      <div className="grid gap-4 sm:grid-cols-3">
                        {[
                          { label: "AI Efficiency", value: "94.2%", color: "text-primary", icon: Zap },
                          { label: "Active Agents", value: "12", color: "text-success", icon: Activity },
                          { label: "Cost Savings", value: "$12.4k", color: "text-warning", icon: Shield },
                        ].map((stat, i) => (
                          <div key={i} className="rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                            <div className="mb-2 flex items-center justify-between">
                              <stat.icon size={16} className={stat.color} />
                              <span className="text-[10px] text-text-secondary">+2.4%</span>
                            </div>
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] text-text-secondary">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Live Terminal / Code View */}
                      <div className="rounded-xl border border-white/5 bg-background/80 p-4 font-mono text-[11px] leading-relaxed shadow-inner">
                        <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <Terminal size={12} className="text-primary" />
                            <span className="text-text-secondary">buildor-cli --watch</span>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                          </div>
                        </div>
                        <div className="space-y-1 overflow-hidden h-[150px] md:h-[220px]">
                          <TerminalFeed />
                        </div>
                      </div>
                    </div>

                    {/* Side Panel: Active Agents */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Active Intelligence</h4>
                      {[
                        { name: "Architect-1", status: "Refactoring Core", progress: 85 },
                        { name: "Reviewer-AI", status: "Analyzing PR #204", progress: 40 },
                        { name: "Deploy-Bot", status: "Idle", progress: 100 },
                      ].map((agent, i) => (
                        <div key={i} className="rounded-xl border border-white/5 bg-white/5 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`h-2 w-2 rounded-full ${agent.status === 'Idle' ? 'bg-text-secondary/30' : 'bg-primary animate-pulse'}`} />
                              <span className="text-xs font-medium text-white">{agent.name}</span>
                            </div>
                            <span className="text-[10px] text-text-secondary">{agent.progress}%</span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${agent.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                              className="h-full bg-primary" 
                            />
                          </div>
                          <p className="mt-2 text-[10px] text-text-secondary">{agent.status}</p>
                        </div>
                      ))}
                      
                      <div className="mt-6 rounded-xl border border-dashed border-white/10 p-4 text-center">
                        <p className="text-[10px] text-text-secondary">Deploying 4 new agent nodes...</p>
                        <div className="mt-2 flex justify-center gap-1">
                          {[1, 2, 3, 4].map(i => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              className="h-1 w-4 rounded-full bg-primary/40"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-30" />
          </motion.div>

          {/* Floating UI Decorative Elements */}
          <FloatingCard className="-left-12 -top-6 hidden lg:block" delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Peak Performance</div>
                <div className="text-[10px] text-text-secondary">99.9% Optimization</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-8 bottom-12 hidden lg:block" delay={0.6}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Security Grade</div>
                <div className="text-[10px] text-text-secondary">Enterprise Verified</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>

      </div>
    </section>
  );
}
