import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import productCollection from '@/assets/resized/product-collection.jpg'
import washcloth1 from "@/assets/resized/washcloth-1.jpg";
import washcloth2 from "@/assets/resized/washcloth-2.jpg";
import washcloth3 from "@/assets/resized/washcloth-3.jpg";
import washcloth4 from "@/assets/resized/washcloth-4.jpg";
import washcloth5 from "@/assets/resized/washcloth-5.jpg";
import washcloth6 from "@/assets/resized/washcloth-6.jpg";
import washcloth7 from "@/assets/resized/washcloth-7.jpg";
import washcloth8 from "@/assets/resized/washcloth-8.jpg";
import washcloth9 from "@/assets/resized/washcloth-9.jpg";
import washcloth10 from "@/assets/resized/washcloth-10.jpg";

export function Products() {
  const imgs = [washcloth1, washcloth2, washcloth3, washcloth4, washcloth5, washcloth6, washcloth7, washcloth8, washcloth9, washcloth10]
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
          >
          <Image
            src={productCollection}
            alt="ErgoSmart produktsamling"
            className="rounded-2xl shadow-2xl opacity-100"
            classNames={{
              wrapper: "w-full"
            }}
            />
        </motion.div>


        <div className="grid grid-cols-3 gap-2 md:gap-8 xl:mt-3 mt-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={`${imgs[0 + index]}`}
                alt={`ErgoSmart produkt ${item}`}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-100"
                classNames={{
                  wrapper: "w-full aspect-rectangle"
                }}
                />
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}