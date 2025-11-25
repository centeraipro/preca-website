import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";

const courses = [
  {
    title: "Por qué precalificar a un prospecto a inquilino",
    description: "Aprende a identificar y evaluar prospectos a inquilinos con herramientas prácticas para tomar decisiones informadas.",
    pdfUrl: "/courses/por-que-precalificar.pdf",
  },
  {
    title: "Cómo realizar una estimación de valor en inmueble en renta",
    description: "Domina los métodos de estimación de valor en propiedades de renta con ejemplos prácticos y herramientas de análisis.",
    pdfUrl: "/courses/estimacion-valor.pdf",
  },
  {
    title: "Como evitar fraudes inmobiliarios",
    description: "Identifica y previene fraudes inmobiliarios con estrategias prácticas y conocimiento legal aplicable en México.",
    pdfUrl: "/courses/evitar-fraudes.pdf",
  },
  {
    title: "EL ROI EN INVERSIÓN DE INMUEBLES EN ARRENDAMIENTO",
    description: "Aprende a calcular y evaluar el ROI en inversiones inmobiliarias de arrendamiento para tomar decisiones financieras informadas.",
    pdfUrl: "/courses/roi-inmuebles.pdf",
  },
  {
    title: "CUMPLIMIENTO DE LA LEY ANTILAVADO DE DINERO",
    description: "Conoce los requisitos legales y mejores prácticas para cumplir con la ley antilavado de dinero en rentas inmobiliarias.",
    pdfUrl: "/courses/ley-antilavado.pdf",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full" asChild>
                    <a href={course.pdfUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
