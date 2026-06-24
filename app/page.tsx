import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClientViewSection from "./components/ClientViewSection";
import BuiltForSection from "./components/BuiltForSection";
import OperationalDeltaSection from "./components/OperationalDeltaSection";
import InfrastructureSection from "./components/InfrastructureSection";
import TrustSection from "./components/TrustSection";
import PartnerSection from "./components/PartnerSection";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0F]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <HeroSection />

      <ProblemSection />
      <HowItWorksSection />
      <ClientViewSection />
      <BuiltForSection />
      <OperationalDeltaSection />
      <InfrastructureSection />
      <TrustSection />
      <PartnerSection />
      <FaqSection />
    </main>
  );
}
