import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="Kalvron"
            width={100}
            height={24}
            className="h-6 w-auto"
            style={{
              mixBlendMode: "screen",
              filter: "brightness(10)",
            }}
          />
        </div>

        <div className="text-[#9CA3AF] text-sm">
          © 2026 Kalvron Infrastructure. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
