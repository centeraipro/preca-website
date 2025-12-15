import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Star, Building2, Globe, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { useServices } from "@/hooks/use-services";
import { ServiceFormDialog } from "@/components/ServiceFormDialog";
import type { Service } from "@/types/service";

// Map service names to icons
const getServiceIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("ine")) return FileCheck;
  if (nameLower.includes("basica") || nameLower.includes("básica")) return Shield;
  if (nameLower.includes("pro")) return Star;
  if (nameLower.includes("completa")) return Building2;
  if (nameLower.includes("extranjero")) return Globe;
  return Shield;
};

// Get short features from description
const getFeatures = (service: Service): string[] => {
  const nameLower = service.name.toLowerCase();
  
  if (nameLower.includes("ine")) {
    return ["Validación de identidad", "Proceso rápido", "Sin participación del evaluado"];
  }
  if (nameLower.includes("basica") || nameLower.includes("básica")) {
    return ["Verificación INE", "Buró de crédito", "Antecedentes jurídicos"];
  }
  if (nameLower.includes("pro")) {
    return ["7 aspectos evaluados", "Rankeo de riesgo", "Recomendación detallada"];
  }
  if (nameLower.includes("completa")) {
    return ["Visita física", "Estudio socioeconómico", "Evaluación integral"];
  }
  return ["Verificación completa", "Proceso seguro", "Resultados rápidos"];
};

// Get short description for card
const getShortDescription = (service: Service): string => {
  const nameLower = service.name.toLowerCase();
  
  if (nameLower.includes("ine")) {
    return "Verificación básica de identidad con credencial INE o cédula RFC.";
  }
  if (nameLower.includes("basica") || nameLower.includes("básica")) {
    return "Evaluación fundamental con verificación de identidad y buró de crédito.";
  }
  if (nameLower.includes("pro")) {
    return "Análisis completo con 7 aspectos evaluados y rankeo de riesgo.";
  }
  if (nameLower.includes("completa")) {
    return "Servicio integral con visita física y estudio socioeconómico.";
  }
  return service.description.slice(0, 100) + "...";
};

export function Services() {
  const { data: services, isLoading, error } = useServices();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
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

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Soluciones Profesionales</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones adaptadas a cada necesidad de precalificación
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Cargando servicios...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <p className="text-muted-foreground">Error al cargar los servicios. Por favor intente nuevamente.</p>
          </div>
        )}

        {/* Services Carousel */}
        {services && services.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
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
                {services.map((service, index) => {
                  const ServiceIcon = getServiceIcon(service.name);
                  const features = getFeatures(service);
                  const shortDescription = getShortDescription(service);
                  const isFileService = service.formSchema.fields.some(f => f.type === "file");

                  return (
                    <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                                <ServiceIcon className="h-7 w-7 text-primary" />
                              </motion.div>
                              <div className="text-right">
                                <span className="text-lg font-bold text-primary">{service.formattedPrice}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                              {service.name}
                            </CardTitle>
                            <CardDescription className="text-sm leading-relaxed">
                              {shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                            <ul className="space-y-2 mb-4">
                              {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            {isFileService && (
                              <div className="mb-3 text-xs text-muted-foreground bg-muted/50 rounded-md px-3 py-2">
                                📱 Proceso vía WhatsApp
                              </div>
                            )}

                            <Button
                              variant="outline"
                              className="w-full group/btn relative overflow-hidden border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                              onClick={() => handleServiceClick(service)}
                            >
                              <span className="relative z-10">
                                {isFileService ? "Solicitar por WhatsApp" : "Solicitar servicio"}
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              {/* Custom styled navigation buttons */}
              <CarouselPrevious className="hidden md:flex left-[-50px] h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300" />
              <CarouselNext className="hidden md:flex right-[-50px] h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300" />
            </Carousel>

            {/* Interactive progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="flex justify-center gap-2 mt-8"
            >
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-1.5 w-12 rounded-full transition-all duration-500 hover:scale-110 ${current === index
                    ? "bg-primary w-16 shadow-lg shadow-primary/50"
                    : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  aria-label={`Ir al servicio ${index + 1}`}
                ></button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Service Form Dialog */}
      {selectedService && (
        <ServiceFormDialog
          service={selectedService}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </section>
  );
}
