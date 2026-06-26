"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes at the DOM level to bypass React attribute diffing bugs
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      video.play().catch((error) => {
        console.warn("Autoplay was prevented. Retrying...", error);
      });
    };

    attemptPlay();

    // Chromium browsers (Edge, Brave, Chrome) sometimes hang on the last frame of MP4s
    // when looping. This timeupdate listener forces a rewind just before it hangs.
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        attemptPlay();
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);

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
      video.removeEventListener("timeupdate", handleTimeUpdate);
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
