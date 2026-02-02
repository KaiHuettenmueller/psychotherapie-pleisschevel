import React from "react"
import type { Metadata } from "next";
import { Source_Sans_3, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _sourceSans = Source_Sans_3({ subsets: ["latin"] });
const _lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychotherapeutische Praxis Wiebke Pleis-Schevel | Friedrichsfehn",
  description:
    "Psychotherapeutische Praxis für Verhaltenstherapie in Friedrichsfehn bei Oldenburg. Eröffnung in Kürze. Jetzt Kontakt aufnehmen.",
  keywords: [
    "Psychotherapie Friedrichsfehn",
    "Verhaltenstherapie Oldenburg",
    "Psychotherapeut Oldenburg",
    "Psychotherapie Ammerland",
    "Verhaltenstherapie",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
