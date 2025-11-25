import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/preca-logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-primary/5 to-card"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Preca Logo" className="h-12 w-auto mb-4 drop-shadow-lg" />
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Preca es una marca de Servicios Inmobiliarios Jucerama SA de CV y Rentas
              Ok, especializados en precalificación de inquilinos en México.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Servicios</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  PRECA INE
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  PRECA Básica
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  PRECA Pro
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  PRECA Completa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Empresa</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#advisors" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Asesores
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="text-center md:text-left">© 2024 Preca - Servicios Inmobiliarios Jucerama SA de CV. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block font-medium">
                Términos
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
