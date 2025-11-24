import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const courses = [
  {
    title: "Por qué precalificar a un prospecto a inquilino",
    description: "Este curso te enseñará la importancia de la precalificación de prospectos a inquilinos en el mercado de rentas inmobiliarias. Aprenderás a identificar características clave, preguntas que debes hacer y cómo evaluar la capacidad de pago de un potencial inquilino. Con herramientas prácticas y estrategias efectivas, estarás en condiciones de tomar decisiones informadas que beneficien tu negocio.",
    pdfUrl: "/courses/por-que-precalificar.pdf",
  },
  {
    title: "Cómo realizar una estimación de valor en inmueble en renta",
    description: "Este curso te enseñará los principios y métodos para realizar una estimación de valor en un inmueble destinado a renta. A través de ejemplos prácticos y herramientas de análisis, podrás entender cómo calcular el valor de una propiedad de manera efectiva y justa.",
    pdfUrl: "/courses/estimacion-valor.pdf",
  },
  {
    title: "Como evitar fraudes inmobiliarios",
    description: "Este curso está diseñado para ayudar a los compradores de propiedades en México a identificar y prevenir fraudes inmobiliarios. A través de ejemplos prácticos, información legal y estrategias de prevención, los participantes aprenderán a reconocer las señales de advertencia y a tomar decisiones informadas al realizar transacciones inmobiliarias.",
    pdfUrl: "/courses/evitar-fraudes.pdf",
  },
  {
    title: "EL ROI EN INVERSIÓN DE INMUEBLES EN ARRENDAMIENTO",
    description: "Este curso te enseñará los fundamentos del ROI (Retorno de la Inversión) en el contexto de los inmuebles de arrendamiento. Aprenderás a evaluar la rentabilidad de tus inversiones y a calcular el ROI correctamente, permitiéndote tomar decisiones financieras informadas. Además, exploraremos ejemplos prácticos y técnicas que puedes aplicar en el mercado real.",
    pdfUrl: "/courses/roi-inmuebles.pdf",
  },
  {
    title: "CUMPLIMIENTO DE LA LEY ANTILAVADO DE DINERO",
    description: "Este curso proporciona una visión general de los aspectos clave que deben considerarse para cumplir con la ley antilavado de dinero en el contexto de la renta de un inmueble en México. A través de una combinación de teoría y casos prácticos, los participantes aprenderán sobre los requisitos legales, las mejores prácticas y cómo implementar medidas efectivas para prevenir el lavado de dinero en sus operaciones inmobiliarias.",
    pdfUrl: "/courses/ley-antilavado.pdf",
  },
];

export function Courses() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

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
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedPdf(course.pdfUrl)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
          <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-0">
            <DialogHeader className="px-6 pt-6 pb-4 border-b">
              <DialogTitle className="text-2xl font-heading">Vista previa del curso</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-hidden px-6 pb-4">
              {selectedPdf && (
                <iframe
                  src={selectedPdf}
                  className="w-full h-full rounded-lg border"
                  title="PDF Preview"
                />
              )}
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6 pt-4 border-t bg-muted/30">
              <Button variant="outline" onClick={() => setSelectedPdf(null)}>
                Cerrar
              </Button>
              <Button asChild>
                <a href={selectedPdf || ""} download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
