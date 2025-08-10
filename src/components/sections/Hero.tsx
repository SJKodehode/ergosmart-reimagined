import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import heroImage1 from "@/assets/hero-image-1.jpg";
import heroImage2 from "@/assets/hero-image-2.jpg";
import heroImage3 from "@/assets/hero-image-3.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            En <span className="text-hero-accent">enklere</span> hverdag.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16"
          >
            <div className="md:col-span-1">
              <Image
                src={heroImage1}
                alt="Ergonomisk klut i bruk"
                className="rounded-3xl shadow-lg"
                classNames={{
                  wrapper: "w-full h-full"
                }}
              />
            </div>
            
            <div className="md:col-span-3">
              <Image
                src={heroImage2}
                alt="Person bruker ergonomisk håndkle"
                className="rounded-3xl shadow-lg"
                classNames={{
                  wrapper: "w-full h-full"
                }}
              />
            </div>
            
            <div className="md:col-span-1">
              <Image
                src={heroImage3}
                alt="Assistert pleie"
                className="rounded-3xl shadow-lg"
                classNames={{
                  wrapper: "w-full h-full"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground">
              Våre ergonomiske kluter er utviklet for å gjøre daglige oppgaver enklere. 
              Gjennom innovativ utforming skaper vi en enklere, mer effektiv hverdag.
            </p>
            
            <Button
              size="lg"
              className="bg-hero-accent text-white font-semibold px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Kontakt oss
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}