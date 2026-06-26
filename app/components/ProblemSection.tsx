import React from "react";

export default function ProblemSection() {
  return (
    <section id="what-it-fixes" className="relative pt-24 pb-0 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-24">
        {/* Layer 1 Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2">
            <span className="block text-white">The problem isn&apos;t your campaign.</span>
            <span className="block text-[#E53E3E]">It&apos;s what happens after.</span>
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group">
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
          </div>

          {/* Card 2 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group">
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
          </div>

          {/* Card 3 */}
          <div className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-8 transition-colors hover:border-[#E53E3E]/30 group">
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
          </div>
        </div>
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
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            And then your client calls you.
          </h3>
          
          <div className="flex flex-col gap-5 mb-10 font-serif">
            <p className="text-[#9CA3AF] italic text-xl md:text-2xl">&quot;The leads were bad.&quot;</p>
            <p className="text-[#9CA3AF] italic text-xl md:text-2xl">&quot;We&apos;re not seeing conversions.&quot;</p>
            <p className="text-[#9CA3AF] italic text-xl md:text-2xl">&quot;Maybe we should try another agency.&quot;</p>
          </div>

          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Your campaign delivered. Their team dropped the ball. But you&apos;re the one losing the account.
          </p>

          <div className="border border-[#1E1E2E] rounded-xl p-8 bg-[#0A0A0F]/50 max-w-2xl mx-auto mb-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              22% of agency clients churn every year. <br className="hidden md:block"/>
              The number one trigger? <span className="text-[#E53E3E]">Perceived bad lead quality.</span>
            </p>
          </div>

          <p className="text-white font-bold text-xl md:text-2xl tracking-tight">
            You can&apos;t control what happens after the lead comes in. Until now.
          </p>
        </div>
      </div>
    </section>
  );
}
