"use client";
import { siteContent } from "../../../content/site";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function Team() {
  const content = siteContent.team;
  return (
    <section id="team" className="py-24 px-6 lg:px-10 bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-text-dim rounded-full" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-dim">
            {content.eyebrow}
          </span>
        </div>
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">{content.headline}</h2>
          <p className="text-xl text-text-muted leading-relaxed">{content.subhead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border border-border bg-surface flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white">{content.founder.name}</h3>
                <span className="text-sm text-accent-amber font-mono">{content.founder.title}</span>
              </div>
              <a href={siteContent.social.founderLinkedIn} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                LinkedIn ↗
              </a>
            </div>
            <p className="text-text-muted mt-4">{content.founder.desc}</p>
          </div>
          <div className="p-8 border border-border bg-surface flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white">{content.team.name}</h3>
            <p className="text-text-muted mt-auto">{content.team.desc}</p>
          </div>
        </div>
        
        <p className="text-lg font-bold text-center text-text-dim">{content.closing}</p>
      </div>
    </section>
  );
}

export function Security() {
  const content = siteContent.security;
  return (
    <section id="security" className="py-24 px-6 lg:px-10 bg-surface border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 max-w-2xl">{content.headline}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {content.points.map((pt, i) => (
            <div key={i} className="border-t border-border/50 py-8 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white">{pt.title}</h3>
              <p className="text-text-muted leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  const content = siteContent.logos;
  return (
    <section className="py-24 px-6 lg:px-10 bg-background border-t border-border/50 text-center">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim mb-12 block">{content.heading}</span>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {content.items?.map((item: any, i: number) => {
            const inner = (
              <>
                {item.type === "image" ? (
                  <img src={item.src} alt={`${item.name} Logo`} className="max-h-12 max-w-[140px] object-contain" />
                ) : (
                  <span className="font-mono text-xl font-bold text-text-dim text-center leading-tight">
                    {item.text?.split(' ').map((word, idx) => (
                      <span key={idx}>{word}<br/></span>
                    ))}
                  </span>
                )}
              </>
            );
            
            const className = "flex h-24 min-w-[200px] items-center justify-center border border-border bg-surface px-8 grayscale transition-all duration-300 hover:grayscale-0 hover:bg-surface-card opacity-60 hover:opacity-100";
            
            return item.url ? (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <div key={i} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const content = siteContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 lg:px-10 bg-surface border-t border-border/50">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-16">Frequently asked questions</h2>
        <div className="flex flex-col border-t border-border/50">
          {content.map((item, i) => (
            <div key={i} className="border-b border-border/50">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                aria-expanded={openIndex === i}
              >
                <h3 className={`text-lg font-bold pr-8 transition-colors ${openIndex === i ? 'text-accent-amber' : 'text-white'}`}>{item.q}</h3>
                <span className="text-text-dim shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-text-muted leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
