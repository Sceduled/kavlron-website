"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the agency partnership work?",
      a: "You connect us with your clients. We build and manage the system for each one. You earn a share of the recurring revenue on every client. You do zero technical work."
    },
    {
      q: "What does it cost per client?",
      a: "Setup starts at ₹5,000 per client. Monthly costs depend on lead volume and whether the system uses WhatsApp, voice calls, or both. We'll give you an exact breakdown before anything starts."
    },
    {
      q: "How is this different from a CRM or chatbot?",
      a: "A CRM stores leads. A chatbot answers FAQs. This system actively qualifies every lead through a real conversation, scores them, and routes only the serious ones to the sales team. It's not a tool the client manages. We handle everything."
    },
    {
      q: "Does this replace the sales team?",
      a: "No. It makes them more effective. The system handles the filtering and follow-up. The sales team only talks to people who are ready to buy."
    },
    {
      q: "How quickly does it go live?",
      a: "First client takes 2-3 days. Every client after that takes 2-4 hours."
    },
    {
      q: "What if the agent says the wrong thing?",
      a: "Every system runs through testing before going live. The qualification flow is built specifically for that industry and reviewed before launch. We monitor and optimize based on real conversation data."
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="faq" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-16 overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight will-change-transform"
          >
            Frequently asked questions.
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`border border-[#1E1E2E] rounded-xl overflow-hidden transition-colors duration-300 will-change-transform ${
                openIndex === index ? "bg-[#111118] border-[#7C3AED]/30" : "bg-transparent hover:border-[#333344]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? "border-[#7C3AED] bg-[#7C3AED]/10 text-[#7C3AED] rotate-180" : "border-[#4B5563] text-[#9CA3AF]"
                }`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#1E1E2E]/50">
                  <p className="text-[#9CA3AF] text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
