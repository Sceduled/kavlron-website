import { Briefcase, Users, Package, FileText, Truck } from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Marketing/Performance Agencies",
    description: "Currently needs an account coordinator to qualify leads, chase reports, and check campaign status by hand. We run that role as a system instead.",
    label: "IND.01 // MKTG"
  },
  {
    icon: Users,
    title: "Recruitment/Staffing Agencies",
    description: "Currently needs a recruiter's time spent on scheduling and status-chasing instead of placements. We take over everything except the actual judgment calls.",
    label: "IND.02 // RECRUIT"
  },
  {
    icon: Package,
    title: "Distributors & SME Manufacturers",
    description: "Currently needs someone tracking dealer orders, chasing receivables, and reconciling payments by hand. We run that as a standing system instead of a headcount line.",
    label: "IND.03 // DIST"
  },
  {
    icon: FileText,
    title: "CA & Accounting Firms",
    description: "Currently needs a junior associate chasing documents and tracking deadlines across every client. We take that role over end to end.",
    label: "IND.04 // ACCT"
  },
  {
    icon: Truck,
    title: "Logistics & Fleet Operators",
    description: "Currently needs a dispatcher manually coordinating status across drivers and clients. We run that coordination continuously, without a person holding it together.",
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
            Built for businesses <span className="text-foreground">where a role, not a task, needs to run itself.</span>
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
