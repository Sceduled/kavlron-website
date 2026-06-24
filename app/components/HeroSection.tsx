"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Terminal from "./Terminal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Background orbs */}
      <div
        className="orb w-[600px] h-[600px] top-[-200px] left-[-200px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] right-[-100px]"
        style={{ background: "radial-gradient(circle, rgba(229,62,62,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* K logo mark — anchors brand before headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-6 will-change-transform"
        >
          <Image
            src="/logo-k.png"
            alt="Kalvron"
            width={48}
            height={48}
            className="h-12 w-auto"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
            priority
          />
        </motion.div>

        {/* Small tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          id="hero-tag"
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest will-change-transform"
          style={{
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(124,58,237,0.25)",
            color: "#9461FF",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse"
            aria-hidden="true"
          />
          Revenue Recovery Infrastructure
        </motion.div>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.span 
              className="block text-white will-change-transform"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Your clients blame you
            </motion.span>
          </div>
          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.span 
              className="block text-white will-change-transform"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              for bad leads.
            </motion.span>
          </div>
          {/* Line 3 */}
          <div className="overflow-hidden mt-2 pb-2">
            <motion.span 
              className="block text-white will-change-transform"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              The leads were{" "}
              <span
                className="relative inline-block"
                style={{ color: "#E53E3E" }}
              >
                fine.
                {/* Red underline glow */}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, #E53E3E, transparent)",
                    boxShadow: "0 0 8px rgba(229,62,62,0.6)",
                  }}
                  aria-hidden="true"
                />
              </span>
              <span className="text-white">
                {" "}Their team didn&apos;t
              </span>
            </motion.span>
          </div>
          {/* Line 4 */}
          <div className="overflow-hidden">
            <motion.span 
              className="block text-white will-change-transform"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              follow up.
            </motion.span>
          </div>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          id="hero-subtext"
          className="text-base sm:text-lg leading-relaxed max-w-[580px] mx-auto mb-10"
          style={{ color: "#9CA3AF" }}
        >
          Kalvron builds lead handling systems that sit between your client&apos;s
          ad campaign and their sales team. Every lead gets engaged in{" "}
          <span className="text-white font-medium">60 seconds</span>. Qualified
          automatically. Only the serious ones reach the team. Your campaign stops
          getting blamed.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          id="hero-ctas"
          className="flex flex-col sm:flex-row items-center gap-4 will-change-transform"
        >
          <a
            href="#how-it-works"
            id="cta-how-it-works"
            className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 group overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #9461FF 100%)",
              boxShadow: "0 0 0 1px rgba(124,58,237,0.4), 0 4px 24px rgba(124,58,237,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 1px rgba(124,58,237,0.6), 0 8px 32px rgba(124,58,237,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 1px rgba(124,58,237,0.4), 0 4px 24px rgba(124,58,237,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            See How It Works
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#partner"
            id="cta-partner"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.03)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Partner With Us
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -3, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 1.3 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.3 } 
          }}
          className="will-change-transform mt-4"
        >
          <Terminal />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
