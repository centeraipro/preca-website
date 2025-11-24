import { Link } from "react-router-dom";
import logo from "@/assets/preca-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Preca Logo" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Preca es una marca de Servicios Inmobiliarios Jucerama SA de CV y Rentas
              Ok, especializados en precalificación de inquilinos en México.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  PRECA INE
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  PRECA Básica
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  PRECA Pro
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  PRECA Completa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#advisors" className="hover:text-primary transition-colors">
                  Asesores
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Preca - Servicios Inmobiliarios Jucerama SA de CV. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
