export default function CtaSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 lg:px-10 overflow-hidden">
      {/* Very subtle background distinction */}
      <div className="absolute inset-0 bg-accent-blue/5 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
            Revenue is leaking.
            <br />
            <span className="text-accent-blue">Let&apos;s find exactly where.</span>
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-text-muted">
            In 20 minutes, we map your current sales process and identify the
            exact point where leads stop converting. No pitch. Just the
            diagnosis.
          </p>
        </div>

        {/* Form Card */}
        <div className="border border-border bg-surface-card p-8 md:p-10">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-border bg-background px-4 py-3 text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-border bg-background px-4 py-3 text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-border bg-background px-4 py-3 text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="border border-border bg-background px-4 py-3 text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                I am a...
              </label>
              <select
                id="role"
                className="border border-border bg-background px-4 py-3 text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors appearance-none"
              >
                <option value="agency">Marketing agency looking to partner</option>
                <option value="business">Business looking to fix lead handling</option>
              </select>
            </div>

            <button
              type="button"
              className="mt-4 w-full bg-accent-blue py-4 text-center font-bold tracking-wide text-background transition-colors hover:bg-white"
            >
              Let&apos;s Talk →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
