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
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0F]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      
      <FadeIn><HeroSection /></FadeIn>
      <FadeIn><ProblemSection /></FadeIn>
      <FadeIn><HowItWorksSection /></FadeIn>
      <FadeIn><ClientViewSection /></FadeIn>
      <FadeIn><BuiltForSection /></FadeIn>
      <FadeIn><OperationalDeltaSection /></FadeIn>
      <FadeIn><InfrastructureSection /></FadeIn>
      <FadeIn><TrustSection /></FadeIn>
      <FadeIn><PartnerSection /></FadeIn>
      <FadeIn><FaqSection /></FadeIn>
      <FadeIn><CtaSection /></FadeIn>
      
      <Footer />
    </main>
  );
}
