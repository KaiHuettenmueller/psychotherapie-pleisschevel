import { Info } from "lucide-react";

export function InfoNotice() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Info className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-medium text-foreground">
                Praxis im Aufbau
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Die Praxis befindet sich derzeit im Aufbau. Termine können nach
                der Eröffnung vereinbart werden. Bei Interesse können Sie mich
                bereits jetzt über das Kontaktformular erreichen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
