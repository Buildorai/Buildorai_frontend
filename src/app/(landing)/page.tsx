import React from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Architecture from "@/components/landing/Architecture";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Blog from "@/components/landing/Blog";
import Pricing from "@/components/landing/Pricing";
import ContactFAQ from "@/components/landing/ContactFAQ";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background">
      <Hero />
      <Features />
      <Architecture />
      <About />
      <Blog />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <ContactFAQ />
      <Footer />
    </div>
  );
}
