import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/ui/custom-accordion";

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
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Información Esencial</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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
          <CustomAccordion
            type="single"
            collapsible
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <CustomAccordionItem
                key={index}
                value={`item-${index}`}
              >
                <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
                <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
              </CustomAccordionItem>
            ))}
          </CustomAccordion>
        </motion.div>
      </div>
    </section>
  );
}
