import { MessageCircle, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: MessageCircle,
    title: "Verhaltenstherapie",
    description:
      "Die Verhaltenstherapie ist ein wissenschaftlich anerkanntes Verfahren zur Behandlung psychischer Erkrankungen. Sie zielt darauf ab, problematische Verhaltens- und Denkmuster zu identifizieren und positive Veränderungen zu fördern.",
  },
  {
    icon: ClipboardList,
    title: "Erstgespräch",
    description:
      "In einem ersten Gespräch lernen wir uns kennen. Sie schildern Ihr Anliegen, und wir besprechen gemeinsam, ob und wie eine Therapie für Sie hilfreich sein kann. Dieses Gespräch ist unverbindlich.",
  },
  {
    icon: ArrowRight,
    title: "Ablauf der Therapie",
    description:
      "Nach den probatorischen Sitzungen erfolgt die Beantragung der Therapie bei Ihrer Krankenkasse. Die Therapie findet in der Regel wöchentlich statt und umfasst Einzel­gespräche sowie bei Bedarf praktische Übungen.",
  },
];

export function ServicesSection() {
  return (
    <section id="angebot" className="scroll-mt-20 bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            Tätigkeitsschwerpunkte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Informationen zu meinem Behandlungsangebot und dem Ablauf einer
            Psychotherapie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="font-serif text-lg font-medium">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
