// === Landing: PricingSection component ===
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Heading from "../ui/Heading";

const plans = [
  {
    name: "Starter",
    priceMonthly: 18,
    priceYearly: 14,
    description: "Ideal for individual developers and small teams starting their journey.",
    features: [
      "Up to 3 Projects",
      "Basic AI Scheduling",
      "Community Support",
      "Public API Access",
      "Standard Security",
    ],
    cta: "Get Started",
    links: {
      monthly: "https://buy.stripe.com/test_6oU14m2EmdtHenX9NE5Ne05",
      yearly: "https://buy.stripe.com/test_4gM9ASdj02P3cfP3pg5Ne04",
    },
    highlighted: false,
  },
  {
    name: "Professional",
    priceMonthly: 49,
    priceYearly: 39,
    description: "Advanced tools for scaling teams and complex project workflows.",
    features: [
      "Unlimited Projects",
      "Predictive Analytics",
      "Priority AI Processing",
      "SLA-backed Support",
      "Advanced Security",
    ],
    cta: "Launch Pro",
    links: {
      monthly: "https://buy.stripe.com/test_fZu9ASen4fBP3Jj1h85Ne03",
      yearly: "https://buy.stripe.com/test_7sY00i5Qy9drbbLaRI5Ne02",
    },
    highlighted: true,
  },
  {
    name: "Enterprise",
    priceMonthly: 199,
    priceYearly: 159,
    description: "Custom solutions for large-scale organizations and high-security requirements.",
    features: [
      "Custom AI Models",
      "On-premise Deployment",
      "Dedicated Infrastructure",
      "Executive Reports",
      "White-glove Onboarding",
    ],
    cta: "Contact Sales",
    links: {
      monthly: "https://buy.stripe.com/test_fZuaEW3Iq0GVdjTf7Y5Ne01",
      yearly: "https://buy.stripe.com/test_28E3cu92Kahv7Zz9NE5Ne00",
    },
    highlighted: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="relative bg-[#020617] py-24 md:py-32 overflow-hidden">
      {/* Premium Sapphire Atmosphere Background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark navy */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Large atmospheric blue nebula glows */}
        <div className="absolute left-[-10%] top-[-10%] h-[120%] w-[120%] bg-gradient-to-tr from-primary/10 via-[#0369a1]/5 to-transparent" />
        
        {/* Soft radial highlights behind the cards */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1000px] rounded-full bg-primary/10 blur-[150px] opacity-30" />
        <div className="absolute right-[5%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px] opacity-40 mix-blend-screen" />
        
        {/* Subtle cyan accent for the high-end look */}
        <div className="absolute left-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px] opacity-20" />
        
        {/* Textured grid layer for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <Heading
          title={<>Predictable <span className="text-primary">Pricing</span></>}
          description="Simple plans for every scale. Save up to 20% with annual billing."
          badge="Pricing"
        >
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-white" : "text-text-secondary"}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative h-7 w-12 rounded-full bg-surface-hover p-1 transition-colors hover:bg-white/10"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="h-5 w-5 rounded-full bg-primary"
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-white" : "text-text-secondary"}`}>Yearly (Save 20%)</span>
          </div>
        </Heading>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:scale-[1.02] ${plan.highlighted
                  ? "border-primary/20 bg-primary/5 py-12 shadow-2xl shadow-primary/20 hover:shadow-primary/30"
                  : "border-white/5 bg-surface hover:shadow-2xl hover:shadow-primary/10"
                }`}
            >
              {/* Animated Laser Border Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Outer Glow Layer (Left) */}
                  <motion.path
                    d="M 50 100 L 10 100 Q 0 100 0 90 L 0 10 Q 0 0 10 0 L 50 0"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="opacity-20 blur-[2px]"
                    initial={{ pathLength: 0 }}
                    variants={{ hover: { pathLength: 1.1 } }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Core Bright Layer (Left) */}
                  <motion.path
                    d="M 50 100 L 10 100 Q 0 100 0 90 L 0 10 Q 0 0 10 0 L 50 0"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    variants={{ hover: { pathLength: 1.1, opacity: 1 } }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  {/* Outer Glow Layer (Right) */}
                  <motion.path
                    d="M 50 100 L 90 100 Q 100 100 100 90 L 100 10 Q 100 0 90 0 L 50 0"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    className="opacity-20 blur-[2px]"
                    initial={{ pathLength: 0 }}
                    variants={{ hover: { pathLength: 1.1 } }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Core Bright Layer (Right) */}
                  <motion.path
                    d="M 50 100 L 90 100 Q 100 100 100 90 L 100 10 Q 100 0 90 0 L 50 0"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    variants={{ hover: { pathLength: 1.1, opacity: 1 } }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>

                {/* Subtle Inner Pulse Background */}
                <div className="absolute inset-0 bg-primary/0 transition-all duration-700 group-hover:bg-primary/[0.03]" />
              </div>

              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-dark">
                {plan.name}
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white tracking-tight leading-none">$</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-6xl font-bold text-white tracking-tight leading-none"
                  >
                    {billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-text-secondary">/mo</span>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-text-secondary">
                {plan.description}
              </p>

              <div className="mb-8 flex-grow space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-success" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={billingCycle === "monthly" ? plan.links.monthly : plan.links.yearly}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all ${plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark shadow-md"
                    : "bg-white/5 text-white hover:bg-primary hover:bg-primary-dark shadow-sm hover:shadow-primary/20"
                  }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
