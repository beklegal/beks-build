import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseBEKs from "@/components/sections/WhyChooseBEKs";
import ProcessSection from "@/components/sections/ProcessSection";
import TechStack from "@/components/sections/TechStack";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section id="services">
          <ServicesGrid />
        </section>
        <section id="why-us">
          <WhyChooseBEKs />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <TechStack />
        <CTASection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
