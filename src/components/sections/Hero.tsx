import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light via-accent-light to-background opacity-70" />
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary-glow rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full text-sm font-semibold text-foreground border border-primary/20">
                ✨ Servicio Líder en México
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-8 leading-tight">
              Precalificación de Inquilinos{" "}
              <span className="text-gradient animate-pulse">Confiable y Segura</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Profesionalizamos el arrendamiento inmobiliario en México con servicios
            especializados de evaluación crediticia y verificación de inquilinos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl font-semibold shadow-lg">
                Solicitar Precalificación
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl font-semibold border-2">
                Conocer Servicios
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { text: "Cobertura Nacional", icon: "🇲🇽" },
              { text: "Resultados en 24-48hrs", icon: "⚡" },
              { text: "Verificación Profesional", icon: "✓" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md transition-all"
              >
                <span className="text-3xl">{item.icon}</span>
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-semibold text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
