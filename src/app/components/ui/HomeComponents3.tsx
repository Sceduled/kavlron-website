"use client";
import { useState } from "react";
import { siteContent } from "../../../content/site";

export function CTAForm() {
  const content = siteContent.cta;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const toggleOption = (opt: string) => {
    if (opt === "Not sure yet") {
      setSelectedOptions(["Not sure yet"]);
      return;
    }
    
    let newOpts = [...selectedOptions].filter(o => o !== "Not sure yet");
    
    if (opt === "Everything: one AI OS for the whole business") {
      if (selectedOptions.includes("Everything: one AI OS for the whole business")) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(content.options.filter(o => o !== "Not sure yet"));
      }
      return;
    }
    
    if (newOpts.includes(opt)) {
      newOpts = newOpts.filter(o => o !== opt);
      newOpts = newOpts.filter(o => o !== "Everything: one AI OS for the whole business");
    } else {
      newOpts.push(opt);
      const allCore = content.options.filter(o => o !== "Everything: one AI OS for the whole business" && o !== "Not sure yet");
      if (allCore.every(o => newOpts.includes(o))) {
        newOpts.push("Everything: one AI OS for the whole business");
      }
    }
    setSelectedOptions(newOpts);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      automations: selectedOptions.join(", ")
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setStatus("success");
      // Trigger analytics
      window.dispatchEvent(new Event("form-submitted"));
      window.location.href = "https://cal.com/kalvron-172522/demo?overlayCalendar=true";
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="book-a-call" className="py-24 px-6 lg:px-10 bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">{content.headline}</h2>
          <p className="text-xl text-text-muted leading-relaxed max-w-lg">{content.body}</p>
        </div>
        
        <div className="w-full lg:w-1/2 bg-surface border border-border p-8 md:p-12">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">✓</div>
              <h3 className="text-2xl font-bold text-white">{content.success}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Full Name</label>
                  <input name="name" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Work Email</label>
                  <input type="email" name="email" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Phone</label>
                  <input type="tel" name="phone" placeholder="e.g. +1 123 456 7890" required minLength={10} className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-dim">Company Name</label>
                  <input name="company" required className="bg-background border border-border p-4 text-white focus:border-accent-amber focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-4">
                <label className="text-xs font-bold uppercase tracking-widest text-text-dim">What do you want to automate?</label>
                <div className="grid grid-cols-1 gap-3">
                  {content.options.map(opt => (
                    <button type="button" key={opt} onClick={() => toggleOption(opt)} className={`text-left flex items-center gap-4 p-4 border cursor-pointer transition-colors ${selectedOptions.includes(opt) ? 'border-accent-amber bg-accent-amber/10' : 'border-border bg-background hover:border-border/80'}`}>
                      <div className={`w-5 h-5 rounded-sm border flex items-center justify-center shrink-0 ${selectedOptions.includes(opt) ? 'border-accent-amber bg-accent-amber' : 'border-text-dim'}`}>
                        {selectedOptions.includes(opt) && <span className="text-background text-xs font-bold">✓</span>}
                      </div>
                      <span className={`text-sm font-medium ${selectedOptions.includes(opt) ? 'text-white' : 'text-text-muted'}`}>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading" || selectedOptions.length === 0}
                className="mt-6 h-14 bg-accent-amber text-white font-bold tracking-wide hover:bg-white hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : content.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
