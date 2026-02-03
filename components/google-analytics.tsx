"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// TODO: GA4 Measurement ID hier eintragen wenn verfügbar
const GA_MEASUREMENT_ID = ""; // z.B. "G-XXXXXXXXXX"

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      setHasConsent(consent === "accepted");
    };

    checkConsent();

    // Check periodically for consent changes
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, []);

  // Don't render if no measurement ID or no consent
  if (!GA_MEASUREMENT_ID || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
