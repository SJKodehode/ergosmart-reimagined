import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export function HealthcareSection() {
  return (
    <section className="py-20 bg-green-light/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enklere pleie og stell for helsepersonell
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            Flere av våre ergonomiske, hygieniske kluter er utstyrt med lange håndtak (35 cm på hver side), 
            spesielt utviklet for assistert pleie. Den innovative designløsningen gjør det mulig for 
            helsepersonell å utføre kroppsvask uten å måtte benytte ensidige og gjentagende bevegelser av hånd, 
            noe som reduserer risikoen for belastningsskader i nakke, skuldre, albuer og håndledd.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="shadow-lg">
                <CardBody className="p-0">
                  <Image
                    src={`https://images.unsplash.com/photo-${1559757148 + index}000000-healthcare-professional-assisting-patient?w=400&h=300&fit=crop`}
                    alt={`Assistert pleie bilde ${item}`}
                    className="w-full h-64 object-cover"
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}