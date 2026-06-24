import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClientViewSection from "./components/ClientViewSection";
import BuiltForSection from "./components/BuiltForSection";
import OperationalDeltaSection from "./components/OperationalDeltaSection";
import PartnerSection from "./components/PartnerSection";

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

      <ClientViewSection />
      <BuiltForSection />
      <OperationalDeltaSection />
      <PartnerSection />
    </main>
  );
}
