"use client";

import { useEffect, useRef, useState } from "react";

const TERMINAL_LINES = [
  { prefix: "> ", text: "Lead received from Meta Ad Campaign", color: "text-[#9CA3AF]" },
  { prefix: "> ", text: "Engaging lead via WhatsApp...", tail: " connected in 4 seconds", color: "text-[#9CA3AF]", tailColor: "text-[#34D399]" },
  { prefix: "> ", text: "Qualifying: budget, timeline, requirement...", color: "text-[#9CA3AF]" },
  { prefix: "> ", text: "Lead scored: ", highlight: "HOT — ready to buy", color: "text-[#9CA3AF]", highlightColor: "text-[#E53E3E]" },
  { prefix: "> ", text: "Alert sent to sales team with full brief", color: "text-[#34D399]" },
];

const LINE_DELAY_MS = 900; // ms between lines appearing

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const started = useRef(false);

  const startAnimation = () => {
    if (started.current) return;
    started.current = true;
    let count = 0;

    const tick = () => {
      count++;
      setVisibleLines(count);
      if (count < TERMINAL_LINES.length) {
        timerRef.current = setTimeout(tick, LINE_DELAY_MS);
      } else {
        // Hide cursor after last line settles
        setTimeout(() => setShowCursor(false), 1800);
      }
    };

    timerRef.current = setTimeout(tick, 400);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-terminal"
      className="relative w-full max-w-2xl mx-auto mt-14 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111118 0%, #0f0f1a 100%)",
        border: "1px solid #1E1E2E",
        boxShadow:
          "0 0 0 1px rgba(124,58,237,0.08), 0 20px 60px rgba(0,0,0,0.6), 0 0 80px rgba(124,58,237,0.06)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E2E]">
        <span className="w-3 h-3 rounded-full bg-[#E53E3E] opacity-70" />
        <span className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-70" />
        <span className="w-3 h-3 rounded-full bg-[#34D399] opacity-70" />
        <span className="ml-3 text-xs font-mono text-[#4B5563] select-none">
          kalvron-qualifier — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="px-5 py-5 min-h-[180px] font-mono text-sm leading-relaxed">
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            className={`terminal-line mb-2 ${i < visibleLines ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="text-[#7C3AED] select-none">{line.prefix}</span>
            <span className={line.color}>{line.text}</span>
            {line.highlight && i < visibleLines && (
              <span className={`font-semibold ${line.highlightColor}`}>
                {line.highlight}
              </span>
            )}
            {line.tail && i < visibleLines && (
              <span className={line.tailColor}>{line.tail}</span>
            )}
          </div>
        ))}

        {/* Blinking cursor — shows while animating */}
        {visibleLines > 0 && visibleLines <= TERMINAL_LINES.length && showCursor && (
          <div className="flex items-center gap-1">
            <span className="text-[#7C3AED] font-mono select-none">&gt; </span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>

      {/* Purple glow bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
    </div>
  );
}
