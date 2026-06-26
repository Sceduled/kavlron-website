export default function BuiltForSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-20 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px] text-center">
          Built for businesses that{" "}
          <span className="text-text-muted">run on leads.</span>
        </h2>

        {/* 3 cards side by side */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col border border-border bg-background p-10 transition-colors hover:border-text-dim">
            <div className="mb-8 flex h-14 w-14 items-center justify-center bg-accent-blue/10 text-accent-blue">
              {/* Graduation cap / book icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Education
            </h3>
            <p className="text-base leading-relaxed text-text-muted">
              Colleges, schools, coaching institutes. Admission leads qualified
              automatically. Counselors only call students who are ready to
              enroll.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-border bg-background p-10 transition-colors hover:border-text-dim">
            <div className="mb-8 flex h-14 w-14 items-center justify-center bg-accent-blue/10 text-accent-blue">
              {/* Building/house icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Real Estate
            </h3>
            <p className="text-base leading-relaxed text-text-muted">
              Builders, developers, sales teams. Buyer leads qualified for
              budget, timeline, location, and intent. Agents only talk to
              serious buyers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col border border-border bg-background p-10 transition-colors hover:border-text-dim">
            <div className="mb-8 flex h-14 w-14 items-center justify-center bg-accent-blue/10 text-accent-blue">
              {/* Briefcase icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              Any Lead-Gen Business
            </h3>
            <p className="text-base leading-relaxed text-text-muted">
              Healthcare, home services, D2C, professional services. If your
              client runs ads and has a sales team that calls leads, this system
              works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
