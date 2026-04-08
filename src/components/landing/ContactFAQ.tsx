// === Landing: Contact & FAQ section component ===
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, MessageSquare, HelpCircle } from "lucide-react";
import Heading from "../ui/Heading";

const faqItems = [
  {
    question: "How does the AI coordination system scale?",
    answer: "Our architecture is built on top of a globally distributed GPU cluster. As your team grows, Buildorai dynamically allocates neural processing capacity across edge nodes to maintain sub-millisecond coordination latency.",
  },
  {
    question: "Is Buildorai compatible with existing CI/CD tools?",
    answer: "Yes. Buildorai offers native integration with GitHub Actions, GitLab CI, Jenkins, and Azure DevOps. It sits as an intelligence layer on top of your current stack without requiring infrastructure migration.",
  },
  {
    question: "What are the core security protocols used?",
    answer: "We utilize end-to-end AES-256 encryption for all project telemetry. Additionally, our system is SOC-2 Type II compliant and includes built-in role-based access control (RBAC) and hardware-level isolation for enterprise customers.",
  },
  {
    question: "Do you offer enterprise-grade support?",
    answer: "Absolutely. Enterprise plans include 24/7 dedicated solution architects, white-glove onboarding, and a guaranteed 99.9% uptime SLA for your AI coordination layer.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => (
  <div className="border-b border-white/5 last:border-0">
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between py-6 text-left transition-all hover:text-primary"
    >
      <span className="text-lg font-bold text-white md:text-xl tracking-tight">{question}</span>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all ${isOpen ? "bg-primary text-white border-primary" : "bg-white/5 text-text-secondary"}`}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-sm md:text-base leading-relaxed text-text-secondary">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-8 md:px-20">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              title={<>Let's Build the <span className="text-primary">Future</span></>}
              description="Have a project in mind or need enterprise access? Our solution architects are ready to help."
              badge="Get in Touch"
              align="left"
              className="mb-10"
            />

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Project Type</label>
                <select className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm appearance-none">
                  <option className="bg-[#020617]">Strategic AI Deployment</option>
                  <option className="bg-[#020617]">Resource Optimization</option>
                  <option className="bg-[#020617]">Custom Coordination Engine</option>
                  <option className="bg-[#020617]">Enterprise Cloud Transition</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help scale your engineering performance?"
                  className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm resize-none"
                />
              </div>

              <button className="group mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-95">
                Send Intelligent Message
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              title={<>Unlocking the <span className="text-primary">Answers</span></>}
              description="Everything you need to know about the platform's core mechanics and deployment lifecycle."
              badge="Frequently Asked"
              align="left"
              className="mb-10"
            />

            <div className="rounded-3xl border border-white/5 bg-surface/20 p-2 backdrop-blur-sm">
              <div className="rounded-[1.4rem] bg-background/50 p-6 md:p-10">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Visual Accent */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center">
               <p className="text-sm font-medium text-primary-dark">Still have questions? Join our <span className="font-bold underline cursor-pointer">Discord Community</span></p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
