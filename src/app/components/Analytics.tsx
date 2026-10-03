"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consentGiven, setConsentGiven] = useState(false);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check initial consent state
    const consent = localStorage.getItem("kalvron-cookie-consent");
    if (consent === "accept") {
      setConsentGiven(true);
    }

    // Listen for consent acceptance
    const handleConsentEvent = () => setConsentGiven(true);
    window.addEventListener("cookie-consent-accepted", handleConsentEvent);
    return () => window.removeEventListener("cookie-consent-accepted", handleConsentEvent);
  }, []);

  useEffect(() => {
    if (consentGiven && gaId && pathname) {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag("config", gaId, {
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });
      }
    }
  }, [pathname, searchParams, consentGiven, gaId]);

  if (!gaId || !consentGiven) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
            });
          `,
        }}
      />
    </>
  );
}
