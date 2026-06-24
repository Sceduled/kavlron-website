"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Respect reduced motion — skip the intro entirely
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    // Total intro duration: 0.3s fade in + 0.5s hold + 0.5s fade out = 1.3s
    const timer = setTimeout(() => setVisible(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0A0A0F] pointer-events-none"
      style={{
        animation: "brandIntroOut 0.5s ease-in 0.8s both",
      }}
    >
      <div
        style={{
          animation: "brandIntroIn 0.3s ease-out both",
        }}
      >
        <Image
          src="/logo-k.png"
          alt="Kalvron"
          width={80}
          height={80}
          className="h-20 w-auto"
          style={{
            mixBlendMode: "screen",
            filter: "brightness(10)",
          }}
          priority
        />
      </div>

      <style>{`
        @keyframes brandIntroIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes brandIntroOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
