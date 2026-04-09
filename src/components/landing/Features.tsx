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
    <section id="features" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <Heading 
          title={<>Engineering <span className="text-primary">Intelligence</span></>}
          description="Powered by a GPU-accelerated AI core, Buildorai delivers unmatched efficiency for modern project coordination."
          badge="Features"
        />

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-[3rem] border border-white/5 bg-[#020617] transition-all hover:border-primary/30 hover:-translate-y-2 shadow-2xl hover:shadow-primary/10"
            >
              {/* Upper Section: Decorative Graphic */}
              <div className="relative h-48 w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('/feature_bg_blue.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                
                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle, rgba(14,165,233,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              </div>

              {/* Icon Container: Centered on the boundary */}
              <div className="absolute left-10 top-[160px] z-10 mb-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-primary text-white shadow-xl scale-100 group-hover:scale-110 transition-transform duration-300 shadow-primary/20">
                  <feature.icon size={32} strokeWidth={2} />
                </div>
              </div>

              {/* Lower Section: Content */}
              <div className="flex flex-col p-10 pt-10 pb-0!">
                <h3 className="mb-4 text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="mb-6 text-[#94A3B8] text-base leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Glow */}
              <div className={`absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
