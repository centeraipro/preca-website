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
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
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
                className="bg-card rounded-lg px-6 border shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
