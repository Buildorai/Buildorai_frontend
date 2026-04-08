// === Landing: FeaturesSection component ===
"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Zap, Shield, BarChart3, Database, Globe, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

const features = [
  {
    title: "AI Scheduling Engine",
    description: "Automated project timelines that adapt to team capacity and task dependencies in real-time.",
    icon: LayoutGrid,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Intelligent Workflows",
    description: "Smart task allocation and bottleneck detection using advanced predictive analytics.",
    icon: Zap,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Secure Enterprise Foundation",
    description: "Built for scale with robust security protocols and role-based access controls.",
    icon: Shield,
    color: "text-danger",
    bgColor: "bg-danger/10",
  },
  {
    title: "Real-time Telemetry",
    description: "Comprehensive KPIs and performance metrics visualized through dynamic dashboards.",
    icon: BarChart3,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Global Data Core",
    description: "Scalable data architecture ensuring high availability and split-second responsiveness.",
    icon: Database,
    color: "text-primary-dark",
    bgColor: "bg-primary-dark/10",
  },
  {
    title: "Edge Deployment",
    description: "Optimized delivery across global networks for a high-performance experience everywhere.",
    icon: Globe,
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

export default function Features() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <Heading 
          title={<>Engineering <span className="text-primary">Intelligence</span></>}
          description="Powered by a GPU-accelerated AI core, Buildorai delivers unmatched efficiency for modern project coordination."
          badge="Features"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface/30 p-10 transition-all hover:border-primary/40 hover:bg-surface/50 hover:-translate-y-2"
            >
              {/* Subtle background decorative index */}
              <div className="absolute top-4 right-8 text-7xl font-black text-white/[0.03] group-hover:text-primary/[0.05] transition-colors pointer-events-none">
                0{index + 1}
              </div>

              {/* Dynamic light glow on hover */}
              <div className={`absolute -inset-2 rounded-[2.5rem] ${feature.bgColor} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

              <div className={`relative mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 ${feature.bgColor} p-4 ${feature.color} shadow-inner`}>
                <feature.icon size={30} strokeWidth={1.5} />
                <div className={`absolute inset-0 -z-10 rounded-2xl ${feature.bgColor} blur-xl opacity-30`} />
              </div>

              <h3 className="relative mb-4 text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="relative mb-6 text-text-secondary text-base leading-relaxed group-hover:text-text-primary transition-colors">
                {feature.description}
              </p>

              {/* Hover Action Indicator */}
              <div className="relative flex items-center gap-2 text-sm font-bold text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Performance Optimized <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
