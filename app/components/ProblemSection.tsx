"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const startTime = performance.now();
      
      const tick = (now: number) => {
        const elapsed = now - startTime;
        // easeOutQuart
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

export default function ProblemSection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="what-it-fixes" className="relative pt-24 pb-0 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-24">
        {/* Layer 1 Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2">
            <span className="block text-white">The problem isn&apos;t your campaign.</span>
            <span className="block text-[#E53E3E]">It&apos;s what happens after.</span>
          </h2>
        </motion.div>

        {/* Three Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group will-change-transform">
            <div className="w-10 h-10 rounded-lg bg-[#E53E3E]/10 flex items-center justify-center mb-6 border border-[#E53E3E]/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#E53E3E]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Leads sit. Nobody calls.</h3>
            <p className="text-[#9CA3AF] leading-relaxed text-sm">
              A lead fills a form at 9pm. Nobody calls until 11am the next day. By then they&apos;ve already spoken to 2 competitors. The average business takes 47 hours to respond. 63% never respond at all.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group will-change-transform">
            <div className="w-10 h-10 rounded-lg bg-[#E53E3E]/10 flex items-center justify-center mb-6 border border-[#E53E3E]/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#E53E3E]">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="23" y2="12" />
                <line x1="23" y1="8" x2="19" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Sales teams call the wrong people.</h3>
            <p className="text-[#9CA3AF] leading-relaxed text-sm">
              Half the leads they call were never going to buy. Wrong numbers. Price checkers. People who are 2 years away from a decision. The team spends all day on calls that go nowhere.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group will-change-transform">
            <div className="w-10 h-10 rounded-lg bg-[#E53E3E]/10 flex items-center justify-center mb-6 border border-[#E53E3E]/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#E53E3E]">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">The serious ones slip through.</h3>
            <p className="text-[#9CA3AF] leading-relaxed text-sm">
              No structured follow-up. No scoring. No way to tell who&apos;s ready and who&apos;s browsing. Good leads go cold because nobody followed up at the right time.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Layer 2: The Deeper Cut */}
      <div className="bg-[#111118]/80 border-t border-[#1E1E2E] py-24 relative overflow-hidden">
        {/* Subtle red gradient glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, #E53E3E 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          
          <div className="overflow-hidden mb-10">
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight will-change-transform"
            >
              And then your client calls you.
            </motion.h3>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
            className="flex flex-col gap-5 mb-10 font-serif"
          >
            <motion.p variants={quoteVariants} className="text-[#9CA3AF] italic text-xl md:text-2xl will-change-transform">&quot;The leads were bad.&quot;</motion.p>
            <motion.p variants={quoteVariants} className="text-[#9CA3AF] italic text-xl md:text-2xl will-change-transform">&quot;We&apos;re not seeing conversions.&quot;</motion.p>
            <motion.p variants={quoteVariants} className="text-[#9CA3AF] italic text-xl md:text-2xl will-change-transform">&quot;Maybe we should try another agency.&quot;</motion.p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Your campaign delivered. Their team dropped the ball. But you&apos;re the one losing the account.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-[#1E1E2E] rounded-xl p-8 bg-[#0A0A0F]/50 max-w-2xl mx-auto mb-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] will-change-transform"
          >
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              <Counter value={22} />% of agency clients churn every year. <br className="hidden md:block"/>
              The number one trigger? <span className="text-[#E53E3E]">Perceived bad lead quality.</span>
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-bold text-xl md:text-2xl tracking-tight"
          >
            You can&apos;t control what happens after the lead comes in. Until now.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
