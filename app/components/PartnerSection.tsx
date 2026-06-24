import React from "react";

export default function PartnerSection() {
  return (
    <section id="partner" className="relative py-32 border-t border-[#1E1E2E] overflow-hidden">
      
      {/* Background with purple/indigo gradient overlay */}
      <div className="absolute inset-0 bg-[#0A0A0F]" />
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(10,10,15,0) 60%, rgba(148,97,255,0.05) 100%)"
        }} 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl">
            You bring the clients.<br />
            <span className="text-[#9461FF]">We handle everything else.</span>
          </h2>
        </div>

        <div className="max-w-4xl flex flex-col gap-12">
          
          {/* Point 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E] shadow-[0_4px_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#9461FF]">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Zero operational work</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl">
                You connect us with your client. We build the system, configure it, test it, launch it, and manage it. You don&apos;t touch anything technical.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E] shadow-[0_4px_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#9461FF]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Your service becomes untouchable</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl">
                You&apos;re no longer just the agency that runs ads. You&apos;re the agency that runs ads and makes sure every lead converts. No other agency in your market is offering this.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E] shadow-[0_4px_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#9461FF]">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Recurring revenue on every client</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl">
                Every client you bring in, you earn a share of the ongoing revenue. Not a one-time referral fee. Revenue that comes in every month for as long as the client is live.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A0A0F] border border-[#1E1E2E] shadow-[0_4px_20px_rgba(124,58,237,0.15)] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#9461FF]">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Admin dashboard</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl">
                One login. See all your clients&apos; systems in one place. Lead flow, qualification rates, scores, conversation volumes. You know exactly which client is getting results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
