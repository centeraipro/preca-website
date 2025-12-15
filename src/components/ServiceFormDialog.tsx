import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Loader2, CreditCard } from "lucide-react";
import { createScreening } from "@/lib/screening-api";
import type { Service, FormField } from "@/types/service";
import { toast } from "sonner";

interface ServiceFormDialogProps {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "529613168341";

export function ServiceFormDialog({ service, open, onOpenChange }: ServiceFormDialogProps) {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [applicantInfo, setApplicantInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if service requires file upload
  const hasFileUpload = service.formSchema.fields.some((field) => field.type === "file");

  const sortedFields = [...service.formSchema.fields].sort((a, b) => a.order - b.order);

  const handleFieldChange = (field: FormField, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate applicant info
    if (!applicantInfo.name.trim() || !applicantInfo.email.trim() || !applicantInfo.phone.trim()) {
      toast.error("Por favor complete todos los datos de contacto");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicantInfo.email)) {
      toast.error("Por favor ingrese un correo electrónico válido");
      return;
    }

    // Validate required fields
    for (const field of sortedFields) {
      if (field.required && field.type !== "file") {
        const value = formData[field.name];
        if (value === undefined || value === "" || value === false) {
          toast.error(`El campo "${field.label}" es requerido`);
          return;
        }
      }
    }

    setIsSubmitting(true);

    try {
      const response = await createScreening({
        serviceId: service.id.toString(),
        applicantName: applicantInfo.name.trim(),
        applicantEmail: applicantInfo.email.trim(),
        applicantPhone: applicantInfo.phone.trim(),
        formData,
      });

      toast.success("Redirigiendo al pago...");
      window.open(response.paymentLinkUrl, "_blank");
      onOpenChange(false);
    } catch (error) {
      console.error("Error creating screening:", error);
      toast.error("Hubo un error al procesar su solicitud. Por favor intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el servicio ${service.name} (${service.formattedPrice}). ¿Pueden ayudarme con el proceso?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    onOpenChange(false);
  };

  const renderField = (field: FormField) => {
    if (field.type === "file") return null;

    const commonClasses = "mt-1";

    switch (field.type) {
      case "boolean":
        return (
          <div key={field.id} className="flex items-start space-x-3 py-2">
            <Checkbox
              id={field.id}
              checked={!!formData[field.name]}
              onCheckedChange={(checked) => handleFieldChange(field, !!checked)}
              className="mt-1"
            />
            <Label htmlFor={field.id} className="text-sm leading-relaxed cursor-pointer">
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
          </div>
        );

      case "tel":
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={field.id}
              type="tel"
              placeholder={field.placeholder}
              value={(formData[field.name] as string) || ""}
              onChange={(e) => handleFieldChange(field, e.target.value)}
              className={commonClasses}
            />
          </div>
        );

      case "email":
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={field.id}
              type="email"
              placeholder={field.placeholder}
              value={(formData[field.name] as string) || ""}
              onChange={(e) => handleFieldChange(field, e.target.value)}
              className={commonClasses}
            />
          </div>
        );

      case "number":
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={field.id}
              type="number"
              placeholder={field.placeholder}
              value={(formData[field.name] as string) || ""}
              onChange={(e) => handleFieldChange(field, e.target.value)}
              className={commonClasses}
            />
          </div>
        );

      default:
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={field.id}
              type="text"
              placeholder={field.placeholder}
              value={(formData[field.name] as string) || ""}
              onChange={(e) => handleFieldChange(field, e.target.value)}
              className={commonClasses}
            />
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{service.name}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {service.description}
          </DialogDescription>
          <div className="pt-2">
            <span className="text-lg font-semibold text-primary">{service.formattedPrice}</span>
          </div>
        </DialogHeader>

        {hasFileUpload ? (
          <div className="space-y-6 py-4">
            <div className="bg-muted/50 rounded-lg p-6 text-center space-y-4">
              <MessageCircle className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Este servicio requiere documentos</h3>
              <p className="text-muted-foreground">
                Para completar este servicio necesitamos que nos envíes documentos (INE, cédula RFC, etc.).
                Por favor contáctanos por WhatsApp para continuar con el proceso.
              </p>
              <p className="text-sm text-muted-foreground">
                📱 <strong>WhatsApp disponible 24/7</strong> - Puedes enviarnos mensaje en cualquier momento.
              </p>
            </div>
            <Button
              className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
              size="lg"
              onClick={handleWhatsAppRedirect}
            >
              <MessageCircle className="h-5 w-5" />
              Continuar por WhatsApp
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            {/* Applicant Info Section */}
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold text-lg">Datos de contacto</h3>
              <div className="space-y-2">
                <Label htmlFor="applicant-name">
                  Nombre completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="applicant-name"
                  type="text"
                  value={applicantInfo.name}
                  onChange={(e) => setApplicantInfo((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: Juan Pérez García"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicant-email">
                  Correo electrónico <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="applicant-email"
                  type="email"
                  value={applicantInfo.email}
                  onChange={(e) => setApplicantInfo((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="Ej: juan.perez@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicant-phone">
                  Teléfono <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="applicant-phone"
                  type="tel"
                  value={applicantInfo.phone}
                  onChange={(e) => setApplicantInfo((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Ej: +52 55 1234 5678"
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
              className="w-full gap-2"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Procesando...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5" />
                  Continuar al pago - {service.formattedPrice}
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al continuar, recibirás un enlace de pago seguro. Después del pago,
              recibirás por correo electrónico la confirmación y los pasos a seguir.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
