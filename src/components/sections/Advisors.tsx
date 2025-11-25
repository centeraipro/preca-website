import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, Users } from "lucide-react";

const advisors = [
  {
    name: "LILIANA HERNÁNDEZ HERNÁNDEZ",
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "ERIKA PATRICIA HERNÁNDEZ",
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "LIC. MARIA FERNANDA HIDALGO LERMA",
    phone: "2213518202",
    email: "fer.hidalgo@preca.com.mx",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Equipo Especializado</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nuestros Asesores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales certificados listos para ayudarte en tu proceso de precalificación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl bg-card">
                <CardContent className="p-6 flex flex-col gap-6">
                  {/* Name */}
                  <h3 className="font-heading font-bold text-lg text-center">
                    {advisor.name}
                  </h3>
                  
                  {/* Contact Buttons */}
                  <div className="grid grid-cols-1 gap-3">
                    <Button 
                      size="lg" 
                      asChild 
                      className="w-full justify-start gap-3 h-12"
                    >
                      <a href={`tel:${advisor.phone}`}>
                        <Phone className="h-5 w-5" />
                        <span>Llamar ahora</span>
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      asChild 
                      className="w-full justify-start gap-3 h-12"
                    >
                      <a href={`mailto:${advisor.email}`}>
                        <Mail className="h-5 w-5" />
                        <span>Enviar email</span>
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      asChild 
                      className="w-full justify-start gap-3 h-12"
                    >
                      <a href={`sms:${advisor.phone}`}>
                        <MessageSquare className="h-5 w-5" />
                        <span>Enviar SMS</span>
                      </a>
                    </Button>
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
