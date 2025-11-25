import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, User } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative flex h-auto min-h-[200px] w-full max-w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-card/70 backdrop-blur-sm px-6 py-5 transition-all duration-700 hover:border-primary/40 hover:bg-card hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative inline-block rounded-full bg-primary/20 p-2">
                    <User className="size-5 text-primary" />
                  </span>
                  <h3 className="text-lg font-bold font-heading text-foreground">{advisor.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-primary" />
                    <p className="text-sm text-foreground">{advisor.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-primary" />
                    <p className="text-xs text-muted-foreground break-all">{advisor.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="default" 
                  asChild 
                  className="transition-all duration-300"
                >
                  <a href={`tel:${advisor.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-xs font-medium">Llamar</span>
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  asChild 
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={`mailto:${advisor.email}`} className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-xs font-medium">Email</span>
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  asChild 
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={`sms:${advisor.phone}`} className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs font-medium">SMS</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
