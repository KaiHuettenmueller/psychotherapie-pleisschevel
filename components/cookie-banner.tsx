"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg md:p-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="text-sm text-foreground">
            Diese Website verwendet Cookies zur Analyse der Websitenutzung.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Mehr dazu in unserer{" "}
            <a
              href="/datenschutz"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={declineCookies}>
            Ablehnen
          </Button>
          <Button size="sm" onClick={acceptCookies}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
