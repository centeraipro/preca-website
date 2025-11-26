import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Star, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export function Services() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const scrollToSlide = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Soluciones Profesionales</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones adaptadas a cada necesidad de precalificación
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            setApi={setCarouselApi}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="h-full p-1"
                  >
                    <Card className="h-full group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 flex flex-col bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div 
                            className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <service.icon className="h-7 w-7 text-primary" />
                          </motion.div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></div>
                            <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/70 transition-colors"></div>
                            <div className="w-2 h-2 rounded-full bg-primary/10 group-hover:bg-primary/40 transition-colors"></div>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between relative z-10">
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
                            <Button 
                              variant="outline" 
                              className="w-full group/btn relative overflow-hidden border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                              <span className="relative z-10">Más información</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
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
                                className="w-full gap-2 group/btn relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                                size="lg"
                                onClick={() => window.open('https://wa.me/529613168341', '_blank')}
                              >
                                <MessageCircle className="h-5 w-5 group-hover/btn:animate-bounce" />
                                <span className="relative z-10">Contactar por WhatsApp</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom styled navigation buttons */}
            <CarouselPrevious className="left-[-50px] h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300" />
            <CarouselNext className="right-[-50px] h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300" />
          </Carousel>
          
          {/* Interactive progress indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mt-8"
          >
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-1.5 w-12 rounded-full transition-all duration-500 hover:scale-110 ${
                  current === index
                    ? "bg-primary w-16 shadow-lg shadow-primary/50"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Ir al servicio ${index + 1}`}
              ></button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
