import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2">
          {/* Logo mark */}
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div className="absolute inset-0 rounded bg-[#7C3AED] opacity-20" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-3 h-3 relative z-10"
              aria-hidden="true"
            >
              <path
                d="M4 4L12 2L20 4V12C20 17 12 22 12 22C12 22 4 17 4 12V4Z"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            Kalvron AI
          </span>
        </div>

        <div className="text-[#9CA3AF] text-sm">
          © 2026 Kalvron Infrastructure. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
