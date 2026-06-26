export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl relative z-10">
        <h2 className="mb-24 text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[64px] drop-shadow-2xl text-shadow-sm text-center">
          One system. From lead to{" "}
          <br className="hidden sm:block" />
          <span className="text-accent-amber drop-shadow-[0_0_20px_rgba(212,98,43,0.5)]">qualified conversation</span>.
        </h2>

        {/* Cinematic HUD Timeline */}
        <div className="relative border border-border/40 bg-background/80 p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Corner Crosshairs */}
          <div className="absolute -top-[14px] -left-[6px] text-accent-blue/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(107,127,163,0.8)]">+</div>
          <div className="absolute -top-[14px] -right-[6px] text-accent-blue/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(107,127,163,0.8)]">+</div>
          <div className="absolute -bottom-[14px] -left-[6px] text-accent-blue/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(107,127,163,0.8)]">+</div>
          <div className="absolute -bottom-[14px] -right-[6px] text-accent-blue/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(107,127,163,0.8)]">+</div>

          {/* Highly Visible Animated Data Pipeline */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border/40 hidden md:block -translate-y-1/2 overflow-hidden">
             {/* Data packet traveling left to right constantly */}
             <div className="w-[100px] h-full bg-gradient-to-r from-transparent via-accent-blue to-transparent shadow-[0_0_15px_rgba(107,127,163,1)] animate-[translateX_3s_linear_infinite]" style={{ transform: "translateX(-100%)", animation: "travel 2.5s linear infinite" }} />
             <style dangerouslySetInnerHTML={{__html: `
               @keyframes travel {
                 0% { transform: translateX(-100%); }
                 100% { transform: translateX(100vw); }
               }
             `}} />
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-4 md:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-start md:items-center group">
              <div className="mb-8 h-16 w-16 border border-accent-blue/50 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(107,127,163,0.3)]">
                {/* Visible Spin Animation */}
                <div className="absolute inset-0 border border-dashed border-accent-blue/60 animate-[spin_5s_linear_infinite]" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2" strokeLinecap="square" className="relative z-10">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </div>
              <div className="md:text-center">
                <div className="font-mono text-xs font-bold text-accent-blue/80 tracking-widest uppercase mb-3">Phase . 01</div>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
                  Lead comes in
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">
                  From any source. Meta ad, Google ad, website form. Day or night.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-start md:items-center group">
              <div className="mb-8 h-16 w-16 border border-accent-amber/50 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(212,98,43,0.3)]">
                {/* Visible Pulse Animation */}
                <div className="absolute inset-0 border-2 border-accent-amber/60 animate-[ping_2s_ease-in-out_infinite]" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-amber)" strokeWidth="2" strokeLinecap="square" className="relative z-10">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="md:text-center">
                <div className="font-mono text-xs font-bold text-accent-amber/80 tracking-widest uppercase mb-3">Phase . 02</div>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
                  Engaged in 60s
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">
                  The system reaches out on WhatsApp or calls the lead immediately. No human needed.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-start md:items-center group">
              <div className="mb-8 h-16 w-16 border border-accent-blue/50 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(107,127,163,0.3)]">
                {/* Visible Spin Animation Reverse */}
                <div className="absolute inset-0 border border-dashed border-accent-blue/60 animate-[spin_3s_linear_infinite_reverse]" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2" strokeLinecap="square" className="relative z-10">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </div>
              <div className="md:text-center">
                <div className="font-mono text-xs font-bold text-accent-blue/80 tracking-widest uppercase mb-3">Phase . 03</div>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
                  Qualified
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">
                  A real conversation. Budget, timeline, requirement, intent. One question at a time.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-start md:items-center group">
              <div className="mb-8 h-16 w-16 border border-foreground/50 bg-background flex items-center justify-center relative shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {/* Visible Scaling Target */}
                <div className="absolute inset-0 border-2 border-foreground/30 rounded-full animate-pulse" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="relative z-10 text-foreground">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="md:text-center">
                <div className="font-mono text-xs font-bold text-foreground/80 tracking-widest uppercase mb-3">Phase . 04</div>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
                  Only serious leads
                </h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">
                  Scored as Hot, Warm, or Cold. Hot leads get pushed to the sales team instantly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
