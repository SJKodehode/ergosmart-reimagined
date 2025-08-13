import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import heroImage1 from "@/assets/resized/hero-img-1.jpg";
import heroImage2 from "@/assets/resized/hero-image-2.jpg";
import heroImage3 from "@/assets/resized/product-collection.jpg";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden md:max-w-full max-w-lg mx-auto">
      <div className="container mx-auto px-4 pb-20 pt-6">
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

            className="grid grid-cols-1 xl:grid-cols-6 md:gap-4 gap-2 md:gap-y-3 max-w-2xl xl:max-w-7xl mx-4 sm:mx-auto mb-16"
          >
            <motion.div 
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0}}
            className="md:col-span-1 md:row-span-2 xl:grid hidden xl:col-start-2">
              <Image
                src={heroImage1}
                alt="Ergonomisk klut i bruk"
                className="rounded-3xl shadow-lg opacity-100 hidden md:grid"
                fetchPriority="high"
                classNames={{
                  wrapper: "w-full h-full"
                }}
              />
            </motion.div>
            
            <motion.div 
            initial={{ opacity: 0, scale: 0.9}}
            animate={{ opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className="xl:col-span-3 xl:row-span-3 mt-10 xl:mt-0">
              <Image
                src={heroImage2}
                alt="Person bruker ergonomisk håndkle"
                className="rounded-3xl shadow-lg opacity-100 xl:h-[449px]"
                fetchPriority="high"
                classNames={{
                  wrapper: " w-full h-full"
                  
                  
                }}
              />
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.6}}
            className="md:col-span-1 md:row-span-1 xl:grid hidden xl:col-start-2">
              <Image
                src={heroImage3}
                alt="Ergonomisk klut i bruk"
                className="rounded-3xl shadow-lg opacity-100 hidden md:grid"
                fetchPriority="high"
                height={134.88}
                classNames={{
                  wrapper: "w-full h-full"
                }}
              />
            </motion.div>
            
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg max-w-4xl mx-auto text-muted-foreground">
              Våre ergonomiske kluter er utviklet for å gjøre daglige oppgaver enklere. 
              Gjennom innovativ utforming skaper vi en enklere, mer effektiv hverdag.
            </p>
            
            <Button
              size="lg"
              className="bg-hero-accent text-white font-semibold px-8 py-6 text-lg rounded-md"
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