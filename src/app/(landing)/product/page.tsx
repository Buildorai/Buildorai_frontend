import React from 'react';
import {
  Zap,
  Cpu,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Globe,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Product | Buildorai - AI-Powered Project Intelligence",
  description: "Transforming project management through secure, intelligent coordination powered by NVIDIA H100 Tensor Core GPUs.",
};

const BuildorAIProductPage = () => {
  return (
    <div className="bg-[#020617] text-white font-sans selection:bg-[#0EA5E9]/30 pt-8 md:pt-20 px-4 md:px-10 overflow-x-hidden">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-20 pb-2 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#0EA5E9]/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-sm font-medium mb-6">
              v2.0 Now Live with NVIDIA Riva
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6 font-heading">
              Unleashing <span className="text-[#0EA5E9]">Intelligence</span> in Every Project
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Transforming project management through secure, intelligent coordination to accelerate
              modern workflows. Powered by NVIDIA H100 Tensor Core GPUs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.buildorai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-[#0EA5E9]/20 hover:scale-105 active:scale-95"
              >
                Get Started with BuildorAI
                <Zap className="w-4 h-4 group-hover:fill-current" />
              </a>
              <Link
                href="/#how-it-works"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:border-white/20 active:scale-95"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative group"
          >
            {/* Background Atmosphere */}
            <div className="absolute -inset-10 bg-[#0EA5E9]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative rounded-[2.5rem] bg-[#020617] overflow-hidden transform-gpu transition-all duration-700 group-hover:border-[#0EA5E9]/20 group-hover:shadow-[#0EA5E9]/5">
              {/* Image with Edge Softening Mask */}
              <div 
                className="relative h-full w-full"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
                }}
              >
                <Image
                  src="/Product-Page-Hero.jpg"
                  alt="BuildorAI Robot Interface"
                  width={800}
                  height={800}
                  className="rounded-2xl w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  priority
                />
              </div>
              
              {/* Atmospheric Overlays for Blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/20 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-50" />
              
              {/* Floating Status Cards */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-8 right-8 bg-[#020617]/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl transition-all group-hover:translate-x-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0EA5E9] font-bold">Neural Engine</span>
                </div>
                <div className="font-bold text-sm text-white mt-1">Status: Operational</div>
              </motion.div>

              

              {/* Decorative Accent Glow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#0EA5E9]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: NVIDIA ACCELERATION */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-bold mb-12">Driven by Industry-Leading Infrastructure</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center justify-center font-heading font-bold text-2xl tracking-tighter italic text-white hover:text-[#0EA5E9]">NVIDIA RIVA</div>
            <div className="flex items-center justify-center font-heading font-bold text-2xl tracking-tighter italic text-white hover:text-[#0EA5E9]">CUDA</div>
            <div className="flex items-center justify-center font-heading font-bold text-2xl tracking-tighter italic text-white hover:text-[#0EA5E9]">TENSORRT</div>
            <div className="flex items-center justify-center font-heading font-bold text-2xl tracking-tighter italic text-white hover:text-[#0EA5E9]">AWS P5</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE FEATURES GRID */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0EA5E9]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Built for Enterprise Efficiency</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Leveraging NVIDIA-accelerated AI to optimize every aspect of your professional lifecycle.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="text-[#0EA5E9]" />,
                title: "Conversational Intelligence",
                desc: "Powered by NVIDIA Riva, manage tasks and automate operations using simple natural language."
              },
              {
                icon: <BarChart3 className="text-[#0EA5E9]" />,
                title: "Predictive Analytics",
                desc: "Identify bottlenecks and predict delays before they happen with H100-trained models."
              },
              {
                icon: <ShieldCheck className="text-[#0EA5E9]" />,
                title: "Secure Coordination",
                desc: "Enterprise-grade security ensuring your project data and activity streams remain private."
              },
              {
                icon: <Cpu className="text-[#0EA5E9]" />,
                title: "Low-Latency Automation",
                desc: "Triton Inference Server ensures ultra-fast response times for real-time task orchestration."
              },
              {
                icon: <Globe className="text-[#0EA5E9]" />,
                title: "Global Scalability",
                desc: "Deploy across distributed teams with AWS P4 and P5 GPU-optimized infrastructure."
              },
              {
                icon: <Clock className="text-[#0EA5E9]" />,
                title: "Dynamic Optimization",
                desc: "Our AI engine continuously analyzes workflows to reduce resource allocation waste."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="p-4 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0EA5E9]/50 transition-all group backdrop-blur-sm"
              >
                <div className="mb-6 p-3 bg-[#0EA5E9]/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE AI ENGINE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0EA5E9]/20 blur-[100px] -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-8 italic font-heading">98.4% Efficiency Index</h2>
            <div className="space-y-6">
              {[
                "Accelerated parallel processing with NVIDIA CUDA",
                "Transformer-based models for high prediction accuracy",
                "Real-time inference via Triton Inference Server",
                "Optimized workload balancing for distributed teams"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center transition-colors group-hover:bg-[#0EA5E9]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <span className="text-gray-300 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-surface border border-white/10 rounded-3xl p-6 md:p-12 text-center relative group">
            <div className="noise-overlay" />
            <h3 className="text-2xl font-bold mb-4 font-heading text-white">Enterprise Grade Infrastructure</h3>
            <p className="text-gray-400 mb-8 italic text-lg leading-relaxed">
              &quot;Securing NVIDIA H100 GPU credits allows us to accelerate our AI development lifecycle and optimize predictive workflow models.&quot;
            </p>
            <div className="inline-flex items-center gap-2 text-[#0EA5E9] font-bold tracking-[0.2em] text-sm bg-[#0EA5E9]/10 py-2 px-6 rounded-full border border-[#0EA5E9]/20">
              <Cpu className="w-5 h-5 hidden md:block" /> POWERED BY H100 TENSOR CORE
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WORKFLOW AUTOMATION SHOWCASE */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-heading">Intelligent Workflow Orchestration</h2>
          <div className="relative p-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/50 to-transparent rounded-3xl shadow-2xl shadow-[#0EA5E9]/5">
            <div className="bg-[#020617] rounded-[calc(1.5rem-1px)] p-8 md:p-12 backdrop-blur-3xl">
              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="group">
                  <h4 className="text-[#0EA5E9] font-bold mb-4 uppercase text-xs tracking-widest bg-[#0EA5E9]/10 w-fit px-3 py-1 rounded">Real-Time Monitoring</h4>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                    Continuous analysis of high-volume project data and team activity streams to identify inefficiencies instantly.
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-[#0EA5E9] font-bold mb-4 uppercase text-xs tracking-widest bg-[#0EA5E9]/10 w-fit px-3 py-1 rounded">Smart Scheduling</h4>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                    Predictive algorithms that adjust timelines based on historical performance and resource availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA / FINAL CALL */}
      <section className="py-32 pb-48 relative group overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#0EA5E9]/10 blur-[120px] rounded-full opacity-50 transition-opacity group-hover:opacity-80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 font-heading">Ready to Automate your <span className="text-[#0EA5E9]">Future?</span></h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the next generation of project intelligence. Secure, scalable, and high-performance infrastructure starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://app.buildorai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0EA5E9] hover:scale-105 transition-all text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#0EA5E9]/30 active:scale-95"
            >
              Get Started with Buildorai.com
            </a>
            <Link
              href="/#contact"
              className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 hover:border-white/20"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BuildorAIProductPage;
