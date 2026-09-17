import TerminalAnimation from "./components/TerminalAnimation";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PartnerSection from "./components/PartnerSection";
import BuiltForSection from "./components/BuiltForSection";
import OperationalDeltaSection from "./components/OperationalDeltaSection";
import InfrastructureSection from "./components/InfrastructureSection";
import TrustSection from "./components/TrustSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import BackgroundVideo from "./components/BackgroundVideo";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans antialiased text-foreground selection:bg-accent-amber selection:text-white">
      {/* ─── Global Fixed Background Video ─── */}
      <BackgroundVideo />

      {/* ─── Navigation ─── */}
      <nav className="absolute top-0 left-0 right-0 z-50 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo-letter.png" alt="Kalvron Logo" className="h-12 w-auto drop-shadow-md" />
              <span className="text-2xl font-bold tracking-tight text-white drop-shadow-md text-shadow-sm">
                Kalvron
              </span>
            </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <a
                href="#how-it-works"
                className="text-sm font-bold tracking-wide text-white drop-shadow-md text-shadow-sm transition-colors hover:text-accent-amber"
              >
                How It Works
              </a>
              <a
                href="#what-it-fixes"
                className="text-sm font-bold tracking-wide text-white drop-shadow-md text-shadow-sm transition-colors hover:text-accent-amber"
              >
                What It Fixes
              </a>
              <a
                href="#partner"
                className="inline-flex h-10 items-center justify-center border border-border/50 bg-background/50 backdrop-blur-md px-6 text-sm font-bold tracking-wide text-white shadow-xl transition-colors hover:bg-white hover:text-background"
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
      <section className="relative z-10 flex min-h-[90vh] flex-col justify-center px-6 pt-32 pb-24 lg:px-10 overflow-hidden">
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
              Follow-Up Infrastructure
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-[900px] drop-shadow-2xl">
            <h1 className="text-[56px] leading-[1.05] font-bold tracking-tighter text-white sm:text-[72px] lg:text-[88px] text-shadow-sm">
              Your business doesn&apos;t need more people.
              <br />
              <span className="block mt-4 text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-[#D4D4D8]">
                It needs functions that run themselves.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-12 flex max-w-[640px] gap-6 drop-shadow-xl">
            <div className="hidden sm:block w-12 h-[2px] bg-border mt-3 shrink-0" />
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-xl font-medium leading-relaxed text-[#D4D4D8] drop-shadow-md text-shadow-sm">
                Sales, collections, client health, reporting. Currently held together by whoever remembers to check. We replace that with <span className="text-accent-amber drop-shadow-md">agents that run continuously and hand off to each other</span>, no person required to keep the process moving.
              </p>
              <p className="text-lg font-medium leading-relaxed text-white drop-shadow-md text-shadow-sm sm:text-xl">
                Kalvron builds autonomous AI systems that own a business function end to end, not a single task. They read live state across your tools, decide what needs to happen, act on it, and only surface what actually needs a human judgment call.
              </p>
            </div>
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
              Talk to Us
            </a>
          </div>

          {/* Terminal Animation Heading */}
          <div className="mt-32 mb-4 text-center drop-shadow-2xl relative z-10">
            <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.1] tracking-tighter text-white text-shadow-sm">
              Here&apos;s what one hour looks like
              <br />
              <span className="text-[#D4D4D8]">
                when the system is <span className="text-accent-amber drop-shadow-[0_0_15px_rgba(212,98,43,0.8)]">running</span>:
              </span>
            </h2>
          </div>

          {/* Terminal Animation */}
          <TerminalAnimation />
        </div>
      </section>

      {/* Problem Section (Phase 2) */}
      <FadeIn delay={100}>
        <ProblemSection />
      </FadeIn>

      {/* How It Works Section (Phase 3) */}
      <FadeIn delay={100}>
        <HowItWorksSection />
      </FadeIn>

      {/* Smooth Transition Into Solid Block */}
      <div className="relative z-10 w-full h-48 sm:h-64 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      {/* Partner Section (Phase 4) */}
      <FadeIn delay={100}>
        <PartnerSection />
      </FadeIn>

      {/* Built For Section (Phase 5) */}
      <FadeIn delay={100}>
        <BuiltForSection />
      </FadeIn>

      {/* Operational Delta Section (Phase 5) */}
      <FadeIn delay={100}>
        <OperationalDeltaSection />
      </FadeIn>

      {/* Infrastructure Section (Phase 6) */}
      <FadeIn delay={100}>
        <InfrastructureSection />
      </FadeIn>

      {/* Trust Section (Phase 6) */}
      <FadeIn delay={100}>
        <TrustSection />
      </FadeIn>

      {/* FAQ Section (Phase 6) */}
      <FadeIn delay={100}>
        <FaqSection />
      </FadeIn>

      {/* Smooth Transition Out of Solid Block */}
      <div className="relative z-10 w-full h-48 sm:h-64 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      {/* CTA Section (Phase 7) */}
      <FadeIn delay={100}>
        <CtaSection />
      </FadeIn>

      {/* Footer */}
      <Footer />
    </div>
  );
}
