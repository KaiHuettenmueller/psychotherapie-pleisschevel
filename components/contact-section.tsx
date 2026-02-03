"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein.";
    }

    if (!formData.privacy) {
      newErrors.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Client-side only - show success message
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section id="kontakt" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mx-auto max-w-xl rounded-lg border border-border bg-card p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Vielen Dank für Ihre Nachricht
            </h2>
            <p className="mt-2 text-muted-foreground">
              Ich werde mich nach der Praxiseröffnung bei Ihnen melden.
            </p>
            <Button
              variant="outline"
              className="mt-6 bg-transparent"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", message: "", privacy: false });
              }}
            >
              Neue Nachricht senden
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            Kontakt
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Sie haben Fragen oder möchten einen Termin anfragen? Nutzen Sie das
            Kontaktformular oder die unten stehenden Kontaktdaten.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Ihr Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="ihre.email@beispiel.de"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                placeholder="Ihre Nachricht..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, privacy: checked === true })
                  }
                  aria-invalid={!!errors.privacy}
                  aria-describedby={errors.privacy ? "privacy-error" : undefined}
                />
                <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                  Ich habe die <Link href="/datenschutz" className="text-primary underline underline-offset-4 hover:text-primary/80">Datenschutzhinweise</Link> gelesen und stimme der Verarbeitung meiner Daten zu.
                </Label>
              </div>
              {errors.privacy && (
                <p id="privacy-error" className="text-sm text-destructive">
                  {errors.privacy}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full font-medium md:w-auto">
              Nachricht senden
            </Button>
          </form>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Kontaktdaten
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Die genauen Kontaktdaten werden nach der Praxiseröffnung
                veröffentlicht.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Mail className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-Mail</p>
                  <p className="text-muted-foreground">
                    Folgt nach Eröffnung
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Phone className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <p className="text-muted-foreground">Folgt nach Eröffnung</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <MapPin className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Standort</p>
                  <p className="text-muted-foreground">
                    Dorfstraße 13<br />
                    26188 Edewecht
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps?q=Dorfstraße+13,+26188+Edewecht,+Germany&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort der Praxis"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
