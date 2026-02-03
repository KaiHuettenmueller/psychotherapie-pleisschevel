import Image from "next/image";

export function AboutSection() {
  return (
    <section id="ueber-mich" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {/* Portrait Placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                alt="Platzhalter für Portraitfoto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/60">
                <span className="text-xs font-medium text-muted-foreground">Foto folgt</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Über mich
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Mein Name ist Wiebke Pleis-Schevel. Als approbierte
                Psychologische Psychotherapeutin mit dem Schwerpunkt
                Verhaltenstherapie begleite ich Erwachsene bei der Bewältigung
                psychischer Belastungen und Erkrankungen.
              </p>
              <p>
                Die Verhaltenstherapie ist ein wissenschaftlich fundiertes
                Verfahren, das darauf abzielt, belastende Denk- und
                Verhaltensmuster zu erkennen und gezielt zu verändern. In meiner
                Arbeit lege ich Wert auf eine wertschätzende, transparente und
                ressourcenorientierte Zusammenarbeit.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Qualifikation
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    Approbation als Psychologische Psychotherapeutin
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Fachkunde Verhaltenstherapie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Kassenzulassung</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-sm italic text-muted-foreground">
              Ein Foto der Praxisräume folgt nach der Eröffnung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
