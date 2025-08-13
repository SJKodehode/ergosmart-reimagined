import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import instruction1 from '@/assets/resized/instructions-1.jpg'
import instruction2 from '@/assets/resized/instructions-2.jpg'
import instruction3 from '@/assets/resized/instructions-3.jpg'
import instruction4 from '@/assets/resized/instructions-4.jpg'


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
  "Perfekt for personer med redusert bevegelighets",
  "Slitesterkt materiale som tåler hyppig bruk og vask",
  "Tåler vask fra 60 °C til 90 °C, som sikrer en høy hygienestandard",
  "Inneholder ikke mikroplast, som er skadelig for miljøet"
];

export function Instructions() {
  const imgs = [instruction1, instruction2, instruction3, instruction4]
  return (
    <section className="py-20 lg:py-40 bg-background">
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

        <div className="grid xl:grid-cols-2 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto xl:max-w-full gap-16 items-center xl:-ml-60">
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-rows-2 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={`${imgs[0 + index]}`}
                  alt={`Bruksanvisning steg ${item}`}
                  className="rounded-xl shadow-lg opacity-100"
                />
              </motion.div>
            ))}
            <div className="hidden xl:grid col-span-2 col-start-1 row-start-1 row-span-2"></div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <p className="text-base md:text-lg leading-relaxed pt-2">
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
                <p className="text-base md:text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}