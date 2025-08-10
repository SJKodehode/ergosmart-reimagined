import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Plasser håndkleet bak ryggen med den lengste delen over skulderen, slik at du kan holde i begge endene."
  },
  {
    number: "2", 
    title: "Beveg håndkleet opp og ned langs ryggen med en lett skrubbende bevegelse for å rengjøre hele ryggen effektivt."
  },
  {
    number: "3",
    title: "For vanskelig tilgjengelige områder, kan du holde i begge endene og bevege håndkleet fra side til side."
  },
  {
    number: "4",
    title: "Produktet kan også brukes med assistanse fra helsepersonell for pleietrengende mennesker med svært begrenset bevegelighet."
  }
];

const benefits = [
  "Ergonomisk design som gjør det enkelt å nå hele overkroppen",
  "Mykt, absorberende materiale som er skånsomt mot huden", 
  "Perfekt for personer med redusert bevegelighet",
  "Slitesterkt materiale som tåler hyppig bruk og vask"
];

export function Instructions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Slik bruker du produktet
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={`https://images.unsplash.com/photo-${1580000000 + index}000000-person-using-towel?w=300&h=300&fit=crop`}
                  alt={`Bruksanvisning steg ${item}`}
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <p className="text-lg leading-relaxed pt-2">
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Fordeler</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Check className="w-6 h-6 text-green-accent flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}