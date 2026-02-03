import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { InfoNotice } from "@/components/info-notice";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ColorSwitcher } from "@/components/color-switcher";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <InfoNotice />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ColorSwitcher />
    </div>
  );
}
