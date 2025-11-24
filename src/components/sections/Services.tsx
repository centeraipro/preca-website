import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Star, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: FileCheck,
    title: "PRECA INE",
    description: "Verificación básica de identidad con credencial INE del solicitante.",
    features: ["Validación de identidad", "Proceso rápido", "Verificación digital"],
    fullDescription: "Es un servicio diseñado para realizarse sin la participación del evaluado; en caso de ser persona física, solo se necesita foto del INE por ambos lados; o cédula de RFC, en caso de ser persona moral. Se entrega PDF con reporte de antecedentes jurídicos nacionales y listas negras internacionales.",
    pricing: [
      "Persona física: $600.00",
      "Persona moral: $700.00"
    ]
  },
  {
    icon: Shield,
    title: "PRECA BÁSICA",
    description: "Evaluación fundamental que incluye verificación de identidad y referencias laborales.",
    features: ["Verificación INE", "Referencias laborales", "Historial básico"],
    fullDescription: "El proceso para este servicio lo tiene que realizar el prospecto de inquilino en su celular, Tablet o PC, con pantalla touch y correo electrónico personal. Realiza una validación de identidad automatizada, teniendo a la mano su INE. Así también, autoriza la consulta de su buró de crédito mediante firma electrónica. Se entrega reporte de buró de crédito con probabilidad de pago (en caso de persona moral, el tipo de cartera), antecedentes jurídicos; así como, el reporte en PDF de la verificación de identidad.",
    pricing: [
      "Persona física: $600.00",
      "Persona moral: $800.00"
    ]
  },
  {
    icon: Star,
    title: "PRECA PRO",
    description: "Análisis completo con evaluación crediticia y verificación exhaustiva.",
    features: ["Buró de crédito", "Referencias personales", "Verificación laboral completa"],
    fullDescription: "En la PRECA BÁSICA solo evaluábamos dos aspectos del prospecto, y ahora hemos creado un 'Módulo de evaluación de prospectos a inquilinos' el cual toma en cuenta 7 de las características más importantes del evaluado: historial crediticio (buró de crédito), capacidad de pago de acuerdo a sus ingresos comprobables y monto de renta, historial jurídico, procedencia y movilidad, antigüedad en el sector donde se desarrolla, economía familiar, y edad. El resultado que entregamos incluye un rankeo, el grado de riesgo, y la recomendación de rentarle o no y con qué requisitos. Se entregan tres documentos: PDF de verificación de identidad con biométrico, PDF con buró de crédito del prospecto a inquilino, y PDF con reporte del resultado de la evaluación del prospecto, con el rankeo, tipo de riesgo, probabilidad de pago, factor de capacidad de pago de acuerdo al monto de renta, antecedentes jurídicos, y recomendaciones.",
    pricing: [
      "Persona física: $850.00",
      "Persona moral: $1,000.00"
    ]
  },
  {
    icon: Building2,
    title: "PRECA COMPLETA",
    description: "Servicio integral con todos los niveles de verificación y seguimiento.",
    features: ["Evaluación integral", "Seguimiento personalizado", "Reporte detallado"],
    fullDescription: "El proceso para este servicio lo tiene que realizar el prospecto de inquilino en su celular, Tablet o PC, con pantalla touch y correo electrónico personal. Se realiza el proceso de la precalificación PRECA PRO, se requisita formato de solicitud de servicio, se realiza visita física a lugar de origen (principales ciudades del país), para validar información y hacer estudio socioeconómico. Se entrega reporte de buró de crédito con probabilidad de pago (en caso de persona moral, el tipo de cartera), antecedentes jurídicos; así como, el reporte en PDF, de la verificación de identidad. Además, un estudio socioeconómico y reporte de nivel de riesgo, donde se ranquea al prospecto de inquilino.",
    pricing: [
      "Persona física: $1,800.00",
      "Persona moral: $2,100.00"
    ]
  },
  {
    icon: Globe,
    title: "PRECA EXTRANJEROS",
    description: "Servicio especializado para inquilinos extranjeros con residencia en México.",
    features: ["Validación migratoria", "Referencias internacionales", "Proceso adaptado"],
    fullDescription: "El proceso para este servicio lo tiene que realizar el prospecto de inquilino en su celular, Tablet o PC, con pantalla touch y correo electrónico personal. Realiza una validación de identidad automatizada, teniendo a la mano su PASAPORTE. Se entrega reporte de antecedentes jurídicos nacionales e internacionales; así como, el reporte en PDF, de la verificación de identidad. Es importante mencionar, que los extranjeros que ya tengan residencia permanente en el país, que ya tengan CURP, a ellos se les hace el proceso de PRECA BÁSICA o PRECA PRO, ya que pueden contar con buró de crédito nacional.",
    pricing: ["$850.00 MX"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones adaptadas a cada necesidad de precalificación
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Más información
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-base pt-4">
                          {service.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-4">
                        {'aspects' in service && Array.isArray(service.aspects) && (
                          <div>
                            <h3 className="font-semibold text-lg mb-3">Aspectos a evaluar</h3>
                            <ul className="space-y-2">
                              {service.aspects.map((aspect: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary font-semibold">{idx + 1}.</span>
                                  <span>{aspect}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {'deliverables' in service && Array.isArray(service.deliverables) && (
                          <div>
                            <h3 className="font-semibold text-lg mb-3">Entregables</h3>
                            <ul className="space-y-2">
                              {service.deliverables.map((deliverable: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Precios</h3>
                          <ul className="space-y-2">
                            {service.pricing.map((price, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {price}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className="w-full gap-2" 
                          size="lg"
                          onClick={() => window.open('https://wa.me/529613168341', '_blank')}
                        >
                          <MessageCircle className="h-5 w-5" />
                          Contactar por WhatsApp
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
