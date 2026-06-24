import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0F]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <HeroSection />

      {/* ── Placeholder sections (Phase 2+) ─────────────────────── */}
      <HowItWorksSection />

      <ProblemSection />

      <section
        id="partner"
        className="min-h-screen flex items-center justify-center border-t border-[#1E1E2E]"
      >
        <p className="text-[#4B5563] font-mono text-sm">
          // Partner With Us — coming in Phase 2
        </p>
      </section>
    </main>
  );
}
