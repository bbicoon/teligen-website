import HeroSection from "./_components/hero-section";
import BusinessSection from "./_components/business-section";
import ContactSection from "./_components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BusinessSection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
