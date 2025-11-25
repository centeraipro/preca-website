import logo from "@/assets/preca-logo.png";
import { Footer7 } from "@/components/ui/footer-7";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <Footer7
      logo={{
        url: "/",
        src: logo,
        alt: "Preca Logo",
        title: "",
      }}
      description="Preca es una marca de Servicios Inmobiliarios Jucerama SA de CV y Rentas Ok, especializados en precalificación de inquilinos en México."
      socialLinks={[
        {
          icon: <FaWhatsapp className="size-5" />,
          href: "https://wa.me/529613168341",
          label: "WhatsApp",
        },
        {
          icon: <FaFacebook className="size-5" />,
          href: "https://www.facebook.com/precalificaciondeinquilinos",
          label: "Facebook",
        },
      ]}
      sections={[
        {
          title: "Servicios",
          links: [
            { name: "PRECA INE", href: "#services" },
            { name: "PRECA Básica", href: "#services" },
            { name: "PRECA Pro", href: "#services" },
            { name: "PRECA Completa", href: "#services" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { name: "Asesores", href: "#advisors" },
            { name: "Cursos", href: "#courses" },
            { name: "FAQ", href: "#faq" },
            { name: "Contacto", href: "#contact" },
          ],
        },
      ]}
      copyright="© 2024 Preca - Servicios Inmobiliarios Jucerama SA de CV. Todos los derechos reservados."
      legalLinks={[
        { name: "Privacidad", href: "#" },
        { name: "Términos", href: "#" },
      ]}
    />
  );
}
