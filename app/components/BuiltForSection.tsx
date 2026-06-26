import React from "react";

export default function BuiltForSection() {
  return (
    <section id="built-for" className="relative py-24 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for businesses that run on leads.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 hover:border-[#7C3AED]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7C3AED]">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Colleges, schools, coaching institutes. Admission leads qualified automatically. Counselors only call students who are ready to enroll.
            </p>
          </div>

          {/* Card 2: Real Estate */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 hover:border-[#7C3AED]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7C3AED]">
                <path d="M3 21h18" />
                <path d="M9 8h1" />
                <path d="M9 12h1" />
                <path d="M9 16h1" />
                <path d="M14 8h1" />
                <path d="M14 12h1" />
                <path d="M14 16h1" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real Estate</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Builders, developers, sales teams. Buyer leads qualified for budget, timeline, location, and intent. Agents only talk to serious buyers.
            </p>
          </div>

          {/* Card 3: Any Lead-Gen Business */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 hover:border-[#7C3AED]/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#7C3AED]">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Any Lead-Gen Business</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Healthcare, home services, D2C, professional services. If your client runs ads and has a sales team that calls leads, this system works.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
