import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield, Star, Building2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServices } from "@/hooks/use-services";
import type { Service } from "@/types/service";
import { ServiceTypeDialog, type GroupedService } from "@/components/ServiceTypeDialog";

// Map service names to icons
const getServiceIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("ine")) return FileCheck;
  if (nameLower.includes("basica") || nameLower.includes("básica")) return Shield;
  if (nameLower.includes("pro")) return Star;
  if (nameLower.includes("completa")) return Building2;
  return Shield;
};

// Get short features from description
const getFeatures = (baseName: string): string[] => {
  const nameLower = baseName.toLowerCase();
  
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
const getShortDescription = (baseName: string): string => {
  const nameLower = baseName.toLowerCase();
  
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
  return "Servicio de precalificación profesional.";
};

// Extract base name by removing FISICA/MORAL suffix
const getBaseName = (name: string): string => {
  return name.replace(/\s*(FISICA|MORAL)\s*$/i, "").trim();
};

// Group services by base name
const groupServices = (services: Service[]): GroupedService[] => {
  const groups: Record<string, GroupedService> = {};

  services.forEach((service) => {
    const baseName = getBaseName(service.name);
    const nameLower = service.name.toLowerCase();
    const isMoral = nameLower.includes("moral");

    if (!groups[baseName]) {
      groups[baseName] = {
        baseName,
        displayName: baseName,
        fisica: undefined,
        moral: undefined,
      };
    }

    if (isMoral) {
      groups[baseName].moral = service;
    } else {
      groups[baseName].fisica = service;
    }
  });

  return Object.values(groups);
};

// Get price range display
const getPriceRange = (group: GroupedService): string => {
  const prices: number[] = [];
  if (group.fisica) prices.push(group.fisica.priceMxn);
  if (group.moral) prices.push(group.moral.priceMxn);
  
  if (prices.length === 0) return "";
  
  const minPrice = Math.min(...prices);
  return `Desde $${minPrice.toLocaleString("es-MX")}.00 MXN`;
};

export function Services() {
  const { data: services, isLoading, error } = useServices();
  const [selectedGroup, setSelectedGroup] = useState<GroupedService | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const groupedServices = useMemo(() => {
    if (!services) return [];
    return groupServices(services);
  }, [services]);

  const handleCardClick = (group: GroupedService) => {
    setSelectedGroup(group);
    setDialogOpen(true);
  };

  return (
    <section id="services" className="min-h-screen py-12 bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden flex flex-col justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
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

        {/* Services Grid - Now showing 4 grouped cards */}
        {groupedServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupedServices.map((group, index) => {
              const ServiceIcon = getServiceIcon(group.baseName);
              const features = getFeatures(group.baseName);
              const shortDescription = getShortDescription(group.baseName);
              const priceRange = getPriceRange(group);
              const sampleService = group.fisica || group.moral;
              const isFileService = sampleService?.formSchema.fields.some(f => f.type === "file");

              return (
                <motion.div
                  key={group.baseName}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card 
                    className="h-full group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 flex flex-col bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                    onClick={() => handleCardClick(group)}
                  >
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
                          <span className="text-sm font-bold text-primary">{priceRange}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {group.displayName}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-3">
                        {shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                      <ul className="space-y-2 mb-4">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
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
                      >
                        <span className="relative z-10">Seleccionar</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Service Type Selection Dialog */}
      <ServiceTypeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        groupedService={selectedGroup}
      />
    </section>
  );
}
