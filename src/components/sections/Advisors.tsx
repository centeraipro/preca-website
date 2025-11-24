import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import lilianaImg from "@/assets/liliana.png";
import erikaImg from "@/assets/erika.png";
import mariaFernandaImg from "@/assets/maria-fernanda.png";

const advisors = [
  {
    name: "LILIANA HERNÁNDEZ HERNÁNDEZ",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    description: "¡La clave para seleccionar a los inquilinos ideales y maximizar tus inversiones!",
    image: lilianaImg,
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "ERIKA PATRICIA HERNÁNDEZ",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    description: "¡La clave para seleccionar a los inquilinos ideales y maximizar tus inversiones!",
    image: erikaImg,
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "LIC. MARIA FERNANDA HIDALGO LERMA",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    description: "¡La clave para seleccionar a los inquilinos ideales y maximizar tus inversiones!",
    image: mariaFernandaImg,
    phone: "2213518202",
    email: "fer.hidalgo@preca.com.mx",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nuestros Asesores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipo de profesionales certificados en evaluación crediticia e inmobiliaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/10">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {advisor.title}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {advisor.description}
                  </p>
                  <div className="w-full space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Contácteme</p>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={`tel:${advisor.phone}`}>
                          <Phone className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={`mailto:${advisor.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={`sms:${advisor.phone}`}>
                          <MessageSquare className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
