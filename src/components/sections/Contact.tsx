import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here we would normally send to Supabase edge function
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Melding sendt!",
        description: "Vi kommer tilbake til deg innen 24 timer på virkedager.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Feil ved sending",
        description: "Prøv igjen eller ring oss direkte på 94 07 51 09",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakt oss i dag</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-muted-foreground">
            Vi setter stor pris på dialog med både eksisterende og potensielle kunder. 
            Ta kontakt for en uforpliktende samtale om dine behov.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send oss en melding</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Navn"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      variant="bordered"
                    />
                    <Input
                      placeholder="E-post"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      variant="bordered"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Telefon"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      variant="bordered"
                    />
                    <Input
                      placeholder="Bedrift/Institusjon"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      variant="bordered"
                    />
                  </div>
                  <Textarea
                    label="Melding"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    variant="bordered"
                    minRows={4}
                    placeholder="Fortell oss om dine behov og hvordan vi kan hjelpe..."
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-accent text-white font-semibold rounded-md"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Sender..." : "Send melding"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="rounded-2xl shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6">Kontaktinformasjon</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        Inga Bjørnsons vei 31<br />
                        0969 Oslo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <p className="text-muted-foreground">94 07 51 09</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">E-post</h4>
                      <p className="text-muted-foreground">fulbert@ergosmart.no</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Responstid</h4>
                      <p className="text-muted-foreground">
                        Vi svarer normalt på alle henvendelser innen 24 timer på virkedager
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4">Våre tjenester</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Gratis produktdemonstrasjon på din arbeidsplass</li>
                  <li>• Prøveperiode på 30 dager for utvalgte produkter</li>
                  <li>• Skreddersydde opplæringsøkter for personalet</li>
                  <li>• Kontinuerlig oppfølging og støtte etter kjøp</li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}