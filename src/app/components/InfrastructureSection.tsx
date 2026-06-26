export default function InfrastructureSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-surface-card px-6 py-24 lg:px-10 overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="mb-6 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
            This isn&apos;t a tool.
            <br />
            <span className="text-text-muted">
              It&apos;s infrastructure that runs every hour.
            </span>
          </h2>
          <p className="mb-12 max-w-[600px] text-lg leading-relaxed text-text-muted">
            Unlike manual follow-up or automation templates, agentic systems
            don&apos;t sleep, don&apos;t miss signals, and don&apos;t send the
            same message to everyone. They act on what they know about each lead
            at the moment that matters.
          </p>

          <div className="flex flex-col gap-10">
            {/* Point 1 */}
            <div className="flex gap-6">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent-amber" />
              <div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                  Not dependent on memory or motivation
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  No lead falls through because someone forgot. No follow-up is
                  delayed because the team is busy. The system holds the
                  process.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-6">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent-amber" />
              <div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                  Gets sharper with every cycle
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Each interaction feeds back into the system. Response patterns
                  improve. Qualification tightens. Revenue recovery compounds over
                  time.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-6">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent-amber" />
              <div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                  Custom-coded per client
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Every deployment is built for that specific business, their
                  industry, their language, their qualification criteria.
                  Can&apos;t be replaced by a subscription.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Element - CSS driven rotating system loop */}
        <div className="mt-20 flex flex-1 items-center justify-center lg:mt-0">
          <div className="relative flex h-80 w-80 items-center justify-center">
            {/* Outer rotating dashed ring */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-border opacity-50" />
            <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-border opacity-30" />

            {/* Center Core */}
            <div className="relative flex h-24 w-24 animate-[pulse_4s_ease-in-out_infinite] items-center justify-center rounded-full bg-accent-blue/10 border border-accent-blue/30 shadow-[0_0_40px_rgba(107,127,163,0.1)]">
              <div className="h-8 w-8 rounded-full bg-accent-blue" />
            </div>

            {/* Nodes */}
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-accent-amber" />
              <span className="mt-2 font-mono text-xs font-bold tracking-wider text-text-muted">
                EXECUTION
              </span>
            </div>
            <div className="absolute right-0 top-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-foreground" />
              <span className="ml-2 font-mono text-xs font-bold tracking-wider text-text-muted absolute left-4">
                DATA
              </span>
            </div>
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 flex-col items-center">
              <span className="mb-2 font-mono text-xs font-bold tracking-wider text-text-muted">
                OPTIMIZATION
              </span>
              <div className="h-3 w-3 rounded-full bg-accent-blue" />
            </div>
            <div className="absolute left-0 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="mr-2 font-mono text-xs font-bold tracking-wider text-text-muted absolute right-4">
                OUTPUT
              </span>
              <div className="h-3 w-3 rounded-full bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
