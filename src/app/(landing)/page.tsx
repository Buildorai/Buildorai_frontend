import React from "react";
import Hero from "@/components/landing/Hero";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Features from "@/components/landing/Features";
import Architecture from "@/components/landing/Architecture";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Testimonials from "@/components/landing/Testimonials";
import Blog from "@/components/landing/Blog";
import Pricing from "@/components/landing/Pricing";
import ContactFAQ from "@/components/landing/ContactFAQ";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-background">
      <Hero />
      <LogoMarquee />
      <Features />
      <Architecture />
      <About />
      <Blog />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <ContactFAQ />
      <Footer />
    </div>
  );
}
