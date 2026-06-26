"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "What It Fixes", href: "#what-it-fixes" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-2 group"
          aria-label="Kalvron home"
        >
          {/* Logo mark */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute inset-0 rounded-md bg-[#7C3AED] opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 relative z-10"
              aria-hidden="true"
            >
              <path
                d="M4 4L12 2L20 4V12C20 17 12 22 12 22C12 22 4 17 4 12V4Z"
                stroke="#7C3AED"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#9461FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Kalvron
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            id="nav-partner-cta"
            href="#partner"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#9461FF] transition-all duration-200 overflow-hidden group"
          >
            <span className="relative z-10">Partner With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#9461FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 text-[#9CA3AF] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className={`w-5 flex flex-col gap-1 transition-all duration-200 ${menuOpen ? "gap-0" : ""}`}>
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-px w-5" : "w-5"}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-px w-5" : "w-5"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1E1E2E]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#9461FF] transition-colors w-full"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
}
