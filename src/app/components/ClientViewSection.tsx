export default function ClientViewSection() {
  return (
    <section
      id="client-view"
      className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-20 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
          Their sales team <span className="text-accent-amber">stops guessing</span>.
        </h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex flex-col border border-border bg-surface-card p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-blue/10 text-accent-blue">
              <svg
                width="20"
                height="20"
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
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Lead dashboard
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Every lead in one place. Name, phone, requirement, budget,
              timeline, score, full conversation transcript. Sorted by priority.
              Hot first.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col border border-border bg-surface-card p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-blue/10 text-accent-blue">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Daily WhatsApp summary
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              3 Hot leads to call now. 5 Warm leads to follow up. 12 Cold leads
              filtered out. Sent to the sales team every morning. No login
              needed.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col border border-border bg-surface-card p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-blue/10 text-accent-blue">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Automatic follow-up
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Leads that ghost get followed up automatically. Leads that say
              &apos;I&apos;ll think about it&apos; stay in a nurture sequence for
              up to 12 weeks. No lead is forgotten.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col border border-border bg-surface-card p-8 transition-colors hover:border-text-dim">
            <div className="mb-6 flex h-10 w-10 items-center justify-center bg-accent-blue/10 text-accent-blue">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M2.5 2v6h6M21.5 22v-6h-6" />
                <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2" />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
              Dead lead recovery
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Leads that went cold months ago get re-engaged when the timing is
              right. New message. New angle. Some of the best conversions come
              from leads everyone else gave up on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
