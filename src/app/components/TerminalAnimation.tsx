"use client";

import { useEffect, useState, useRef } from "react";

const TERMINAL_LINES = [
  { text: "> Lead received from Meta Ad Campaign", delay: 0 },
  {
    text: "> Engaging lead via WhatsApp... connected in 4 seconds",
    delay: 1200,
  },
  { text: "> Qualifying: budget, timeline, requirement...", delay: 2400 },
  {
    text: "> Lead scored: HOT — ready to buy",
    delay: 3600,
    highlight: true,
  },
  {
    text: "> Alert sent to sales team with full brief",
    delay: 4800,
  },
];

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [displayedChars, setDisplayedChars] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    TERMINAL_LINES.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        // Type out characters one by one
        const chars = line.text.length;
        for (let i = 0; i <= chars; i++) {
          setTimeout(() => {
            setDisplayedChars((prev) => {
              const newChars = [...prev];
              newChars[index] = i;
              return newChars;
            });
          }, i * 18);
        }
      }, line.delay);
    });
  };

  return (
    <div ref={containerRef} className="w-full max-w-2xl mt-16 lg:mt-24 z-10 relative">
      <div className="rounded-none border border-border overflow-hidden bg-surface-card">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="ml-3 text-xs font-mono text-text-dim tracking-wider uppercase">
            kalvron-engine v2.1
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 lg:p-6 font-mono text-[13px] md:text-sm leading-7 min-h-[220px]">
          {TERMINAL_LINES.map((line, index) => {
            if (index >= visibleLines) return null;
            const charsToShow = displayedChars[index] ?? 0;
            const displayText = line.text.substring(0, charsToShow);
            const isTyping = charsToShow < line.text.length;

            return (
              <div
                key={index}
                className={`${
                  line.highlight
                    ? "text-accent-amber font-bold"
                    : "text-text-muted"
                } ${index > 0 ? "mt-1.5" : ""}`}
              >
                {displayText}
                {isTyping && (
                  <span className="terminal-cursor inline-block w-2.5 h-[1.2em] bg-accent-amber ml-0.5 align-middle" />
                )}
              </div>
            );
          })}
          {visibleLines === 0 && (
            <div className="text-text-dim">
              <span className="terminal-cursor inline-block w-2.5 h-[1.2em] bg-accent-amber align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
