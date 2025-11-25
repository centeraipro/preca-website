import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Facebook } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+52 961 316 8341",
      subtitle: "Disponible para consultas",
      link: "https://wa.me/529613168341",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "gerenciageneral@rentasok.com",
      subtitle: "Respuesta en 24 horas",
      link: "mailto:gerenciageneral@rentasok.com",
      delay: 0.2
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 961 316 8341",
      subtitle: "Lunes a Viernes: 9:00 - 18:00",
      link: "tel:+529613168341",
      delay: 0.3
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "@precalificaciondeinquilinos",
      subtitle: "Síguenos en redes sociales",
      link: "https://www.facebook.com/precalificaciondeinquilinos",
      delay: 0.4
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Servicios Inmobiliarios Jucerama SA de CV",
      subtitle: "Ciudad de México, México",
      link: null,
      delay: 0.5
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, rotateY: -10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ¿Tienes preguntas? Nuestro equipo está listo para ayudarte
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20 relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-foreground hover:text-primary transition-colors mb-2 font-medium"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground mb-2 font-medium">
                        {item.content}
                      </p>
                    )}
                    
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
