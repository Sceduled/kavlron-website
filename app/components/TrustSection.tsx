"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function TrustSection() {
  const logos = [
    { name: "IIL", size: "text-2xl font-bold tracking-widest" },
    { name: "IZee Business School", size: "text-lg font-serif italic" },
    { name: "Drootle Media", size: "text-xl font-medium tracking-tight" },
    { name: "Darvyn Digital", size: "text-xl font-mono uppercase" },
  ];

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="trust" className="relative py-20 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 will-change-transform"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#9CA3AF]">
            Trusted by teams recovering revenue at scale
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              variants={logoVariants}
              className="flex items-center justify-center px-8 py-6 bg-[#111118] border border-[#1E1E2E] rounded-xl min-w-[200px] h-24 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 will-change-transform"
            >
              <span className={`${logo.size} text-white`}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
