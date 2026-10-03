"use client";
import { useState } from "react";
import { siteContent } from "../../../content/site";

export function PartnerForm() {
  const content = siteContent.partners;
  const [mountTime] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      source: "partners",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      agency: formData.get("agency"),
      clients: formData.get("clients"),
      honeypot: formData.get("honeypot"),
      startTime: String(mountTime)
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">✓</div>
        <h3 className="text-2xl font-bold text-white">Application Received</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="hidden" name="source" value="partners" />
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Full Name</label>
        <input name="name" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Work Email</label>
        <input type="email" name="email" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Phone</label>
        <input type="tel" name="phone" placeholder="e.g. +1 123 456 7890" required minLength={10} className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Agency Name</label>
        <input name="agency" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Number of active clients</label>
        <input type="number" name="clients" required min="1" className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none" />
      </div>
      <button type="submit" disabled={status === "loading"} className="mt-4 h-14 bg-accent-amber text-white font-bold tracking-wide hover:bg-white hover:text-background transition-colors disabled:opacity-50">
        {status === "loading" ? "Submitting..." : content.button}
      </button>
      {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
}
