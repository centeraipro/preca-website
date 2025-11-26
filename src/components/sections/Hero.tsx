import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-background -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Precalificación de Inquilinos{" "}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Confiable y Segura
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Profesionalizamos el arrendamiento inmobiliario en México con servicios
            especializados de evaluación crediticia y verificación de inquilinos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg" asChild>
              <a href="https://wa.me/529613168341" target="_blank" rel="noopener noreferrer">
                Solicitar Precalificación
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg"
              onClick={() => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  const offset = 80;
                  const targetPosition = servicesSection.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
            >
              Conocer Servicios
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              "Cobertura Nacional",
              "Resultados en 24-48hrs",
              "Verificación Profesional",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center justify-center gap-2 text-foreground/80"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.9 + index * 0.15,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
