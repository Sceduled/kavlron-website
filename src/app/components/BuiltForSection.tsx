import { Briefcase, Users, Package, FileText, Truck } from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Marketing/Performance Agencies",
    description: "Agencies running ad campaigns for real estate, education, and other clients. Every lead qualified before it reaches the client's sales team.",
    label: "IND.01 // MKTG"
  },
  {
    icon: Users,
    title: "Recruitment/Staffing Agencies",
    description: "Candidate screening calls, interview scheduling, and the offer-to-joining follow-up that recruiters lose candidates to — automated end to end.",
    label: "IND.02 // RECRUIT"
  },
  {
    icon: Package,
    title: "Distributors & SME Manufacturers",
    description: "Payment reminder ladders, outstanding dues tracking, WhatsApp order-taking. No more chasing dealers for what they owe.",
    label: "IND.03 // DIST"
  },
  {
    icon: FileText,
    title: "CA & Accounting Firms",
    description: "Client document chasing, KYC follow-up, compliance deadline coordination — so filing day isn't a scramble.",
    label: "IND.04 // ACCT"
  },
  {
    icon: Truck,
    title: "Logistics & Fleet Operators",
    description: "Proof-of-delivery chasing, driver coordination, dispatch status updates, synced automatically instead of lost in a WhatsApp thread.",
    label: "IND.05 // LOG"
  }
];

export default function BuiltForSection() {
  return (
    <section className="relative bg-background px-6 py-32 lg:px-10 overflow-hidden">
      
      {/* Abstract Background Topographic / Wireframe Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 animate-[pulse_6s_ease-in-out_infinite]">
        <svg width="100%" height="100%" className="stroke-border">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[64px] drop-shadow-xl text-center">
            Built for businesses <span className="text-foreground">that run on follow-up.</span>
          </h2>
        </div>

        {/* Cinematic Grid */}
        <div className="relative">
          {/* Background architectural connecting lines */}
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-accent-blue/30 hidden lg:block shadow-[0_0_10px_rgba(107,127,163,0.5)]" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-accent-amber/30 hidden lg:block shadow-[0_0_10px_rgba(212,98,43,0.5)]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              // Stagger effect
              const mtClass = index % 3 === 0 ? "" : index % 3 === 1 ? "lg:mt-12" : "lg:mt-24";
              
              // Color themes
              let borderColor = "border-border/40";
              let shadowColor = "shadow-2xl";
              let iconColor = "text-foreground";
              let iconBg = "bg-foreground/10 border-foreground/30";
              let labelColor = "text-text-muted/50";
              let bgClass = "bg-background/90";
              let glowColor = "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]";

              if (index % 3 === 1) {
                borderColor = "border-accent-blue/30";
                shadowColor = "shadow-[0_0_40px_rgba(107,127,163,0.1)]";
                iconColor = "text-accent-blue";
                iconBg = "bg-accent-blue/10 border-accent-blue/30";
                labelColor = "text-accent-blue/50";
                bgClass = "bg-surface-card/90";
                glowColor = "drop-shadow-[0_0_15px_rgba(107,127,163,0.4)]";
              } else if (index % 3 === 2) {
                borderColor = "border-accent-amber/30";
                shadowColor = "shadow-[0_0_40px_rgba(212,98,43,0.1)]";
                iconColor = "text-accent-amber";
                iconBg = "bg-accent-amber/10 border-accent-amber/30";
                labelColor = "text-accent-amber/50";
                glowColor = "drop-shadow-[0_0_15px_rgba(212,98,43,0.4)]";
              }

              return (
                <div key={index} className={`border ${borderColor} ${bgClass} backdrop-blur-md p-8 md:p-10 relative group overflow-hidden ${shadowColor} ${mtClass} transition-transform duration-500 hover:-translate-y-2`}>
                  <div className={`absolute top-0 right-0 p-3 font-mono text-[10px] ${labelColor} uppercase tracking-widest`}>{ind.label}</div>
                  
                  <div className={`absolute -right-8 -bottom-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700 animate-[pulse_4s_ease-in-out_infinite] ${glowColor}`}>
                    <Icon className="w-64 h-64" />
                  </div>

                  <div className={`h-14 w-14 border ${iconBg} flex items-center justify-center mb-10`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{ind.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium">{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
