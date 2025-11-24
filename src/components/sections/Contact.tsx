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
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            ¿Tienes preguntas? Nuestro equipo está listo para ayudarte
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => window.open('https://wa.me/529613168341', '_blank')}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Contáctanos por WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3">
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
