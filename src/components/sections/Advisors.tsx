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
              <Card className="group overflow-hidden h-full flex flex-col border-2 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm hover:scale-[1.02]">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  {/* Name with gradient background */}
                  <div className="w-full mb-8 pb-6 border-b border-border/50">
                    <h3 className="font-heading font-bold text-xl leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {advisor.name}
                    </h3>
                  </div>
                  
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                      <p className="text-sm font-semibold text-primary/80 px-3">Contacto Directo</p>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="flex-col gap-2 h-auto py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group-hover:border-primary/20"
                      >
                        <a href={`tel:${advisor.phone}`} className="flex flex-col gap-1">
                          <Phone className="h-5 w-5" />
                          <span className="text-[10px] font-medium">Llamar</span>
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="flex-col gap-2 h-auto py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group-hover:border-primary/20"
                      >
                        <a href={`mailto:${advisor.email}`} className="flex flex-col gap-1">
                          <Mail className="h-5 w-5" />
                          <span className="text-[10px] font-medium">Email</span>
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild 
                        className="flex-col gap-2 h-auto py-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group-hover:border-primary/20"
                      >
                        <a href={`sms:${advisor.phone}`} className="flex flex-col gap-1">
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
