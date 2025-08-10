import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Shield, Leaf, Heart } from "lucide-react";

const features = [
  {
    title: "Kvalitet som varer",
    description: "Våre ergonomiske kluter er laget av naturlig bomull – et materiale kjent for sin mykhet, slitestyrke og god absorberingsevne. De er OEKO-TEX-sertifiserte, noe som betyr at klutene er helt frie for skadelige stoffer og trygge for deg og miljøet. Når du velger ErgoSmart, får du bærekraftig kvalitet som varer.",
    icon: Shield,
    color: "text-green-accent"
  },
  {
    title: "Det skal lønne seg å velge bærekraftig",
    description: "En bedre hverdag skal ikke gå på bekostning av mennesker og miljø. Derfor lager vi produkter som kombinerer ergonomi og bærekraft. Våre ergonomiske vaskekluter er skapt med respekt for både deg og miljøet.",
    icon: Leaf,
    color: "text-green-accent"
  },
  {
    title: "Enklere stell gir et enklere liv",
    description: "Våre ergonomiske kluter er utstyrt med fargerike håndtak som gir både et godt grep og økt velvære. De er spesielt utviklet med tanke på personlig hygiene for mennesker med nedsatt mobilitetsevne, men de kan benyttes av alle som ønsker en mer fullstendig og helhetlig rengjøring av kroppen sin.",
    icon: Heart,
    color: "text-green-accent"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardBody className="p-8 text-center">
                  <feature.icon className={`w-16 h-16 mx-auto mb-6 ${feature.color}`} />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}