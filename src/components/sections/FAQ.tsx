import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el proceso de precalificación?",
    answer:
      "El tiempo de respuesta varía según el tipo de servicio: PRECA INE tarda 24 horas, mientras que servicios más completos como PRECA PRO o PRECA COMPLETA pueden tardar entre 24-48 horas hábiles.",
  },
  {
    question: "¿Qué documentos necesito para la precalificación?",
    answer:
      "Los documentos básicos incluyen INE vigente, comprobantes de ingresos (recibos de nómina o estados de cuenta), comprobante de domicilio y referencias personales. Dependiendo del servicio, pueden requerirse documentos adicionales.",
  },
  {
    question: "¿La precalificación afecta mi historial crediticio?",
    answer:
      "No, nuestro proceso de consulta no afecta tu score crediticio. Realizamos consultas suaves que no quedan registradas como solicitudes de crédito en el buró.",
  },
  {
    question: "¿Trabajan con extranjeros?",
    answer:
      "Sí, contamos con PRECA EXTRANJEROS, un servicio especializado para personas extranjeras con residencia en México. Validamos documentos migratorios y adaptamos el proceso según las circunstancias particulares.",
  },
  {
    question: "¿En qué ciudades tienen cobertura?",
    answer:
      "Tenemos cobertura nacional en toda la República Mexicana. Nuestro equipo de asesores certificados puede realizar verificaciones en cualquier estado del país.",
  },
  {
    question: "¿Qué incluye el reporte de precalificación?",
    answer:
      "El reporte incluye verificación de identidad, análisis crediticio, validación de referencias laborales y personales, y una recomendación final sobre la viabilidad del arrendamiento. Los reportes más completos incluyen análisis de capacidad de pago y seguimiento.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl px-6 border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
