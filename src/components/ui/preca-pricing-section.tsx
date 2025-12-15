"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { FileCheck, Shield, Star, Building2, CheckCheck, Loader2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { useServices } from "@/hooks/use-services";
import type { Service } from "@/types/service";
import { useNavigate } from "react-router-dom";

interface GroupedService {
  baseName: string;
  displayName: string;
  fisica: Service | undefined;
  moral: Service | undefined;
}

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

// Map service names to icons
const getServiceIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes("ine")) return FileCheck;
  if (nameLower.includes("basica") || nameLower.includes("básica")) return Shield;
  if (nameLower.includes("pro")) return Star;
  if (nameLower.includes("completa")) return Building2;
  return Shield;
};

// Get features from description
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

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0"
              ? "text-black"
              : "text-muted-foreground hover:text-black",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-neutral-300 border-neutral-300 bg-gradient-to-t from-neutral-100 via-neutral-200 to-neutral-300"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Persona Física</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1"
              ? "text-black"
              : "text-muted-foreground hover:text-black",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10  w-full  rounded-full border-4 shadow-sm shadow-neutral-300 border-neutral-300 bg-gradient-to-t from-neutral-100 via-neutral-200 to-neutral-300"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Persona Moral</span>
        </button>
      </div>
    </div>
  );
};

export default function PrecaPricingSection() {
  const [personType, setPersonType] = useState<"fisica" | "moral">("fisica");
  const pricingRef = useRef<HTMLDivElement>(null);
  const { data: services, isLoading, error } = useServices();
  const navigate = useNavigate();

  const groupedServices = useMemo(() => {
    if (!services) return [];
    return groupServices(services);
  }, [services]);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePersonType = (value: string) =>
    setPersonType(Number.parseInt(value) === 0 ? "fisica" : "moral");

  const handleCardClick = (group: GroupedService) => {
    const selectedService = personType === "fisica" ? group.fisica : group.moral;
    if (selectedService) {
      navigate(`/servicio/${selectedService.id}`);
    }
  };

  // Sort services to put PRECA COMPLETA first
  const sortedServices = useMemo(() => {
    return [...groupedServices].sort((a, b) => {
      const aIsCompleta = a.baseName.toLowerCase().includes("completa");
      const bIsCompleta = b.baseName.toLowerCase().includes("completa");
      if (aIsCompleta && !bIsCompleta) return -1;
      if (!aIsCompleta && bIsCompleta) return 1;
      return 0;
    });
  }, [groupedServices]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-screen">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Cargando servicios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-screen">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <p className="text-muted-foreground">Error al cargar los servicios. Por favor intente nuevamente.</p>
      </div>
    );
  }

  return (
    <div
      className="px-4 py-8 min-h-screen max-w-7xl mx-auto relative flex flex-col justify-center"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between mb-4">
        <div className="text-left mb-4">
          <h2 className="text-4xl font-medium leading-[130%] text-foreground mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Servicios de Precalificación
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-muted-foreground w-[80%]"
          >
            Soluciones profesionales adaptadas a cada necesidad. Selecciona el tipo de persona para ver precios.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePersonType} className="shrink-0" />
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 sm:p-3 rounded-lg"
      >
        {sortedServices.map((group, index) => {
          const ServiceIcon = getServiceIcon(group.baseName);
          const features = getFeatures(group.baseName);
          const shortDescription = getShortDescription(group.baseName);
          const currentService = personType === "fisica" ? group.fisica : group.moral;
          const isPopular = group.baseName.toLowerCase().includes("completa");
          const price = currentService?.priceMxn || 0;

          return (
            <TimelineContent
              as="div"
              key={group.baseName}
              animationNum={index + 3}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <motion.div
                whileHover={{
                  scale: isPopular ? 1.12 : 1.05,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Card
                  className={`relative flex-col flex justify-between cursor-pointer transition-all duration-300 ${
                    isPopular
                      ? "scale-110 ring-2 ring-neutral-900 dark:ring-neutral-700 bg-gradient-to-t from-black to-neutral-900 text-white hover:shadow-2xl hover:shadow-neutral-900/50"
                      : "border-none shadow-none bg-transparent pt-4 text-foreground hover:shadow-xl hover:shadow-neutral-500/20 dark:hover:shadow-neutral-700/30"
                  }`}
                  onClick={() => handleCardClick(group)}
                >
                <CardContent className="pt-0">
                  <div className="space-y-2 pb-3">
                    {isPopular && (
                      <div className="pt-4">
                        <span className="bg-neutral-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Más Recomendado
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline">
                      <span className="text-4xl font-semibold">
                        $
                        <NumberFlow
                          format={{
                            currency: "USD",
                          }}
                          value={price}
                          className="text-4xl font-semibold"
                        />
                      </span>
                      <span
                        className={
                          isPopular
                            ? "text-neutral-200 ml-1"
                            : "text-gray-600 ml-1"
                        }
                      >
                        MXN
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold mb-2">{group.displayName}</h3>
                    <div
                      className={cn(
                        "p-2 rounded-xl ring-2 transition-all duration-300",
                        isPopular
                          ? "bg-gradient-to-br from-neutral-600 to-neutral-700 ring-neutral-500"
                          : "bg-gradient-to-br from-primary/20 to-primary/5 ring-primary/10"
                      )}
                    >
                      <ServiceIcon className={cn("h-6 w-6", isPopular ? "text-white" : "text-primary")} />
                    </div>
                  </div>
                  <p
                    className={
                      isPopular
                        ? "text-sm text-neutral-200 mb-4"
                        : "text-sm text-gray-600 mb-4"
                    }
                  >
                    {shortDescription}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-200">
                    <h4 className="font-medium text-base mb-3">
                      Incluye:
                    </h4>
                    <ul className="space-y-2 font-semibold">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span
                            className={
                              isPopular
                                ? "text-white h-6 w-6 bg-neutral-600 border border-neutral-500 rounded-full grid place-content-center mt-0.5 mr-3"
                                : "text-black h-6 w-6 bg-white border border-black rounded-full grid place-content-center mt-0.5 mr-3"
                            }
                          >
                            <CheckCheck className="h-4 w-4" />
                          </span>
                          <span
                            className={
                              isPopular
                                ? "text-sm text-neutral-100"
                                : "text-sm text-gray-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <button
                    className={`w-full mb-6 p-4 text-xl rounded-xl ${
                      isPopular
                        ? "bg-gradient-to-t from-neutral-100 to-neutral-300 font-semibold shadow-lg shadow-neutral-500 border border-neutral-400 text-black"
                        : "bg-gradient-to-t from-neutral-900 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-700 text-white"
                    }`}
                  >
                    Seleccionar
                  </button>
                </CardFooter>
              </Card>
              </motion.div>
            </TimelineContent>
          );
        })}
      </TimelineContent>
    </div>
  );
}
