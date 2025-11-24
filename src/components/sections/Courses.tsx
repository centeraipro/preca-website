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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <course.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">Duración: {course.duration}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                  <Button className="w-full">Ver Detalles</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            ¿Interesado en Capacitación Empresarial?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Ofrecemos programas personalizados para empresas inmobiliarias y equipos de
            administración de propiedades
          </p>
          <Button size="lg" variant="secondary">
            Solicitar Información
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
