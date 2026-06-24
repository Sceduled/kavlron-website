"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function ClientViewSection() {
  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="client-view" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-16 max-w-2xl">
          <div className="overflow-hidden pb-2">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight will-change-transform"
            >
              Their sales team stops guessing.
            </motion.h2>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          
          {/* Feature 1 */}
          <motion.div variants={featureVariants} className="flex flex-col md:flex-row gap-5 will-change-transform">
            <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Lead dashboard</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Every lead in one place. Name, phone, requirement, budget, timeline, score, full conversation transcript. Sorted by priority. Hot first.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={featureVariants} className="flex flex-col md:flex-row gap-5 will-change-transform">
            <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Daily WhatsApp summary</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                3 Hot leads to call now. 5 Warm leads to follow up. 12 Cold leads filtered out. Sent to the sales team every morning. No login needed.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={featureVariants} className="flex flex-col md:flex-row gap-5 will-change-transform">
            <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Automatic follow-up</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Leads that ghost get followed up automatically. Leads that say &apos;I&apos;ll think about it&apos; stay in a nurture sequence for up to 12 weeks. No lead is forgotten.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={featureVariants} className="flex flex-col md:flex-row gap-5 will-change-transform">
            <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Dead lead recovery</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Leads that went cold months ago get re-engaged when the timing is right. New message. New angle. Some of the best conversions come from leads everyone else gave up on.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
