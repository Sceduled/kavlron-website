"use client";

import React, { useState } from "react";

export default function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "Marketing agency looking to partner",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch shortly.");
  };

  return (
    <section id="contact" className="relative py-24 border-t border-[#1E1E2E] overflow-hidden">
      
      {/* Background with purple gradient overlay */}
      <div className="absolute inset-0 bg-[#0A0A0F]" />
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, rgba(10,10,15,0) 70%)"
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Revenue is leaking.<br />
            <span className="text-[#9461FF]">Let&apos;s find exactly where.</span>
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-[500px] mx-auto leading-relaxed">
            In 20 minutes, we map your current sales process and identify the exact point where leads stop converting. No pitch. Just the diagnosis.
          </p>
        </div>

        <div className="w-full max-w-[500px] bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 shadow-[0_0_40px_rgba(124,58,237,0.1)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-[#9CA3AF]">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:border-[#7C3AED] transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-[#9CA3AF]">Work Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:border-[#7C3AED] transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-[#9CA3AF]">Phone Number</label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:border-[#7C3AED] transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-sm font-medium text-[#9CA3AF]">Company Name</label>
              <input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-4 py-3 text-white placeholder-[#4B5563] focus:outline-none focus:border-[#7C3AED] transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="type" className="text-sm font-medium text-[#9CA3AF]">I am a...</label>
              <div className="relative">
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full appearance-none bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors cursor-pointer"
                >
                  <option value="Marketing agency looking to partner">Marketing agency looking to partner</option>
                  <option value="Business looking to fix lead handling">Business looking to fix lead handling</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9CA3AF]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#7C3AED] hover:bg-[#9461FF] text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 group"
            >
              Let&apos;s Talk
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
