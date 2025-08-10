import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HealthcareSection } from "@/components/sections/HealthcareSection";
import { Instructions } from "@/components/sections/Instructions";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HealthcareSection />
        <Instructions />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
