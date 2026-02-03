import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Impressum | Psychotherapeutische Praxis Wiebke Pleis-Schevel",
  description: "Impressum der Psychotherapeutischen Praxis Wiebke Pleis-Schevel in Edewecht.",
};

export default function ImpressumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-6">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
            Impressum
          </h1>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Die vollständigen Angaben werden nach der Praxiseröffnung
                ergänzt. Die folgenden Informationen sind Platzhalter.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Wiebke Pleis-Schevel</p>
                <p>Psychologische Psychotherapeutin (VT)</p>
                <p>Dorfstraße 13</p>
                <p>26188 Edewecht</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Kontakt
              </h2>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Telefon: Folgt nach Eröffnung</p>
                <p>E-Mail: Folgt nach Eröffnung</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Berufsbezeichnung und Zulassung
              </h2>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>
                  Berufsbezeichnung: Psychologische Psychotherapeutin (verliehen
                  in der Bundesrepublik Deutschland)
                </p>
                <p>Zuständige Aufsichtsbehörde: [wird ergänzt]</p>
                <p>
                  Zuständige Kammer: Psychotherapeutenkammer Niedersachsen
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Berufsrechtliche Regelungen
              </h2>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Psychotherapeutengesetz (PsychThG)</p>
                <p>Berufsordnung der Psychotherapeutenkammer Niedersachsen</p>
                <p>
                  Die berufsrechtlichen Regelungen sind einsehbar unter:{" "}
                  <a
                    href="https://www.pknds.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    www.pknds.de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                Haftungsausschluss
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">
                    Haftung für Inhalte
                  </h3>
                  <p className="mt-2">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Haftung für Links
                  </h3>
                  <p className="mt-2">
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
