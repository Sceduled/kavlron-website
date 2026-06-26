export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-20 text-center text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
          One system. From lead to{" "}
          <span className="text-accent-amber">qualified conversation</span>.
        </h2>

        {/* The 4-step horizontal flow */}
        <div className="relative flex flex-col gap-12 md:flex-row md:gap-6 lg:gap-8">
          {/* Connecting line (Desktop) */}
          <div className="absolute left-[10%] top-6 hidden h-[2px] w-[80%] border-t-2 border-dashed border-border md:block" />
          
          {/* Connecting line (Mobile) */}
          <div className="absolute bottom-[10%] left-6 top-[10%] hidden w-[2px] border-l-2 border-dashed border-border sm:block md:hidden" />

          {/* Step 1 */}
          <div className="relative flex flex-1 flex-col items-start md:items-center">
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center bg-background border border-border z-10">
              {/* Signal/antenna icon using steel blue accent for flow */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-blue)"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </div>
            <div className="md:text-center">
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                1. Lead comes in
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                From any source. Meta ad, Google ad, website form, portal
                listing. Day or night.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-1 flex-col items-start md:items-center">
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center bg-background border border-border z-10">
              {/* Clock icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-blue)"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="md:text-center">
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                2. Engaged in 60 seconds
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                The system reaches out on WhatsApp or calls the lead
                immediately. No human needed. No delays.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-1 flex-col items-start md:items-center">
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center bg-background border border-border z-10">
              {/* Filter icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-blue)"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <div className="md:text-center">
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                3. Qualified automatically
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                A real conversation. Not a chatbot menu. Budget, timeline,
                requirement, intent. One question at a time. In whatever
                language the lead speaks.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-1 flex-col items-start md:items-center">
            <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center bg-background border border-border z-10">
              {/* Target/bullseye icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent-blue)"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="md:text-center">
              <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                4. Only serious leads reach the team
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                Scored as Hot, Warm, or Cold. Hot leads get pushed to the sales
                team instantly with a full summary. Cold leads are filtered out.
              </p>
            </div>
          </div>
        </div>

        {/* Link below steps */}
        <div className="mt-20 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center text-sm font-bold tracking-wide text-text-muted transition-colors hover:text-foreground"
          >
            <span className="border-b border-transparent transition-colors group-hover:border-foreground">
              See the full system architecture
            </span>
            <span className="ml-2 font-mono transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
