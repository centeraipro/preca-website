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
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones adaptadas a cada necesidad de precalificación
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
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
