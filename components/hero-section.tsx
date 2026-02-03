import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

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
