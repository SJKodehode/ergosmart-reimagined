import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-card border-t rounded-t-2xl">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Ergo Smart AS</h3>
            <p className="text-muted-foreground mb-4">
              Ergonomiske, hygieniske vaskekluter spesielt designet for personlig hygiene og helsesektoren.
            </p>
            <p className="text-sm text-muted-foreground">
              Etablert 2023 • Oslo, Norge
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Inga Bjørnsons vei 31</p>
              <p>0969 Oslo</p>
              <p>Telefon: 94 07 51 09</p>
              <p>E-post: fulbert@ergosmart.no</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Våre fordeler</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• OEKO-TEX sertifisert</li>
              <li>• Bærekraftig produksjon</li>
              <li>• 30 dagers prøveperiode</li>
              <li>• Norsk kvalitet</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ergo Smart AS. Alle rettigheter forbeholdt.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Fordi smarte løsninger skaper bedre arbeidsdager.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}