export default function ProblemSection() {
  return (
    <section
      id="what-it-fixes"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Layer 1: Problem headline */}
        <div className="mb-20 drop-shadow-2xl text-center">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[56px] text-shadow-sm">
            The problem isn&apos;t your campaign.
            <br />
            <span className="text-[#D4D4D8]">
              It&apos;s <span className="text-accent-amber drop-shadow-[0_0_15px_rgba(212,98,43,0.8)]">what happens after</span>.
            </span>
          </h2>
        </div>

        {/* Cinematic HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border/40 relative bg-surface-card/10 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Highly Visible Animated Background Grid Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Scanning horizontal laser line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-[ping_4s_ease-in-out_infinite]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-amber/40 shadow-[0_0_10px_rgba(212,98,43,0.8)] animate-[pulse_3s_ease-in-out_infinite]" style={{ transform: "translateY(50vh)" }} />
            {/* Vertical data streams */}
            <div className="absolute left-[30%] top-[-100%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Corner Crosshairs */}
          <div className="absolute -top-[14px] -left-[6px] text-red-500/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">+</div>
          <div className="absolute -top-[14px] -right-[6px] text-red-500/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">+</div>
          <div className="absolute -bottom-[14px] -left-[6px] text-red-500/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">+</div>
          <div className="absolute -bottom-[14px] -right-[6px] text-red-500/80 text-xl font-bold pointer-events-none drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">+</div>

          {/* Card 1 */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/40 p-8 md:p-12 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-red-500/80 uppercase tracking-widest font-bold">ERR.01 // TIMEOUT</div>
            
            {/* Visible Movement: Pulsing Radar Background */}
            <div className="absolute right-0 bottom-0 w-48 h-48 translate-x-1/4 translate-y-1/4 pointer-events-none">
              <div className="absolute inset-0 border-2 border-red-500/20 rounded-full animate-ping" />
              <div className="absolute inset-4 border border-dashed border-red-500/30 rounded-full animate-[spin_4s_linear_infinite]" />
            </div>

            <div className="h-12 w-12 border border-red-500/50 bg-red-500/10 flex items-center justify-center mb-10 relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-red-500">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white relative z-10">
              Leads sit. Nobody calls.
            </h3>
            <p className="text-sm font-medium leading-relaxed text-text-muted relative z-10">
              A lead fills a form at 9pm. Nobody calls until 11am the next day.
              By then they&apos;ve already spoken to 2 competitors. The average
              business takes 47 hours to respond. 63% never respond at all.
            </p>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/40 p-8 md:p-12 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-accent-amber/80 uppercase tracking-widest font-bold">ERR.02 // MISMATCH</div>
            
            {/* Visible Movement: Flowing data lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <div className="w-full h-[1px] bg-accent-amber absolute top-1/4 animate-[translateX_2s_linear_infinite]" />
               <div className="w-full h-[1px] bg-accent-amber absolute top-2/4 animate-[translateX_3s_linear_infinite]" style={{ transform: "translateX(-50%)" }} />
               <div className="w-full h-[1px] bg-accent-amber absolute top-3/4 animate-[translateX_1.5s_linear_infinite]" />
            </div>

            <div className="h-12 w-12 border border-accent-amber/50 bg-accent-amber/10 flex items-center justify-center mb-10 relative z-10 shadow-[0_0_15px_rgba(212,98,43,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-accent-amber">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white relative z-10">
              Sales teams call the wrong people.
            </h3>
            <p className="text-sm font-medium leading-relaxed text-text-muted relative z-10">
              Half the leads they call were never going to buy. Wrong numbers.
              Price checkers. People who are 2 years away from a decision. The
              team spends all day on calls that go nowhere.
            </p>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-3 border-b lg:border-b-0 border-border/40 p-8 md:p-10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-text-muted uppercase tracking-widest">ERR.03 // DROP</div>
            
            <div className="h-12 w-12 border border-foreground/50 bg-foreground/10 flex items-center justify-center mb-10 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-foreground">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-white relative z-10">
              The serious ones slip through.
            </h3>
            <p className="text-sm font-medium leading-relaxed text-text-muted relative z-10">
              No structured follow-up. No scoring. No way to tell who&apos;s
              ready and who&apos;s browsing. Good leads go cold.
            </p>
          </div>

          {/* Bottom Massive Alert Block */}
          <div className="lg:col-span-12 border-t border-border/40 bg-red-950/20 backdrop-blur-md p-10 md:p-16 relative overflow-hidden">
            {/* Highly Visible Animated Background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
               <div className="w-[120%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
               <div className="absolute left-0 top-1/2 w-full h-[1px] bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,1)] animate-[pulse_1s_ease-in-out_infinite]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
              <h2 className="mb-10 text-[32px] font-bold tracking-tighter text-white sm:text-[48px] drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                And then your client calls you.
              </h2>

              <div className="mb-12 flex flex-col sm:flex-row gap-6 md:gap-12 justify-center">
                <div className="border border-red-500/30 bg-red-500/10 px-6 py-4 rounded-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <p className="font-mono text-sm font-bold tracking-widest text-red-400 uppercase">
                    &quot;The leads were bad.&quot;
                  </p>
                </div>
                <div className="border border-red-500/30 bg-red-500/10 px-6 py-4 rounded-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <p className="font-mono text-sm font-bold tracking-widest text-red-400 uppercase">
                    &quot;We're not seeing conversions.&quot;
                  </p>
                </div>
              </div>

              <div className="border-t border-red-500/30 pt-10 w-full max-w-3xl">
                <p className="mb-6 text-xl font-bold text-white tracking-tight">
                  <span className="text-red-500">22% of agency clients churn every year.</span> The number one trigger? Perceived bad lead quality.
                </p>
                <p className="text-xl font-medium text-text-muted">
                  Your campaign delivered. Their team dropped the ball. But you&apos;re the one losing the account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
