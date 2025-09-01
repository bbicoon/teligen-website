import HeroSection from "./_components/hero-section";
import SolutionsSection from "./_components/solutions-section";
import ContactSection from "./_components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
