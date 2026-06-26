"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // A single, safe attempt to force play on mount for strict browsers (Edge)
    // without running aggressive intervals that interrupt mobile buffering
    video.play().catch(() => {});
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop={true}
        muted
        playsInline
        preload="auto"
        onEnded={(e) => {
          // Safe fallback for Edge failing to loop indefinitely
          const v = e.currentTarget;
          v.currentTime = 0;
          v.play().catch(() => {});
        }}
        className="w-full h-full object-cover object-[center_20%] opacity-80"
        src="/hero-bg.mp4"
      />
    </div>
  );
}
