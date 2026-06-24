"use client";

import React, { useState } from "react";

export default function OperationalDeltaSection() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without");

  return (
    <section id="operational-delta" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The gap between what&apos;s happening<br className="hidden md:block"/> and what should be.
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1 bg-[#111118] border border-[#1E1E2E] rounded-xl">
            <button
              onClick={() => setActiveTab("without")}
              className={`relative px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "without"
                  ? "text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              {activeTab === "without" && (
                <div 
                  className="absolute inset-0 bg-[#E53E3E]/10 border border-[#E53E3E]/20 rounded-lg pointer-events-none"
                  aria-hidden="true" 
                />
              )}
              Without Kalvron
            </button>
            <button
              onClick={() => setActiveTab("with")}
              className={`relative px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "with"
                  ? "text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              {activeTab === "with" && (
                <div 
                  className="absolute inset-0 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-lg pointer-events-none"
                  aria-hidden="true" 
                />
              )}
              With Kalvron
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          
          {/* Without Kalvron Content */}
          <div 
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "without" ? "opacity-100 z-10 translate-y-0" : "opacity-0 -z-10 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#E53E3E]">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Delayed response</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Lead comes in. Hours pass. They&apos;ve already moved on.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#E53E3E]">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Human bottleneck</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Qualification depends on who&apos;s working that day. Inconsistency is built into the process.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#E53E3E]">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Generic follow-up</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Every lead gets the same message. Doesn&apos;t matter what they said or what they need.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#E53E3E]">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Revenue leak</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">The leads were real. The intent was there. The system just didn&apos;t act on it fast enough.</p>
                </div>
              </div>

            </div>
          </div>

          {/* With Kalvron Content */}
          <div 
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "with" ? "opacity-100 z-10 translate-y-0" : "opacity-0 -z-10 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5 shadow-[0_0_15px_rgba(124,58,237,0.05)]">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#10B981]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">60-second response</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Every lead engaged instantly. Before they talk to anyone else.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5 shadow-[0_0_15px_rgba(124,58,237,0.05)]">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#10B981]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Intelligent qualification</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Context-aware. Reads what the lead said, not a script. Scores based on real intent signals.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5 shadow-[0_0_15px_rgba(124,58,237,0.05)]">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#10B981]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Adaptive follow-up</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Each lead gets a different sequence based on their answers, their timing, and their behaviour.</p>
                </div>
              </div>

              <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 flex gap-5 shadow-[0_0_15px_rgba(124,58,237,0.05)]">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#10B981]">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Revenue recovered</h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">Same leads. Same ad spend. More qualified conversations. More revenue from the pipeline you already paid for.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
