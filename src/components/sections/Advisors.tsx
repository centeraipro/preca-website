import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Asesores Certificados",
  },
  {
    icon: Award,
    value: "10+",
    label: "Años de Experiencia",
  },
  {
    icon: Clock,
    value: "24-48hrs",
    label: "Tiempo de Respuesta",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Satisfacción del Cliente",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nuestros Asesores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipo de profesionales certificados en evaluación crediticia e
            inmobiliaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="pt-8 pb-6 relative">
                  <motion.div 
                    className="h-20 w-20 rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className="h-10 w-10 text-primary-foreground" />
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Profesionales Comprometidos
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está formado por especialistas en evaluación
                crediticia, derecho inmobiliario y atención al cliente. Cada asesor
                recibe capacitación continua para ofrecer el mejor servicio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Certificaciones en evaluación crediticia</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Conocimiento del mercado inmobiliario mexicano</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span>Atención personalizada y confidencial</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">¿Quieres unirte?</div>
              <p className="text-muted-foreground mb-4">
                Estamos buscando profesionales apasionados por el sector inmobiliario
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
              >
                Únete al Equipo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
