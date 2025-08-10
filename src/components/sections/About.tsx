import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Users, Award, Target, Leaf } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Fagkompetanse",
    description: "Vårt team består av helsefagarbeidere og sykepleiere som sammen sikrer at produktene våre både er praktiske og tilfredsstiller strenge kvalitetskrav."
  },
  {
    icon: Award,
    title: "Overlegen produktkvalitet", 
    description: "Vi bruker kun materialer av høyeste kvalitet, som er testet, og har fått sertifiseringen OEKO-TEX 100 standard."
  },
  {
    icon: Target,
    title: "Fokus på langsiktig samarbeid",
    description: "Vi behandler hver kunde som en partner, og jobber systematisk med oppfølging og videreutvikling av våre løsninger."
  },
  {
    icon: Leaf,
    title: "Bærekraftig produksjon",
    description: "Vårt fokus på bærekraft sikrer at produksjonen følger strenge miljøstandarder med økologisk bomull og resirkulerte materialer."
  }
];

export function About() {
  return (
    <section className="py-20 bg-green-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Om oss</h2>
          <p className="text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            ErgoSmart AS er et norsk selskap etablert av yrkesaktive personer med solid helsefaglig bakgrunn. 
            Vi utvikler og produserer ergonomiske, hygieniske vaskekluter spesielt designet for personlig hygiene. 
            Vår ambisjon er å skape produkter som forbedrer hverdagen for mennesker med ulike behov og bidrar til 
            økt komfort og velvære. Vi ønsker å være en pålitelig og bærekraftig leverandør med fokus på kvalitet, 
            ergonomi og miljø.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Hvorfor velge oss?</h3>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12 text-muted-foreground">
            Ergo Smart AS skiller seg ut i markedet gjennom vår dype forståelse for helsesektorens unike utfordringer. 
            Vår grunnlegger har over 15 års erfaring som sykepleier og helsefagarbeider i eldreomsorgen, og har personlig 
            opplevd behovet for bedre ergonomiske løsninger i hverdagen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardBody className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-green-accent" />
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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