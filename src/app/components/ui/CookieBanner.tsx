"use client";
import { useState, useEffect } from "react";
import { siteContent } from "../../../content/site";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kalvron-cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (value: "accept" | "reject") => {
    localStorage.setItem("kalvron-cookie-consent", value);
    setShow(false);
    if (value === "accept") {
      // Trigger analytics
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="mx-auto max-w-2xl bg-surface-card border border-border p-6 shadow-2xl pointer-events-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-text-muted flex-grow">
          {siteContent.cookieBanner.text}
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button onClick={() => handleConsent("reject")} className="flex-1 sm:flex-none px-4 py-2 border border-border text-sm font-medium text-white hover:bg-surface transition-colors">
            {siteContent.cookieBanner.reject}
          </button>
          <button onClick={() => handleConsent("accept")} className="flex-1 sm:flex-none px-4 py-2 bg-accent-amber text-sm font-medium text-white hover:bg-white hover:text-background transition-colors">
            {siteContent.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
