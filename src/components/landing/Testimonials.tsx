"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Heading from "../ui/Heading";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    stat: "8X",
    metric: "Efficiency Increase",
    quote: "Buildorai uncovered critical bottlenecks in our coordination cycle before release, preventing costly delays and ensuring 99.9% sprint predictability.",
    author: "Alex Rivera",
    role: "VP of Engineering",
    image: "/images/testimonials/vp-engineering.png"
  },
  {
    id: 2,
    stat: "40%",
    metric: "Reduction in Overhead",
    quote: "The strategic AI coordination has completely replaced our manual scheduling. Our team spends less time in meetings and more time shipping high-impact code.",
    author: "Sarah Jenkins",
    role: "CTO, DataSync",
    image: "/images/testimonials/avatar-1.png"
  },
  {
    id: 3,
    stat: "99.9%",
    metric: "Sprint Predictability",
    quote: "Since integrating Buildorai, our delivery dates have never been more accurate. The AI accurately predicts resource needs and avoids coordination traps.",
    author: "Marcus Chen",
    role: "Lead Architect",
    image: "/images/testimonials/avatar-2.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="relative bg-[#020617] py-24 md:py-32 overflow-hidden">
      {/* Cinematic Abstract Background (Matching User Image) */}
      <div className="absolute inset-0 z-0">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Large fluid blue shapes with overlapping gradients */}
        <div className="absolute -left-[10%] top-[-10%] h-[120%] w-[120%] bg-gradient-to-br from-primary/20 via-[#0369a1]/10 to-transparent" />
        
        {/* Overlapping curved layers using large blurred circles */}
        <div className="absolute -right-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/20 blur-[150px] opacity-40 mix-blend-screen" />
        <div className="absolute left-1/4 bottom-[-10%] h-[600px] w-[900px] rounded-[100%] bg-blue-600/10 blur-[130px] opacity-40 transform rotate-12" />
        
        {/* Subtle cyan accent for the "teal-ish" highlights in the image */}
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px] opacity-30" />
        
        {/* Textured layer for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-8 md:px-20">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          
          {/* Left Column: Context & Proof */}
          <div className="space-y-12">
            <Heading 
              align="left"
              badge="Success Stories"
              title={<>Results that <span className="text-primary">Speak</span> Volumes.</>}
              description="Discover how leading engineering teams leverage Buildorai's AI-driven coordination engine to achieve unprecedented resilience and scale."
              className="mb-0"
            />

            <div className="flex flex-col gap-8">
              {/* Avatar Stack */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, "vp"].map((id, i) => (
                    <motion.div 
                      key={id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="relative h-14 w-14 rounded-full border-4 border-background overflow-hidden bg-surface"
                    >
                      <Image 
                        src={`/images/testimonials/${id === 'vp' ? 'vp-engineering' : `avatar-${id}`}.png`}
                        alt="Customer Avatar"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-white"
                  >
                    +50
                  </motion.div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-text-secondary">
                    1.5K+ Trusted Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Spotlight Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 rounded-[2.5rem] border border-white/5 bg-surface/30 p-10 md:p-16 backdrop-blur-xl min-h-[500px] flex flex-col justify-center">
              
              {/* Quote Icon (Background) */}
              <div className="absolute right-10 top-10 opacity-5">
                <Quote size={120} className="text-white fill-white" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-10"
                >
                  {/* Metrics */}
                  <div className="space-y-2">
                    <h3 className="text-7xl font-bold tracking-tighter text-white md:text-8xl">{current.stat}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{current.metric}</p>
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative border-l-2 border-primary/30 pl-8 py-2">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                      "{current.quote}"
                    </p>
                  </div>

                  {/* Author Row */}
                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/10">
                        <Image 
                          src={current.image}
                          alt={current.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{current.author}</h4>
                        <p className="text-sm text-text-secondary">{current.role}</p>
                      </div>
                    </div>

                    {/* Nav Arrows */}
                    <div className="flex gap-4">
                      <button 
                        onClick={handlePrev}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-primary hover:border-primary active:scale-95"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-primary hover:border-primary active:scale-95"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
