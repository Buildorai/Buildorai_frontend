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
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all ${plan.highlighted
                  ? "border-primary bg-primary/5 py-12 shadow-xl shadow-primary/10"
                  : "border-white/5 bg-surface hover:border-white/10"
                }`}
            >
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
                    : "bg-white/5 text-white hover:bg-primary hover:bg-primary-dark"
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
