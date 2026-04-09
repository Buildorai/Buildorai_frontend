// === Landing: Navbar component ===
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Blog", href: "#blog" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px", // Trigger when section is near top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that have nav links
    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-[100] w-full max-w-6xl -translate-x-1/2 px-4 transition-all duration-500 ${scrolled ? "top-2" : "top-6"
        }`}
    >
      <div className={`flex items-center justify-between rounded-full border border-white/10 bg-background/60 p-2 backdrop-blur-xl transition-all duration-500 ${scrolled ? "px-6 py-1.5 shadow-2xl shadow-primary/5" : "px-8 py-2"
        }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="Buildorai Logo"
            width={44}
            height={44}
            className="h-12 w-auto object-cover"
            priority
          />

        </Link>

        {/* Desktop Links - Nested Pill */}
        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-surface/40 p-1 lg:flex shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-text-secondary hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Login */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/get-started"
            className="animated-border-box group relative flex items-center justify-center rounded-full p-[1.5px] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <div className="animated-border-content px-8 py-2.5 rounded-full text-sm font-bold text-white whitespace-nowrap">
              Get Started
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-full left-0 mt-4 w-full rounded-[2rem] border border-white/10 bg-background/95 p-8 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-2xl border px-6 py-4 text-center text-lg font-medium transition-all ${
                      isActive 
                        ? "border-primary/50 bg-primary/10 text-white shadow-inner shadow-primary/10" 
                        : "border-white/5 bg-white/5 text-text-secondary hover:bg-primary/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-bold text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="animated-border-box flex h-14 items-center justify-center rounded-2xl p-[1.5px] transition-all duration-300"
                >
                  <div className="animated-border-content flex h-full w-full items-center justify-center rounded-2xl font-bold text-white shadow-lg shadow-primary/20">
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
