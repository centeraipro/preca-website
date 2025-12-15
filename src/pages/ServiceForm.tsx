import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, AlertCircle, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useServices } from "@/hooks/use-services";
import { createScreening } from "@/lib/screening-api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { Service, FormField } from "@/types/service";

export default function ServiceForm() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: services, isLoading, error } = useServices();
  
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const service = services?.find(s => s.id.toString() === serviceId);
  const isFileService = service?.formSchema.fields.some(f => f.type === "file");

  const handleFieldChange = (fieldName: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el servicio: ${service?.name}. Me gustaría más información.`
    );
    window.open(`https://wa.me/529613168341?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service) return;

    if (!applicantName || !applicantEmail || !applicantPhone) {
      toast({
        title: "Campos requeridos",
        description: "Por favor complete su nombre, correo y teléfono.",
        variant: "destructive",
      });
      return;
    }

    const requiredFields = service.formSchema.fields.filter(f => f.required);
    for (const field of requiredFields) {
      if (!formData[field.name]) {
        toast({
          title: "Campo requerido",
          description: `Por favor complete: ${field.label}`,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const result = await createScreening({
        serviceId: service.id.toString(),
        applicantName,
        applicantEmail,
        applicantPhone,
        formData,
      });

      toast({
        title: "¡Solicitud enviada!",
        description: "Será redirigido al portal de pago.",
      });

      window.open(result.paymentLinkUrl, "_blank");
    } catch (err) {
      toast({
        title: "Error",
        description: "Hubo un error al procesar su solicitud. Intente nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const sortedFields = [...(service?.formSchema.fields || [])].sort((a, b) => a.order - b.order);
    const fieldIndex = sortedFields.findIndex(f => f.id === field.id);

    if (field.type === "boolean") {
      return (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: fieldIndex * 0.05 }}
          className="flex items-start space-x-3 py-3"
        >
          <Checkbox
            id={field.name}
            checked={!!formData[field.name]}
            onCheckedChange={(checked) => handleFieldChange(field.name, !!checked)}
          />
          <Label htmlFor={field.name} className="text-sm leading-relaxed cursor-pointer">
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </Label>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={field.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: fieldIndex * 0.05 }}
        className="space-y-2"
      >
        <Label htmlFor={field.name} className="text-sm font-medium">
          {field.label}
          {field.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        <Input
          id={field.name}
          type={field.type === "tel" ? "tel" : field.type === "email" ? "email" : field.type === "number" ? "number" : "text"}
          placeholder={field.placeholder || ""}
          value={(formData[field.name] as string) || ""}
          onChange={(e) => handleFieldChange(field.name, e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
        />
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Cargando servicio...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">Servicio no encontrado</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const sortedFields = [...service.formSchema.fields].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a servicios
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <CardTitle className="text-2xl md:text-3xl">{service.name}</CardTitle>
              <CardDescription className="text-base mt-2">
                {service.description}
              </CardDescription>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 w-fit">
                <span className="text-lg font-bold text-primary">{service.formattedPrice}</span>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              {isFileService ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6"
                  >
                    <MessageCircle className="h-10 w-10 text-green-500" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-4">
                    Este servicio requiere envío de documentos
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Para completar este servicio necesitamos que nos envíes documentos.
                    Por tu seguridad, este proceso se realiza vía WhatsApp.
                  </p>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6 max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Disponible 24/7 - Responde cuando puedas</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    onClick={handleWhatsAppRedirect}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Continuar por WhatsApp
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4 pb-6 border-b">
                    <h3 className="font-semibold text-lg">Información de contacto</h3>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="applicantName">Nombre completo *</Label>
                        <Input
                          id="applicantName"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="applicantPhone">Teléfono *</Label>
                        <Input
                          id="applicantPhone"
                          type="tel"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+52 55 1234 5678"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="applicantEmail">Correo electrónico *</Label>
                      <Input
                        id="applicantEmail"
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Dynamic Form Fields */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Información del servicio</h3>
                    {sortedFields.map(renderField)}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        Continuar al pago - {service.formattedPrice}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
