import { Briefcase, Shield, CircleDollarSign, LayoutDashboard } from "lucide-react";

const partnerFeatures = [
  {
    icon: Briefcase,
    title: "Zero operational work",
    description: "You connect us with your client. We build the system, configure it, test it, launch it, and manage it. You don't touch anything technical."
  },
  {
    icon: CircleDollarSign,
    title: "Recurring revenue on every client",
    description: "Every client you bring in, you earn a share of the ongoing revenue. Not a one-time referral fee. Revenue that comes in every month for as long as the client is live."
  },
  {
    icon: Shield,
    title: "Your service becomes untouchable",
    description: "You're no longer just the agency that runs ads. You're the agency that runs ads and makes sure every lead converts. No other agency in your market is offering this."
  },
  {
    icon: LayoutDashboard,
    title: "Admin dashboard",
    description: "One login. See all your clients' systems in one place. Lead flow, qualification rates, scores, conversation volumes. You know exactly which client is getting results."
  }
];

export default function PartnerSection() {
  const Icon0 = partnerFeatures[0].icon;
  const Icon1 = partnerFeatures[1].icon;
  const Icon2 = partnerFeatures[2].icon;
  const Icon3 = partnerFeatures[3].icon;

  return (
    <section className="bg-background px-6 py-24 lg:px-10 overflow-hidden" id="partner">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[64px] drop-shadow-xl">
            You bring the clients.<br/>
            <span className="text-accent-amber">We handle everything else.</span>
          </h2>
        </div>

        {/* Cinematic Asymmetric HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border/40 relative bg-surface-card/10 backdrop-blur-sm">
          
          {/* Corner Crosshairs */}
          <div className="absolute -top-[14px] -left-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -top-[14px] -right-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -bottom-[14px] -left-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -bottom-[14px] -right-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>

          {/* Top Row */}
          
          {/* Feature 0 - Small Left */}
          <div className="lg:col-span-4 border-b lg:border-r border-border/40 p-8 md:p-10 relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">PRT.01 // OPS</div>
            <div className="h-10 w-10 border border-foreground/30 bg-foreground/10 flex items-center justify-center mb-16">
              <Icon0 className="h-5 w-5 text-foreground" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{partnerFeatures[0].title}</h3>
              <p className="text-text-muted leading-relaxed text-sm font-medium">{partnerFeatures[0].description}</p>
            </div>
          </div>

          {/* Feature 1 - Massive Financial Right */}
          <div className="lg:col-span-8 border-b border-border/40 p-8 md:p-16 relative group overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-accent-amber/50">PRT.02 // REV</div>
            
            {/* Background glowing money element */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[250px] font-mono font-bold text-accent-amber/30 pointer-events-none transition-transform duration-1000 group-hover:scale-110 animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_40px_rgba(212,98,43,0.6)]">
              $
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="h-16 w-16 shrink-0 border border-accent-amber/30 bg-accent-amber/10 flex items-center justify-center">
                <Icon1 className="h-8 w-8 text-accent-amber" />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                  {partnerFeatures[1].title}
                </h3>
                <p className="text-text-muted leading-relaxed font-medium max-w-xl text-lg">
                  {partnerFeatures[1].description}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-accent-amber/50" />
                  <span className="font-mono text-xs text-accent-amber font-bold tracking-widest uppercase">Ongoing Partnership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}

          {/* Feature 2 - Wide Left */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-border/40 p-8 md:p-12 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">PRT.03 // MOAT</div>
            
            {/* Abstract Shield Wireframe */}
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-30 pointer-events-none animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
               <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                 <path d="M50 0 L100 20 L100 60 C100 80 50 100 50 100 C50 100 0 80 0 60 L0 20 Z" />
               </svg>
            </div>

            <div className="h-12 w-12 border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center mb-10">
              <Icon2 className="h-6 w-6 text-accent-blue" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{partnerFeatures[2].title}</h3>
              <p className="text-text-muted leading-relaxed font-medium max-w-lg">{partnerFeatures[2].description}</p>
            </div>
          </div>

          {/* Feature 3 - Small Right */}
          <div className="lg:col-span-5 p-8 md:p-10 relative group overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">PRT.04 // CTL</div>
            <div className="absolute -left-12 -bottom-12 text-[150px] font-bold text-foreground/20 leading-none font-mono pointer-events-none animate-[pulse_5s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <LayoutDashboard className="w-[300px] h-[300px]" />
            </div>
            
            <div className="relative z-10 mt-16 lg:mt-24">
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                <Icon3 className="h-5 w-5 text-foreground" />
                {partnerFeatures[3].title}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm font-medium">{partnerFeatures[3].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
