import TerminalAnimation from "./components/TerminalAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
              Kalvron
            </a>

            {/* Nav Links */}
            <div className="hidden items-center gap-10 md:flex">
              <a
                href="#how-it-works"
                className="text-sm text-text-muted transition-colors duration-200 hover:text-foreground"
              >
                How It Works
              </a>
              <a
                href="#what-it-fixes"
                className="text-sm text-text-muted transition-colors duration-200 hover:text-foreground"
              >
                What It Fixes
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-muted hover:text-foreground"
              aria-label="Open menu"
              id="mobile-menu-toggle"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 pb-20 lg:px-10">
        {/* Background watermark */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden">
          <div className="watermark-text whitespace-nowrap pl-4">
            Kalvron
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Tag */}
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-dim">
              Revenue Recovery Infrastructure
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your clients blame you
              <br />
              for bad leads.
              <br />
              <span className="mt-2 block text-text-muted">
                The leads were{" "}
                <span className="text-accent-red font-normal">fine</span>. Their
                team didn&apos;t follow up.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-8 max-w-xl text-base leading-7 text-text-muted lg:text-lg lg:leading-8">
            — Kalvron builds lead handling systems that sit between your
            client&apos;s ad campaign and their sales team. Every lead gets
            engaged in 60 seconds. Qualified automatically. Only the serious
            ones reach the team.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-accent-purple px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-purple-hover hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]"
              id="cta-how-it-works"
            >
              See How It Works
              <span className="ml-2">&#8594;</span>
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-surface-hover"
              id="cta-partner"
            >
              Partner With Us
            </a>
          </div>

          {/* Terminal Animation */}
          <TerminalAnimation />
        </div>
      </section>

      {/* Placeholder sections for anchor targets */}
      <section id="how-it-works" className="min-h-screen" />
      <section id="what-it-fixes" className="min-h-screen" />
      <section id="partner" className="min-h-screen" />
    </div>
  );
}
