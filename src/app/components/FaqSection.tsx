"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does the agency partnership work?",
    a: "You connect us with your clients. We build and manage the system for each one. You earn a share of the recurring revenue on every client. You do zero technical work.",
  },
  {
    q: "What does it cost per client?",
    a: "Setup starts at ₹5,000 per client. Monthly costs depend on lead volume and whether the system uses WhatsApp, voice calls, or both. We'll give you an exact breakdown before anything starts.",
  },
  {
    q: "How is this different from a CRM or chatbot?",
    a: "A CRM stores leads. A chatbot answers FAQs. This system actively qualifies every lead through a real conversation, scores them, and routes only the serious ones to the sales team. It's not a tool the client manages. We handle everything.",
  },
  {
    q: "Does this replace the sales team?",
    a: "No. It makes them more effective. The system handles the filtering and follow-up. The sales team only talks to people who are ready to buy.",
  },
  {
    q: "How quickly does it go live?",
    a: "First client takes 2-3 days. Every client after that takes 2-4 hours.",
  },
  {
    q: "What if the agent says the wrong thing?",
    a: "Every system runs through testing before going live. The qualification flow is built specifically for that industry and reviewed before launch. We monitor and optimize based on real conversation data.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-16 text-center text-[40px] font-bold leading-[1.1] tracking-tighter text-foreground sm:text-[56px]">
          Frequently asked questions.
        </h2>

        <div className="flex flex-col border-t border-border">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border bg-background transition-colors hover:bg-surface"
            >
              <button
                suppressHydrationWarning
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-bold tracking-tight text-foreground pr-8">
                  {faq.q}
                </span>
                <span className="shrink-0 text-text-dim font-mono text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-8 text-base leading-relaxed text-text-muted">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
