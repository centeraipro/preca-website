import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Video } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Fundamentos del Arrendamiento",
    description: "Aprende los conceptos básicos del arrendamiento inmobiliario en México.",
    duration: "4 semanas",
    level: "Básico",
  },
  {
    icon: GraduationCap,
    title: "Evaluación Crediticia Profesional",
    description: "Domina las técnicas de evaluación crediticia y análisis de riesgo.",
    duration: "6 semanas",
    level: "Intermedio",
  },
  {
    icon: Video,
    title: "Gestión de Propiedades",
    description: "Estrategias avanzadas para la administración de propiedades en renta.",
    duration: "8 semanas",
    level: "Avanzado",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capacitación profesional para propietarios y administradores de propiedades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <motion.div 
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-accent"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <course.icon className="h-8 w-8 text-accent-foreground" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors">{course.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span className="font-semibold">⏱️ {course.duration}</span>
                    <motion.span 
                      className="px-4 py-1.5 bg-gradient-to-r from-accent/20 to-primary/20 text-accent rounded-full text-xs font-bold border border-accent/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {course.level}
                    </motion.span>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full rounded-xl font-semibold shadow-md">Ver Detalles</Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(255,255,255,0.1),transparent)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-6xl mb-6"
            >
              🎓
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 text-white">
              ¿Interesado en Capacitación Empresarial?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95 leading-relaxed">
              Ofrecemos programas personalizados para empresas inmobiliarias y equipos de
              administración de propiedades
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-xl font-bold shadow-xl">
                Solicitar Información
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
