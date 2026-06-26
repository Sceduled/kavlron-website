export default function ProblemSection() {
  return (
    <section
      id="what-it-fixes"
      className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Layer 1: Problem headline */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
            The problem isn&apos;t your campaign.
            <br />
            <span className="text-text-muted">
              It&apos;s <span className="text-accent-amber">what happens after</span>.
            </span>
          </h2>
        </div>

        {/* Layer 1: Three cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col bg-surface-card border border-border p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-amber/10 text-accent-amber">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Leads sit. Nobody calls.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              A lead fills a form at 9pm. Nobody calls until 11am the next day.
              By then they&apos;ve already spoken to 2 competitors. The average
              business takes 47 hours to respond. 63% never respond at all.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-surface-card border border-border p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-amber/10 text-accent-amber">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Sales teams call the wrong people.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Half the leads they call were never going to buy. Wrong numbers.
              Price checkers. People who are 2 years away from a decision. The
              team spends all day on calls that go nowhere.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-surface-card border border-border p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-amber/10 text-accent-amber">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              The serious ones slip through.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              No structured follow-up. No scoring. No way to tell who&apos;s
              ready and who&apos;s browsing. Good leads go cold because nobody
              followed up at the right time.
            </p>
          </div>
        </div>

        {/* Layer 2: The deeper cut */}
        <div className="mt-24 border border-border bg-surface p-10 md:p-16">
          <div className="max-w-4xl">
            <h2 className="mb-10 text-[32px] font-bold tracking-tight text-foreground sm:text-[40px]">
              And then your client calls you.
            </h2>

            <div className="mb-10 flex flex-col gap-4 border-l-2 border-accent-amber/30 pl-6">
              <p className="font-mono text-lg italic text-text-muted">
                &quot;The leads were bad.&quot;
              </p>
              <p className="font-mono text-lg italic text-text-muted">
                &quot;We&apos;re not seeing conversions.&quot;
              </p>
              <p className="font-mono text-lg italic text-text-muted">
                &quot;Maybe we should try another agency.&quot;
              </p>
            </div>

            <p className="mb-12 max-w-2xl text-lg text-text-muted">
              Your campaign delivered. Their team dropped the ball. But
              you&apos;re the one losing the account.
            </p>

            <div className="border-t border-border pt-10">
              <p className="mb-6 text-xl font-medium text-foreground">
                22% of agency clients churn every year. The number one trigger?
                Perceived bad lead quality.
              </p>
              <p className="text-2xl font-bold tracking-tight text-foreground">
                You can&apos;t control what happens after the lead comes in. Until
                now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
