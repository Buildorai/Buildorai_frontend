// === Landing: Navbar component ===
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-8 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white font-heading">
          <div className="rounded-lg bg-primary p-1 text-white">
            <Terminal size={24} />
          </div>
          <span>Buildor<span className="text-primary">ai</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full border-b border-white/10 bg-background/95 p-8 text-center backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full bg-gradient-to-r from-primary to-primary-dark py-4 font-bold text-white shadow-lg shadow-primary/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
