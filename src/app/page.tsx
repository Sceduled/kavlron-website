import TerminalAnimation from "./components/TerminalAnimation";
import ProblemSection from "./components/ProblemSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background selection:bg-accent-amber selection:text-white">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              {/* K logo mark - using the cold steel blue accent */}
              <div className="flex h-8 w-8 items-center justify-center bg-accent-blue/10">
                <span className="font-mono text-sm font-bold text-accent-blue">K</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Kalvron
              </span>
            </a>

            {/* Nav Links */}
            <div className="hidden items-center gap-12 md:flex">
              <a
                href="#how-it-works"
                className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-foreground"
              >
                How It Works
              </a>
              <a
                href="#what-it-fixes"
                className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-foreground"
              >
                What It Fixes
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center border border-border px-6 py-2.5 text-sm font-bold text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-muted hover:text-foreground"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
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
      <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-32 pb-24 lg:px-10 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[center_20%] opacity-80"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Background watermark */}
        <div className="pointer-events-none absolute bottom-[-5%] left-0 right-0 select-none overflow-hidden z-0">
          <div className="watermark-text whitespace-nowrap pl-4">
            Kalvron
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col justify-center">
          {/* Tag */}
          <div className="mb-10 inline-flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-text-dim rounded-full" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-dim">
              Revenue Recovery Infrastructure
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-[900px] drop-shadow-2xl">
            <h1 className="text-[56px] leading-[1.05] font-bold tracking-tighter text-white sm:text-[72px] lg:text-[88px] text-shadow-sm">
              Your clients blame you for bad leads.
              <br />
              <span className="block mt-4 text-[#D4D4D8]">
                The leads were{" "}
                <span className="text-accent-amber drop-shadow-md">fine</span>. Their team didn&apos;t follow up.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-12 flex max-w-[640px] gap-6 drop-shadow-xl">
            <div className="hidden sm:block w-12 h-[2px] bg-border mt-3 shrink-0" />
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              Kalvron builds lead handling systems that sit between your
              client&apos;s ad campaign and their sales team. Every lead gets
              engaged in 60 seconds. Qualified automatically. Only the serious
              ones reach the team.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-accent-amber px-8 py-4 text-sm font-bold tracking-wide text-background transition-colors hover:bg-white"
            >
              See How It Works
              <span className="ml-3 font-mono">→</span>
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-surface"
            >
              Partner With Us
            </a>
          </div>

          {/* Terminal Animation */}
          <TerminalAnimation />
        </div>
      </section>

      {/* Problem Section (Phase 2) */}
      <ProblemSection />

      {/* Placeholder sections for anchor targets */}
      <section id="how-it-works" className="min-h-screen bg-surface" />
      <section id="partner" className="min-h-screen bg-surface-card" />
    </div>
  );
}
