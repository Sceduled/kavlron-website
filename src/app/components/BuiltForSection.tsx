import { GraduationCap, Home, Building2 } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Colleges, schools, coaching institutes. Admission leads qualified automatically. Counselors only call students who are ready to enroll."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Builders, developers, sales teams. Buyer leads qualified for budget, timeline, location, and intent. Agents only talk to serious buyers."
  },
  {
    icon: Building2,
    title: "Any Lead-Gen Business",
    description: "Healthcare, home services, D2C, professional services. If your client runs ads and has a sales team that calls leads, this system works."
  }
];

export default function BuiltForSection() {
  const Icon0 = industries[0].icon;
  const Icon1 = industries[1].icon;
  const Icon2 = industries[2].icon;

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
            Built for businesses <span className="text-foreground">that run on leads.</span>
          </h2>
        </div>

        {/* Cinematic Staggered Grid */}
        <div className="relative">
          {/* Background architectural connecting lines */}
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-accent-blue/30 hidden lg:block shadow-[0_0_10px_rgba(107,127,163,0.5)]" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-accent-amber/30 hidden lg:block shadow-[0_0_10px_rgba(212,98,43,0.5)]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative z-10">
            
            {/* Block 1: Education */}
            <div className="border border-border/40 bg-background/90 backdrop-blur-md p-8 md:p-10 relative group overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-text-muted/50 uppercase tracking-widest">IND.01 // EDU</div>
              
              <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700 animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <Icon0 className="w-64 h-64" />
              </div>

              <div className="h-14 w-14 border border-foreground/30 bg-foreground/10 flex items-center justify-center mb-10">
                <Icon0 className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{industries[0].title}</h3>
              <p className="text-text-muted leading-relaxed font-medium">{industries[0].description}</p>
            </div>

            {/* Block 2: Real Estate (Staggered down) */}
            <div className="border border-accent-blue/30 bg-surface-card/90 backdrop-blur-md p-8 md:p-10 relative group overflow-hidden shadow-[0_0_40px_rgba(107,127,163,0.1)] lg:mt-24 transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-accent-blue/50 uppercase tracking-widest">IND.02 // REAL</div>
              
              <div className="absolute -left-12 -bottom-12 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700 animate-[pulse_5s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(107,127,163,0.4)]">
                <Icon1 className="w-72 h-72" />
              </div>

              <div className="h-14 w-14 border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center mb-10">
                <Icon1 className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{industries[1].title}</h3>
              <p className="text-text-muted leading-relaxed font-medium">{industries[1].description}</p>
            </div>

            {/* Block 3: Any Business (Staggered further down) */}
            <div className="border border-accent-amber/30 bg-background/90 backdrop-blur-md p-8 md:p-10 relative group overflow-hidden shadow-[0_0_40px_rgba(212,98,43,0.1)] lg:mt-48 transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-accent-amber/50 uppercase tracking-widest">IND.03 // GEN</div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700 animate-[pulse_4.5s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(212,98,43,0.4)]">
                <Icon2 className="w-64 h-64" />
              </div>

              <div className="h-14 w-14 border border-accent-amber/30 bg-accent-amber/10 flex items-center justify-center mb-10">
                <Icon2 className="h-6 w-6 text-accent-amber" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{industries[2].title}</h3>
              <p className="text-text-muted leading-relaxed font-medium">{industries[2].description}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
