import React from "react";

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              This isn&apos;t a tool.<br />
              <span className="text-[#9CA3AF]">It&apos;s infrastructure that runs every hour.</span>
            </h2>
            
            <p className="text-[#9CA3AF] text-base md:text-lg max-w-[600px] leading-relaxed mb-12">
              Unlike manual follow-up or automation templates, agentic systems don&apos;t sleep, don&apos;t miss signals, and don&apos;t send the same message to everyone. They act on what they know about each lead at the moment that matters.
            </p>

            <div className="flex flex-col gap-8">
              
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Not dependent on memory or motivation</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    No lead falls through because someone forgot. No follow-up is delayed because the team is busy. The system holds the process.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Gets sharper with every cycle</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    Each interaction feeds back into the system. Response patterns improve. Qualification tightens. Revenue recovery compounds over time.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#7C3AED]">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom-coded per client</h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    Every deployment is built for that specific business, their industry, their language, their qualification criteria. Can&apos;t be replaced by a subscription.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Visual - Circular Loop */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center items-center relative">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              
              {/* Spinning subtle dashed circle */}
              <svg 
                viewBox="0 0 400 400" 
                className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
                aria-hidden="true"
              >
                <circle 
                  cx="200" 
                  cy="200" 
                  r="160" 
                  fill="none" 
                  stroke="#1E1E2E" 
                  strokeWidth="2" 
                  strokeDasharray="8 8" 
                />
                {/* Arrow heads on the circle */}
                <path d="M 360 200 L 370 210 L 350 210 Z" fill="#7C3AED" transform="rotate(0, 200, 200)" />
                <path d="M 360 200 L 370 210 L 350 210 Z" fill="#7C3AED" transform="rotate(90, 200, 200)" />
                <path d="M 360 200 L 370 210 L 350 210 Z" fill="#7C3AED" transform="rotate(180, 200, 200)" />
                <path d="M 360 200 L 370 210 L 350 210 Z" fill="#7C3AED" transform="rotate(270, 200, 200)" />
              </svg>

              {/* Central Glowing Orb */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#7C3AED]/10 blur-[40px] animate-[pulse_4s_ease-in-out_infinite]"
              />

              {/* Loop Items (Fixed positions) */}
              {/* Top - Execution */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-[#111118] border border-[#7C3AED]/30 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.1)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span className="text-white text-sm font-medium">Execution</span>
              </div>

              {/* Right - Data */}
              <div className="absolute top-1/2 right-[0%] -translate-y-1/2 bg-[#111118] border border-[#1E1E2E] px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-[#9CA3AF] text-sm font-medium">Data</span>
              </div>

              {/* Bottom - Optimization */}
              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-[#111118] border border-[#1E1E2E] px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-[#9CA3AF] text-sm font-medium">Optimization</span>
              </div>

              {/* Left - Better Output */}
              <div className="absolute top-1/2 left-[0%] -translate-y-1/2 bg-[#111118] border border-[#1E1E2E] px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-[#9CA3AF] text-sm font-medium">Better Output</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
