import { motion } from "framer-motion";
import { Phone, Mail, Users } from "lucide-react";

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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Equipo Especializado</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Nuestros Asesores
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Profesionales certificados listos para ayudarte en tu proceso de precalificación
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 60
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-primary via-primary/50 to-primary/20 hover:from-primary hover:via-primary/70 hover:to-primary/40 transition-all duration-300">
                <div className="relative bg-card rounded-2xl p-8 h-full flex flex-col gap-6">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem] rounded-tr-2xl"></div>
                  
                  {/* Name */}
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                      {advisor.name}
                    </h3>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="flex flex-col gap-4 mt-auto">
                    {/* Phone */}
                    <a
                      href={`tel:${advisor.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group/item"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors duration-200">
                        <Phone className="h-5 w-5 text-primary group-hover/item:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Teléfono</p>
                        <p className="text-sm font-medium text-foreground">{advisor.phone}</p>
                      </div>
                    </a>
                    
                    {/* Email */}
                    <a
                      href={`mailto:${advisor.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group/item"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors duration-200">
                        <Mail className="h-5 w-5 text-primary group-hover/item:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground break-all">{advisor.email}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
