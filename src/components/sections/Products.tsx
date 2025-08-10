import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import productCollection from "@/assets/product-collection.jpg";

export function Products() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Våre produkter</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-foreground">
            Spesialdesignede ergonomiske håndklær utviklet for helsesektoren med strategisk 
            plasserte gripehåndtak og forsterkede sømmer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Image
            src={productCollection}
            alt="ErgoSmart produktsamling"
            className="rounded-2xl shadow-2xl"
            classNames={{
              wrapper: "w-full"
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={`https://images.unsplash.com/photo-${1580000000 + index}000000-ergonomic-towel-product?w=400&h=400&fit=crop`}
                alt={`ErgoSmart produkt ${item}`}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                classNames={{
                  wrapper: "w-full aspect-square"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}