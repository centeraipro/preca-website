import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";

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
    <section id="advisors" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nuestros Asesores
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipo de profesionales certificados en evaluación crediticia e inmobiliaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col border-2 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <h3 className="font-heading font-bold text-xl mb-8 leading-tight">
                    {advisor.name}
                  </h3>
                  
                  <div className="w-full space-y-3">
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Contácteme</p>
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <a href={`tel:${advisor.phone}`} className="flex flex-col gap-1 h-auto py-3">
                          <Phone className="h-5 w-5" />
                          <span className="text-[10px] font-medium">Llamar</span>
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <a href={`mailto:${advisor.email}`} className="flex flex-col gap-1 h-auto py-3">
                          <Mail className="h-5 w-5" />
                          <span className="text-[10px] font-medium">Email</span>
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <a href={`sms:${advisor.phone}`} className="flex flex-col gap-1 h-auto py-3">
                          <MessageSquare className="h-5 w-5" />
                          <span className="text-[10px] font-medium">SMS</span>
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
