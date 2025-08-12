import { Card, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import instructionsImage1 from '@/assets/instructions-image-1.jpg'
import instructionsImage2 from '@/assets/instructions-image-2.jpg'
import instructionsImage3 from '@/assets/instructions-image-3.jpg'



export function HealthcareSection() {
  return (
    <section className="py-20 md:py-40 bg-green-light/20">
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
          <p className="text-base md:text-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            Flere av våre ergonomiske, hygieniske kluter er utstyrt med lange håndtak (35 cm på hver side), 
            spesielt utviklet for assistert pleie. Den innovative designløsningen gjør det mulig for 
            helsepersonell å utføre kroppsvask uten å måtte benytte ensidige og gjentagende bevegelser av hånd, 
            noe som reduserer risikoen for belastningsskader i nakke, skuldre, albuer og håndledd.
          </p>
        </motion.div>

        {/* Create an array of images for easy access by index */}
        {(() => {
            const images = [instructionsImage1, instructionsImage2, instructionsImage3];
            return (
            <div
              className="grid grid-cols-2 grid-rows-2 gap-6 md:gap-8 max-w-lg mx-auto"
              style={{ gridAutoFlow: "dense" }}
            >
              {/* Image 1: top left */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="row-span-1 col-span-1"
              >
              <Card className="rounded-2xl shadow-lg overflow-hidden h-fit">
                <CardBody className="p-0 h-full">
                <Image
                  src={images[0]}
                  alt="Assistert pleie bilde 1"
                  className="w-full h-full object-cover opacity-100"
                />
                </CardBody>
              </Card>
              </motion.div>
              {/* Image 2: spans 2 rows on the right */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="row-span-2 col-span-1"
              >
              <Card className="rounded-2xl shadow-lg overflow-hidden h-fit">
                <CardBody className="p-0 h-full">
                <Image
                  src={images[1]}
                  alt="Assistert pleie bilde 2"
                  className="w-full h-full object-cover opacity-100"
                />
                </CardBody>
              </Card>
              </motion.div>
              {/* Image 3: bottom left */}
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="row-span-1 col-span-1"
              >
              <Card className="rounded-2xl shadow-lg overflow-hidden h-fit">
                <CardBody className="p-0 h-full">
                <Image
                  src={images[2]}
                  alt="Assistert pleie bilde 3"
                  className="w-full h-full object-cover opacity-100"
                />
                </CardBody>
              </Card>
              </motion.div>
            </div>
            );
        })()}
      </div>
    </section>
  );
}