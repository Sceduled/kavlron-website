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
    <div ref={containerRef} className="w-full max-w-2xl mx-auto mt-16 lg:mt-20">
      <div className="terminal-glow rounded-lg border border-border overflow-hidden bg-surface">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-70" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-70" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41] opacity-70" />
          <span className="ml-3 text-xs font-mono text-text-dim tracking-wider uppercase">
            kalvron-engine v2.1
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 lg:p-6 font-mono text-sm leading-7 min-h-[220px]">
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
                    ? "text-accent-red font-semibold"
                    : "text-text-muted"
                } ${index > 0 ? "mt-1" : ""}`}
              >
                {displayText}
                {isTyping && (
                  <span className="terminal-cursor inline-block w-2 h-4 bg-accent-purple ml-0.5 align-middle" />
                )}
              </div>
            );
          })}
          {visibleLines === 0 && (
            <div className="text-text-dim">
              <span className="terminal-cursor inline-block w-2 h-4 bg-accent-purple align-middle" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
