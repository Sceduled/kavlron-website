"use client";

import { useState, useRef } from "react";

export default function CtaSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 lg:px-10 overflow-hidden"
    >
      {/* Animated Glowing Rings Background */}
      <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ perspective: "1200px" }}>
        {/* Outer Ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-out"
          style={{
            transform: `rotateY(${mousePos.x * 60}deg) rotateX(${-mousePos.y * 60}deg) translateZ(-50px)`,
          }}
        >
          <svg className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-100" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 25px rgba(212,98,43,0.8))' }}>
            <defs>
              <linearGradient id="ringGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4622B" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#ringGrad1)" strokeWidth="1" />
          </svg>
        </div>

        {/* Inner Ring */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${mousePos.x * 30}deg) rotateX(${-mousePos.y * 30}deg) translateZ(50px)`,
          }}
        >
          <svg className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-80" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))' }}>
            <defs>
              <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="url(#ringGrad2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div 
        className="relative z-10 mx-auto w-full max-w-2xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
        }}
      >
        <div className="mb-12 text-center drop-shadow-2xl">
          <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tighter text-white sm:text-[56px] text-shadow-sm">
            Revenue is leaking.
            <br />
            <span className="text-accent-blue">Let&apos;s find exactly where.</span>
          </h2>
          <p className="mx-auto max-w-lg text-lg font-medium leading-relaxed text-white drop-shadow-md text-shadow-sm">
            In 20 minutes, we map your current sales process and identify the
            exact point where leads stop converting. No pitch. Just the
            diagnosis.
          </p>
        </div>

        {/* Form Card */}
        <div className="border border-border/30 bg-background/20 backdrop-blur-md p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Full Name
              </label>
              <input
                suppressHydrationWarning
                type="text"
                id="name"
                className="border border-border bg-background/50 px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Work Email
              </label>
              <input
                suppressHydrationWarning
                type="email"
                id="email"
                className="border border-border bg-background/50 px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Phone Number
              </label>
              <input
                suppressHydrationWarning
                type="tel"
                id="phone"
                className="border border-border bg-background/50 px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Company Name
              </label>
              <input
                suppressHydrationWarning
                type="text"
                id="company"
                className="border border-border bg-background/50 px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-text-muted">
                I am a...
              </label>
              <select
                suppressHydrationWarning
                id="role"
                className="border border-border bg-background/50 px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors appearance-none"
              >
                <option value="agency">Marketing agency looking to partner</option>
                <option value="business">Business looking to fix lead handling</option>
              </select>
            </div>

            <button
              suppressHydrationWarning
              type="button"
              className="mt-4 w-full bg-accent-blue py-4 text-center font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-background"
            >
              Let&apos;s Talk →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
