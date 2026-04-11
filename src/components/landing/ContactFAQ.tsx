// === Landing: Contact & FAQ section component ===
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, Mail, Phone, MapPin, Check } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please complete the security check.");
      return;
    }

    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Include Turnstile token for Formspree verification
    data["cf-turnstile-response"] = turnstileToken;

    try {
      const response = await fetch("https://formspree.io/f/xzdkqred", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 md:px-20">
        <Heading 
          title={<>Questions or <span className="text-primary">Need Assistance?</span></>}
          description="Have questions or ready to start your journey? Our team is here to help you scale your engineering performance."
          badge="Contact & Help"
          align="center"
          className="mb-16"
        />
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-primary/20 bg-primary/5 p-12 text-center backdrop-blur-sm"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                  <Check size={40} /> {/* Using Plus rotated as a cross/check or something, wait I'll use Send or Check if available */}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-text-secondary">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-bold text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Project Type</label>
                  <select 
                    name="projectType"
                    className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm appearance-none"
                  >
                    <option className="bg-[#020617]">Strategic AI Deployment</option>
                    <option className="bg-[#020617]">Resource Optimization</option>
                    <option className="bg-[#020617]">Custom Coordination Engine</option>
                    <option className="bg-[#020617]">Enterprise Cloud Transition</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-secondary pl-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="How can we help scale your engineering performance?"
                    className="w-full rounded-2xl border border-white/10 bg-surface/50 p-4 text-white outline-none ring-primary/20 transition-all focus:border-primary focus:ring-4 backdrop-blur-sm resize-none"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_CLOUD_FLARE_SITE_KEY || ""} 
                    onSuccess={(token) => setTurnstileToken(token)}
                  />
                </div>

                <button 
                  disabled={status === "submitting"}
                  className="group mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-dark font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending Intelligence..." : "Send Intelligent Message"}
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                {status === "error" && (
                  <p className="text-center text-sm font-bold text-red-500">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >


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
            
           
          </motion.div>

        </div>
        
        {/* Contact Details Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { icon: <Mail className="text-white" size={24} />, label: "Email Address", value: "help@buildorai.com" },
            { icon: <Phone className="text-white" size={24} />, label: "Mobile Number", value: "+12703631630" },
            { icon: <MapPin className="text-white" size={24} />, label: "Our Location", value: "One Sansome Street, San Francisco, CA 94104, USA" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-6 rounded-3xl border border-white/5 bg-surface/20 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-surface/30"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary opacity-70">{item.label}</p>
                <p className="text-sm font-bold text-white md:text-lg tracking-tight">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Map Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface/20 p-2 shadow-2xl backdrop-blur-sm"
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.116641551048!2d-122.40348702344719!3d37.79155737198127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806375f1b231%3A0x86733230559e793a!2sOne%20Sansome%20St%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2slk!4v1712658825824!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) transition-all grayscale(0.2) contrast(1.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 transition-opacity hover:opacity-100"
            ></iframe>
            
            {/* Subtle Overlay to ensure it feels part of the theme */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-surface/30 rounded-[2rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
