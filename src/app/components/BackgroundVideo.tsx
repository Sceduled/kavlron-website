"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play on mount to bypass strict browser autoplay policies
    // This is especially needed for Edge, Safari, and mobile browsers
    const attemptPlay = () => {
      video.play().catch((error) => {
        console.warn("Autoplay was prevented. Retrying...", error);
        // Optional: you can add a small timeout and retry if it's a transient state
      });
    };

    attemptPlay();

    // Also try playing on first user interaction if it failed
    const handleInteraction = () => {
      attemptPlay();
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("touchstart", handleInteraction, { once: true });
    document.addEventListener("click", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop={true}
        muted
        playsInline
        onEnded={(e) => {
          // Hard fallback for Edge failing to honor the standard loop attribute
          const video = e.currentTarget;
          video.currentTime = 0;
          video.play().catch(console.error);
        }}
        className="w-full h-full object-cover object-[center_20%] opacity-80"
        src="/hero-bg.mp4"
      />
    </div>
  );
}
