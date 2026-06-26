"use client";

import { useState } from "react";

export default function OperationalDeltaSection() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("without");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-20 text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px] text-center">
          The gap between what&apos;s happening
          <br />
          <span className="text-text-muted">and what should be.</span>
        </h2>

        {/* Tab Controls */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex border border-border bg-surface p-1">
            <button
              onClick={() => setActiveTab("without")}
              className={`px-8 py-4 text-sm font-bold tracking-wide transition-colors ${
                activeTab === "without"
                  ? "bg-accent-amber text-background"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              Without Kalvron
            </button>
            <button
              onClick={() => setActiveTab("with")}
              className={`px-8 py-4 text-sm font-bold tracking-wide transition-colors ${
                activeTab === "with"
                  ? "bg-accent-blue text-background"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              With Kalvron
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          {/* Without Kalvron Tab */}
          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 transition-opacity duration-300 absolute inset-0 ${
              activeTab === "without"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {[
              {
                title: "Delayed response",
                desc: "Lead comes in. Hours pass. They've already moved on.",
              },
              {
                title: "Human bottleneck",
                desc: "Qualification depends on who's working that day. Inconsistency is built into the process.",
              },
              {
                title: "Generic follow-up",
                desc: "Every lead gets the same message. Doesn't matter what they said or what they need.",
              },
              {
                title: "Revenue leak",
                desc: "The leads were real. The intent was there. The system just didn't act on it fast enough.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex border border-border bg-surface-card p-8"
              >
                <div className="mr-6 flex h-8 w-8 shrink-0 items-center justify-center bg-accent-amber/10 text-accent-amber mt-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* With Kalvron Tab */}
          <div
            className={`grid grid-cols-1 gap-6 md:grid-cols-2 transition-opacity duration-300 absolute inset-0 ${
              activeTab === "with"
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {[
              {
                title: "60-second response",
                desc: "Every lead engaged instantly. Before they talk to anyone else.",
              },
              {
                title: "Intelligent qualification",
                desc: "Context-aware. Reads what the lead said, not a script. Scores based on real intent signals.",
              },
              {
                title: "Adaptive follow-up",
                desc: "Each lead gets a different sequence based on their answers, their timing, and their behaviour.",
              },
              {
                title: "Revenue recovered",
                desc: "Same leads. Same ad spend. More qualified conversations. More revenue from the pipeline you already paid for.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex border border-border bg-surface-card p-8"
              >
                <div className="mr-6 flex h-8 w-8 shrink-0 items-center justify-center bg-accent-blue/10 text-accent-blue mt-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
