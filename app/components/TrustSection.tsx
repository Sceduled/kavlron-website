import React from "react";

export default function TrustSection() {
  const logos = [
    { name: "IIL", size: "text-2xl font-bold tracking-widest" },
    { name: "IZee Business School", size: "text-lg font-serif italic" },
    { name: "Drootle Media", size: "text-xl font-medium tracking-tight" },
    { name: "Darvyn Digital", size: "text-xl font-mono uppercase" },
  ];

  return (
    <section id="trust" className="relative py-20 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#9CA3AF]">
            Trusted by teams recovering revenue at scale
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center px-8 py-6 bg-[#111118] border border-[#1E1E2E] rounded-xl min-w-[200px] h-24 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <span className={`${logo.size} text-white`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
