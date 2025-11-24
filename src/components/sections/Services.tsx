import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Star, Building2, Globe } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "PRECA INE",
    description: "Verificación básica de identidad con credencial INE del solicitante.",
    features: ["Validación de identidad", "Proceso rápido", "Verificación digital"],
  },
  {
    icon: Shield,
    title: "PRECA BÁSICA",
    description: "Evaluación fundamental que incluye verificación de identidad y referencias laborales.",
    features: ["Verificación INE", "Referencias laborales", "Historial básico"],
  },
  {
    icon: Star,
    title: "PRECA PRO",
    description: "Análisis completo con evaluación crediticia y verificación exhaustiva.",
    features: ["Buró de crédito", "Referencias personales", "Verificación laboral completa"],
  },
  {
    icon: Building2,
    title: "PRECA COMPLETA",
    description: "Servicio integral con todos los niveles de verificación y seguimiento.",
    features: ["Evaluación integral", "Seguimiento personalizado", "Reporte detallado"],
  },
  {
    icon: Globe,
    title: "PRECA EXTRANJEROS",
    description: "Servicio especializado para inquilinos extranjeros con residencia en México.",
    features: ["Validación migratoria", "Referencias internacionales", "Proceso adaptado"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Soluciones Personalizadas
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones adaptadas a cada necesidad de precalificación
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <motion.div 
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-primary transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
