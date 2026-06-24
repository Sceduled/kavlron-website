"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function HowItWorksSection() {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="how-it-works" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight will-change-transform"
            >
              One system. From lead to qualified conversation.
            </motion.h2>
          </div>
        </div>

        {/* 4-Step Flow */}
        <div className="relative max-w-5xl mx-auto mb-16">
          
          {/* Mobile connecting line (Animated) */}
          <div className="md:hidden absolute left-[31px] top-[40px] bottom-[40px] w-px">
            <motion.svg 
              className="w-full h-full" 
              preserveAspectRatio="none"
            >
              <motion.line 
                x1="0" y1="0" x2="0" y2="100%" 
                stroke="#1E1E2E" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
          
          {/* Desktop connecting line (Animated) */}
          <div className="hidden md:block absolute top-[31px] left-[10%] right-[10%] h-px">
            <motion.svg 
              className="w-full h-full" 
              preserveAspectRatio="none"
            >
              <motion.line 
                x1="0" y1="0" x2="100%" y2="0" 
                stroke="#1E1E2E" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              />
            </motion.svg>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10"
          >
            
            {/* Step 1 */}
            <motion.div variants={stepVariants} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 will-change-transform">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0A0F] border-2 border-[#1E1E2E] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(10,10,15,1)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#7C3AED]">
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Lead comes in</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[200px] md:mx-auto">
                  From any source. Meta ad, Google ad, website form, portal listing. Day or night.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={stepVariants} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 will-change-transform">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0A0F] border-2 border-[#1E1E2E] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(10,10,15,1)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#7C3AED]">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Engaged in 60 seconds</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[200px] md:mx-auto">
                  The system reaches out on WhatsApp or calls the lead immediately. No human needed. No delays.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={stepVariants} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 will-change-transform">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0A0F] border-2 border-[#1E1E2E] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(10,10,15,1)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#7C3AED]">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Qualified automatically</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[200px] md:mx-auto">
                  A real conversation. Not a chatbot menu. Budget, timeline, requirement, intent. One question at a time. In whatever language the lead speaks.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={stepVariants} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 will-change-transform">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0A0F] border-2 border-[#1E1E2E] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(10,10,15,1)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#7C3AED]">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Only serious leads reach the team</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[200px] md:mx-auto">
                  Scored as Hot, Warm, or Cold. Hot leads get pushed to the sales team instantly with a full summary. Cold leads are filtered out.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors duration-200 text-sm font-medium group"
          >
            See the full system architecture
            <svg 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
