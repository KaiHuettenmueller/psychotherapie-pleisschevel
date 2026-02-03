"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const colorThemes = [
  {
    name: "Teal",
    label: "Kühl & Professionell",
    primary: "oklch(0.45 0.08 180)",
    ring: "oklch(0.45 0.08 180)",
  },
  {
    name: "Sage",
    label: "Warm & Natürlich",
    primary: "oklch(0.50 0.06 140)",
    ring: "oklch(0.50 0.06 140)",
  },
  {
    name: "Terracotta",
    label: "Warm & Einladend",
    primary: "oklch(0.55 0.12 50)",
    ring: "oklch(0.55 0.12 50)",
  },
  {
    name: "Dusty Rose",
    label: "Sanft & Beruhigend",
    primary: "oklch(0.55 0.08 10)",
    ring: "oklch(0.55 0.08 10)",
  },
  {
    name: "Lavender",
    label: "Ruhig & Entspannt",
    primary: "oklch(0.50 0.08 290)",
    ring: "oklch(0.50 0.08 290)",
  },
  {
    name: "Ocean",
    label: "Vertrauensvoll & Klar",
    primary: "oklch(0.45 0.10 240)",
    ring: "oklch(0.45 0.10 240)",
  },
];

export function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Teal");

  const applyTheme = (theme: typeof colorThemes[0]) => {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--ring", theme.ring);
    setActiveTheme(theme.name);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-2 rounded-lg border border-border bg-card p-4 shadow-lg">
          <p className="mb-3 text-sm font-medium text-foreground">
            Farbschema wählen
          </p>
          <div className="grid gap-2">
            {colorThemes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => applyTheme(theme)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                  activeTheme === theme.name ? "bg-muted" : ""
                }`}
              >
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
                <span>
                  <span className="font-medium text-foreground">{theme.name}</span>
                  <span className="ml-2 text-muted-foreground">– {theme.label}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Sag Kai welche Farbe dir gefällt!
          </p>
        </div>
      )}
      <Button
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full shadow-lg"
        aria-label="Farbschema ändern"
      >
        <Palette className="h-5 w-5" />
      </Button>
    </div>
  );
}
