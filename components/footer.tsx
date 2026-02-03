import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-serif text-lg font-medium text-foreground">
              Psychotherapeutische Praxis
            </p>
            <p className="text-sm text-muted-foreground">
              Wiebke Pleis-Schevel
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Dorfstraße 13, 26188 Edewecht
            </p>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 text-center md:text-left">
            <p className="text-xs font-medium text-foreground">In Krisensituationen</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Bitte wenden Sie sich an die zuständige Psychiatrie oder den Notruf: 112
            </p>
          </div>

          <nav aria-label="Rechtliche Links">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Psychotherapeutische Praxis Wiebke
            Pleis-Schevel. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
