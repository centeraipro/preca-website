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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <DisplayCards
                cards={[
                  {
                    icon: <User className="size-4 text-primary" />,
                    title: advisor.name,
                    iconClassName: "bg-primary/20",
                    titleClassName: "text-foreground",
                    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                  },
                  {
                    icon: <Phone className="size-4 text-primary" />,
                    title: advisor.phone,
                    description: "Teléfono",
                    iconClassName: "bg-primary/20",
                    titleClassName: "text-foreground",
                    className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                  },
                  {
                    icon: <Mail className="size-4 text-primary" />,
                    title: advisor.email,
                    description: "Correo electrónico",
                    iconClassName: "bg-primary/20",
                    titleClassName: "text-foreground text-sm",
                    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                  },
                ]}
              />
              
              <div className="flex gap-3 mt-4">
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
