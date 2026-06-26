"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes at the DOM level
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("preload", "auto");

    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Silent catch to prevent console spam
        });
      }
    };

    attemptPlay();

    // BRUTE FORCE: Mobile OS (iOS/Android) frequently pauses background videos on scroll
    // or when the URL bar hides. This interval checks every 500ms and forces it back on.
    const playEnforcer = setInterval(() => {
      if (video.paused && video.readyState >= 2) {
        attemptPlay();
      }
    }, 500);

    const handleTimeUpdate = () => {
      // Safely loop just before the very end
      if (video.duration && video.currentTime >= video.duration - 0.2) {
        video.currentTime = 0;
        attemptPlay();
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      clearInterval(playEnforcer);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none bg-background overflow-hidden"
      style={{ transform: "translate3d(0,0,0)" }} // Force Hardware Acceleration
    >
      <video
        ref={videoRef}
        autoPlay
        loop={true}
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
        style={{ transform: "translate(-50%, -50%) translateZ(0)" }}
        src="/hero-bg.mp4"
      />
    </div>
  );
}
