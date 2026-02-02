import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Datenschutz | Psychotherapeutische Praxis Wiebke Pleis-Schevel",
  description: "Datenschutzerklärung der Psychotherapeutischen Praxis Wiebke Pleis-Schevel in Friedrichsfehn.",
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
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
                1. Datenschutz auf einen Blick
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">
                    Allgemeine Hinweise
                  </h3>
                  <p className="mt-2">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden
                    können.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Datenerfassung auf dieser Website
                  </h3>
                  <p className="mt-2">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den
                    Websitebetreiber. Die Kontaktdaten des Betreibers können Sie
                    dem Impressum dieser Website entnehmen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                2. Verantwortliche Stelle
              </h2>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p>Wiebke Pleis-Schevel</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ] Friedrichsfehn</p>
                <p className="mt-4">E-Mail: praxis@pleis-schevel.de</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                3. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">Kontaktformular</h3>
                  <p className="mt-2">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben aus dem Anfrageformular inklusive der
                    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Diese Daten geben wir nicht ohne Ihre
                    Einwilligung weiter.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Rechtsgrundlage
                  </h3>
                  <p className="mt-2">
                    Die Verarbeitung der in das Kontaktformular eingegebenen
                    Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs.
                    1 lit. a DSGVO).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                4. Ihre Rechte
              </h2>
              <div className="mt-4 text-muted-foreground">
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                  Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                  erteilt haben, können Sie diese Einwilligung jederzeit für die
                  Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </p>
                <p className="mt-4">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der
                  zuständigen Aufsichtsbehörde zu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                5. Hosting
              </h2>
              <div className="mt-4 text-muted-foreground">
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet
                  (Hoster). Die personenbezogenen Daten, die auf dieser Website
                  erfasst werden, werden auf den Servern des Hosters
                  gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die
                  über eine Website generiert werden, handeln.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <div className="mt-4 text-muted-foreground">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte, wie zum Beispiel
                  Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                  erkennen Sie daran, dass die Adresszeile des Browsers von
                  „http://" auf „https://" wechselt und an dem Schloss-Symbol in
                  Ihrer Browserzeile.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-foreground">
                7. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <div className="mt-4 text-muted-foreground">
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den
                  Stand [Datum wird ergänzt].
                </p>
                <p className="mt-4">
                  Durch die Weiterentwicklung unserer Website und Angebote
                  darüber oder aufgrund geänderter gesetzlicher beziehungsweise
                  behördlicher Vorgaben kann es notwendig werden, diese
                  Datenschutzerklärung zu ändern.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
