// === Landing: Blog / Insights component ===
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, ArrowRight, Share2 } from "lucide-react";
import Heading from "../ui/Heading";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Autonomous Engineering Coordination",
    category: "AI Strategy",
    date: "May 12, 2026",
    author: "Dr. Alex Rivera",
    image: "/blog-neural.png",
    excerpt: "Exploring how decentralized AI layers are replacing traditional project management overhead in high-velocity teams.",
    content: "The landscape of engineering coordination is shifting from manual tracking to autonomous neural layers. In this deep dive, we explore how Buildorai's coordination engine identifies project bottlenecks before they occur, allowing teams to focus 100% of their energy on shipping code. By leveraging distributed GPU clusters, we can now simulate thousands of project paths in real-time to find the optimal route to delivery.\n\nKey takeaways include the impact of zero-config integration on team velocity and the shift from predictive to prescriptive project intelligence.",
  },
  {
    id: 2,
    title: "Scaling Project Velocity with GPU-Accelerated Scheduling",
    category: "Performance",
    date: "June 05, 2026",
    author: "Sarah Chen",
    image: "/blog-velocity.png",
    excerpt: "Why traditional CPU-based scheduling is failing modern engineering complexity and how parallel processing changes everything.",
    content: "Modern software projects are no longer linear; they are complex networks of interdependent micro-services and asynchronous workflows. Using traditional CPU-based scheduling algorithms leads to cascading delays. Our research shows that parallelizing these calculations on dedicated GPU clusters can reduce planning latency by 94%.\n\nThis article breaks down the math behind our 'Neural Scheduler' and provides a roadmap for teams looking to move beyond the Gantt chart era into the era of real-time project synthesis.",
  },
  {
    id: 3,
    title: "Security Architecture for Decentralized Intelligence",
    category: "Governance",
    date: "June 18, 2026",
    author: "Marcus Thorne",
    image: "/blog-security.png",
    excerpt: "Deep-diving into AES-256 encryption and SOC-2 compliance in the age of globally distributed AI workloads.",
    content: "As project data becomes the lifeblood of AI-driven coordination, security must be baked into the architecture, not bolted on. Buildorai utilizes a multi-layered security perimeter that ensures project telemetry is encrypted at rest and in transit using AES-256 standards.\n\nWe discuss our approach to hardware-level isolation for enterprise tenants and how we maintain SOC-2 Type II compliance while operating a massive, decentralized node network. Privacy isn't a trade-off for intelligence; it's the foundation of it.",
  },
];

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Rounded Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[130px] opacity-60" />
        
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <Heading 
          title={<>Intelligence <span className="text-primary italic">Insights</span></>}
          description="Thought leadership at the intersection of AI, hardware optimization, and modern engineering management."
          badge="Blog & Resources"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: blog.id * 0.1 }}
              onClick={() => setSelectedBlog(blog)}
              className="group cursor-pointer rounded-3xl border border-white/5 bg-surface/30 p-2 transition-all hover:border-primary/40 hover:bg-surface/50 hover:shadow-2xl hover:shadow-primary/5 shadow-inner"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-lg">
                  {blog.category}
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="mb-3 flex items-center gap-4 text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {blog.author}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-primary leading-tight line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm text-text-secondary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-black text-primary group-hover:gap-4 transition-all uppercase tracking-tighter">
                  Read Analysis <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface shadow-2xl overflow-y-auto custom-scrollbar"
            >
              {/* Modal Header Image */}
              <div className="relative h-64 w-full md:h-96">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-background/50 text-white backdrop-blur-md transition-all hover:bg-primary"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-6 text-sm font-medium text-text-secondary">
                  <span className="rounded-full bg-primary/10 px-4 py-1.5 font-bold uppercase tracking-widest text-primary">{selectedBlog.category}</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {selectedBlog.date}</span>
                  <span className="flex items-center gap-2"><User size={16} /> {selectedBlog.author}</span>
                </div>
                
                <h2 className="mb-8 font-heading text-4xl font-bold text-white md:text-5xl leading-tight">
                  {selectedBlog.title}
                </h2>
                
                <div className="prose prose-invert prose-blue max-w-none">
                  <p className="text-lg md:text-xl text-text-primary leading-relaxed whitespace-pre-line border-l-4 border-primary pl-8 italic mb-10">
                    {selectedBlog.excerpt}
                  </p>
                  <div className="text-text-secondary text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {selectedBlog.content}
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-10">
                   <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                         <User size={24} />
                      </div>
                      <div>
                         <div className="font-bold text-white">{selectedBlog.author}</div>
                         <div className="text-xs text-text-secondary">Senior AI Strategist at Buildorai</div>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-all hover:bg-primary group">
                         <Share2 size={20} className="text-text-secondary group-hover:text-white" />
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
