// === Landing: Blog / Insights component ===
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, ArrowRight, Share2 } from "lucide-react";
import Heading from "../ui/Heading";

import { blogs, type BlogPost } from "../../constants/blogData";


export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedBlog]);

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
          title={<>AI & Workflow <span className="text-primary italic">Insights</span></>}
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
              className="absolute inset-0 bg-black/10 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface shadow-2xl"
            >
              {/* Fixed Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/50 text-white backdrop-blur-md transition-all hover:bg-primary sm:top-8 sm:right-8"
              >
                <X size={24} />
              </button>

              <div className="max-h-[85vh] overflow-y-auto blog-scrollbar">
                <style dangerouslySetInnerHTML={{ __html: `
                  .blog-scrollbar::-webkit-scrollbar {
                    width: 6px;
                  }
                  .blog-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                  }
                  .blog-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--primary, #0EA5E9);
                    border-radius: 10px;
                  }
                  .blog-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: var(--primary-dark, #0284C7);
                  }
                `}} />
                
                {/* Modal Header Image */}
                <div className="relative h-64 w-full md:h-96">
                  <Image
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
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
