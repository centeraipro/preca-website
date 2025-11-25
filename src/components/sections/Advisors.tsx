import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

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

        <div className="flex justify-center items-center min-h-[600px]">
          <div className="grid [grid-template-areas:'stack'] place-items-center">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 2.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className={cn(
                  "[grid-area:stack] relative flex h-auto min-h-[280px] w-full max-w-[26rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-card/70 backdrop-blur-sm px-6 py-6 shadow-xl hover:shadow-2xl transition-all duration-700 before:absolute before:w-[100%] before:rounded-xl before:h-[100%] before:content-[''] before:bg-blend-overlay before:left-0 before:top-0",
                  index === 0 && "border-border hover:border-primary/40 hover:-translate-y-12 before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 z-30",
                  index === 1 && "translate-x-20 translate-y-12 border-border hover:border-primary/40 hover:-translate-y-2 before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 z-20",
                  index === 2 && "translate-x-40 translate-y-24 border-border hover:border-primary/40 hover:translate-y-14 z-10"
                )}
              >
                <div className="flex items-start gap-3 mb-6">
                  <span className="relative inline-block rounded-full bg-primary/20 p-2 flex-shrink-0">
                    <User className="size-5 text-primary" />
                  </span>
                  <h3 className="text-base font-bold font-heading text-foreground leading-tight">
                    {advisor.name}
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">{advisor.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground break-all">{advisor.email}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button 
                    size="sm" 
                    variant="default" 
                    asChild 
                    className="transition-all duration-300 flex-1 min-w-[80px]"
                  >
                    <a href={`tel:${advisor.phone}`} className="flex items-center gap-1.5 justify-center">
                      <Phone className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">Llamar</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1 min-w-[80px]"
                  >
                    <a href={`mailto:${advisor.email}`} className="flex items-center gap-1.5 justify-center">
                      <Mail className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">Email</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1 min-w-[80px]"
                  >
                    <a href={`sms:${advisor.phone}`} className="flex items-center gap-1.5 justify-center">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">SMS</span>
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
