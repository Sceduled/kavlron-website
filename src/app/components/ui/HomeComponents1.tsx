"use client";
import { siteContent } from "../../../content/site";
import BackgroundVideo from "../BackgroundVideo";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

export function Hero() {
  const content = siteContent.hero;
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-24 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-background/40" /> {/* Scrim for readability */}
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col items-start justify-center">
        <div className="mb-8 inline-flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-dim">
            {content.eyebrow}
          </span>
        </div>
        
        <div className="max-w-[1000px]">
          <h1 className="text-[48px] leading-[1.05] font-bold tracking-tighter text-white sm:text-[64px] lg:text-[80px]">
            Run every department with a single AI OS, and <span className="text-accent-amber">grow without hiring</span> to keep up
          </h1>
        </div>
        
        <div className="mt-10 max-w-[640px]">
          <p className="text-xl font-medium leading-relaxed text-text-muted">
            {content.subhead}
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-start gap-4">
          <a href="#book-a-call" className="inline-flex h-14 items-center justify-center bg-accent-amber px-8 text-base font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-background">
            {content.cta}
          </a>
          <span className="text-sm font-mono text-text-dim">{content.underCta}</span>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const content = siteContent.problem;
  return (
    <section id="problem" className="py-24 px-6 lg:px-10 bg-background border-t border-border/50">
      <div className="mx-auto max-w-3xl flex flex-col gap-12">
        {content.map((line, i) => (
          <div key={i} className="group">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight transition-all duration-700 ${i === content.length - 1 ? 'text-accent-amber' : 'text-text-dim hover:text-white'}`}>
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhatItIs() {
  const content = siteContent.whatItIs;
  return (
    <section className="py-24 px-6 lg:px-10 bg-surface/30 border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">{content.headline}</h2>
          <p className="text-xl text-text-muted leading-relaxed">{content.intro}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 border-t border-border/50 pt-16">
          {content.points.map((pt, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-mono text-xs text-accent-amber font-bold">0{i+1}</span>
              <h3 className="text-xl font-bold text-white">{pt.title}</h3>
              <p className="text-text-muted leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Departments() {
  const content = siteContent.departments;
  const [activeIndex, setActiveIndex] = useState(0);

  // Simplified Departments component without complex pinned scroll to guarantee mobile-friendly behavior
  return (
    <section id="departments" className="py-24 px-6 lg:px-10 bg-background border-t border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">{content.headline}</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          {/* List/Diagram */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {content.items.map((item, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`text-left p-6 border transition-all duration-200 ${activeIndex === i ? 'bg-surface border-accent-amber' : 'border-border/50 hover:border-border bg-transparent'}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${activeIndex === i ? 'text-accent-amber' : 'text-white'}`}>{item.title}</h3>
                <p className={`text-sm ${activeIndex === i ? 'text-foreground' : 'text-text-dim'}`}>{item.desc}</p>
              </button>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="w-full lg:w-1/2 bg-surface border border-border p-8 flex flex-col justify-center">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse"></span>
                Example activity
              </span>
            </div>
            <div className="flex flex-col gap-6">
              {content.exampleActivity.map((activity, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-background/50 border border-border/50">
                  <span className="font-mono text-xs text-text-muted mt-1">SYS</span>
                  <p className="text-sm font-medium font-mono text-white leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-text-muted">{content.closing}</p>
        </div>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const content = siteContent.howWeWork;
  return (
    <section className="py-24 px-6 lg:px-10 bg-surface border-t border-border/50">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white sticky top-32">{content.headline}</h2>
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-col gap-16 border-l border-border pl-8 md:pl-12">
          {content.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[33px] md:-left-[49px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent-amber"></div>
              <h3 className="text-2xl font-bold text-white mb-4"><span className="text-accent-amber mr-2">0{i+1}.</span> {step.title}</h3>
              <p className="text-lg text-text-muted leading-relaxed max-w-xl">{step.body}</p>
            </div>
          ))}
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-xl font-bold text-white">{content.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
