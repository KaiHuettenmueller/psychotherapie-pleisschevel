import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Subtle decorative element */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-muted blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Psychotherapeutische Praxis eröffnet bald in Friedrichsfehn
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Verhaltenstherapie für Erwachsene – evidenzbasiert und individuell
            abgestimmt auf Ihre Bedürfnisse.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="font-medium">
              <a href="#kontakt">Kontakt aufnehmen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
