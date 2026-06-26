export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 lg:px-10 overflow-hidden"
    >
      {/* Subtle background differentiation for Partner section */}
      <div className="absolute inset-0 bg-accent-blue/5 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <h2 className="mb-20 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px] text-center">
          You bring the clients.
          <br />
          <span className="text-text-muted">We handle everything else.</span>
        </h2>

        {/* 4 points in a vertical stack */}
        <div className="flex flex-col gap-8">
          {/* Point 1 */}
          <div className="flex flex-col md:flex-row gap-6 border border-border bg-surface-card p-8 md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Zero operational work
              </h3>
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                You connect us with your client. We build the system, configure
                it, test it, launch it, and manage it. You don&apos;t touch
                anything technical.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col md:flex-row gap-6 border border-border bg-surface-card p-8 md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Your service becomes untouchable
              </h3>
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                You&apos;re no longer just the agency that runs ads. You&apos;re
                the agency that runs ads and makes sure every lead converts. No
                other agency in your market is offering this.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col md:flex-row gap-6 border border-border bg-surface-card p-8 md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Recurring revenue on every client
              </h3>
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                Every client you bring in, you earn a share of the ongoing
                revenue. Not a one-time referral fee. Revenue that comes in
                every month for as long as the client is live.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="flex flex-col md:flex-row gap-6 border border-border bg-surface-card p-8 md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent-amber/10 text-accent-amber border border-accent-amber/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Admin dashboard
              </h3>
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                One login. See all your clients&apos; systems in one place. Lead
                flow, qualification rates, scores, conversation volumes. You
                know exactly which client is getting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
