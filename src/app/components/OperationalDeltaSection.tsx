import { Target, Clock, Bot, Activity } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Lead dashboard",
    description: "Every lead in one place. Name, phone, requirement, budget, timeline, score, full conversation transcript. Sorted by priority. Hot first."
  },
  {
    icon: Clock,
    title: "Daily WhatsApp summary",
    description: "3 Hot leads to call now. 5 Warm leads to follow up. 12 Cold leads filtered out. Sent to the sales team every morning. No login needed."
  },
  {
    icon: Bot,
    title: "Automatic follow-up",
    description: "Leads that ghost get followed up automatically. Leads that say 'I'll think about it' stay in a nurture sequence for up to 12 weeks. No lead is forgotten."
  },
  {
    icon: Activity,
    title: "Dead lead recovery",
    description: "Leads that went cold months ago get re-engaged when the timing is right. New message. New angle. Some of the best conversions come from leads everyone else gave up on."
  }
];

export default function OperationalDeltaSection() {
  const Icon0 = features[0].icon;
  const Icon1 = features[1].icon;
  const Icon2 = features[2].icon;
  const Icon3 = features[3].icon;

  return (
    <section className="bg-background px-6 py-24 lg:px-10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-20">
          <h2 className="text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[64px] drop-shadow-xl">
            Their sales team <span className="text-accent-amber">stops guessing.</span>
          </h2>
        </div>

        {/* Cinematic HUD Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border/40 relative bg-surface-card/10 backdrop-blur-sm">
          
          {/* Corner Crosshairs */}
          <div className="absolute -top-[14px] -left-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -top-[14px] -right-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -bottom-[14px] -left-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>
          <div className="absolute -bottom-[14px] -right-[6px] text-border/60 text-xl font-light pointer-events-none">+</div>

          {/* Left Panel - Feature 0 */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/40 relative p-8 md:p-12 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">SYS.01 // CORE</div>
            
            {/* Abstract Data Viz */}
            <div className="flex-1 flex items-center justify-center my-16 relative">
              {/* Spinning geometric HUD element */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-accent-blue/40 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_20px_rgba(107,127,163,0.5)]" />
                <div className="absolute inset-4 border-[3px] border-dashed border-accent-amber/50 rounded-full animate-[spin_5s_linear_infinite_reverse] shadow-[0_0_15px_rgba(212,98,43,0.5)]" />
                <div className="absolute inset-12 border-2 border-accent-blue/30 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl font-mono font-bold text-white tracking-tighter">100<span className="text-accent-blue text-2xl">%</span></div>
                    <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase mt-2">Visibility</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center">
                  <Icon0 className="h-5 w-5 text-accent-blue" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-border/40 to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{features[0].title}</h3>
              <p className="text-text-muted leading-relaxed font-medium">{features[0].description}</p>
            </div>
          </div>

          {/* Right Panel - Features 1, 2, 3 */}
          <div className="lg:col-span-7 flex flex-col relative">
            
            {/* Feature 1 - Huge Horizontal */}
            <div className="flex-1 border-b border-border/40 p-8 md:p-12 relative flex flex-col justify-center group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">SYS.02 // COMMS</div>
              
              {/* Background massive number */}
              <div className="absolute -right-8 -bottom-12 text-[180px] font-bold text-accent-amber/20 leading-none font-mono pointer-events-none transition-transform duration-700 group-hover:-translate-x-4 animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(212,98,43,0.3)]">
                02
              </div>

              <div className="relative z-10 flex items-start gap-6 sm:gap-10">
                <div className="hidden sm:flex h-16 w-16 shrink-0 border border-accent-amber/30 bg-accent-amber/10 items-center justify-center mt-2">
                  <Icon1 className="h-8 w-8 text-accent-amber" />
                </div>
                <div>
                  <div className="sm:hidden h-10 w-10 border border-accent-amber/30 bg-accent-amber/10 flex items-center justify-center mb-6">
                    <Icon1 className="h-5 w-5 text-accent-amber" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{features[1].title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium max-w-lg">{features[1].description}</p>
                </div>
              </div>
            </div>

            {/* Bottom split: Feature 2 & 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
              
              {/* Feature 2 */}
              <div className="border-b sm:border-b-0 sm:border-r border-border/40 p-8 md:p-10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">SYS.03</div>
                <div className="absolute -right-4 -bottom-4 text-[100px] font-bold text-foreground/20 leading-none font-mono pointer-events-none transition-transform duration-700 group-hover:-translate-y-2 animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  03
                </div>
                <div className="relative z-10">
                  <div className="h-10 w-10 border border-foreground/30 bg-foreground/10 flex items-center justify-center mb-8">
                    <Icon2 className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{features[2].title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm font-medium">{features[2].description}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-8 md:p-10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text-muted/50">SYS.04</div>
                <div className="absolute -right-4 -bottom-4 text-[100px] font-bold text-accent-blue/20 leading-none font-mono pointer-events-none transition-transform duration-700 group-hover:-translate-x-2 animate-[pulse_3.5s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(107,127,163,0.3)]">
                  04
                </div>
                <div className="relative z-10">
                  <div className="h-10 w-10 border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center mb-8">
                    <Icon3 className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{features[3].title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm font-medium">{features[3].description}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
