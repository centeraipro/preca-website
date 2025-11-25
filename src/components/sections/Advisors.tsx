import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { Button } from "@/components/ui/button";

const advisors = [
  {
    name: "LILIANA HERNÁNDEZ HERNÁNDEZ",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "ERIKA PATRICIA HERNÁNDEZ",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    phone: "9613168341",
    email: "atencionaclientes@rentasok.com",
  },
  {
    name: "LIC. MARIA FERNANDA HIDALGO LERMA",
    title: "ASESOR Y REPRESENTANTE DE PRECA",
    phone: "2213518202",
    email: "fer.hidalgo@preca.com.mx",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nuestros Asesores
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipo de profesionales certificados en evaluación crediticia e inmobiliaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {advisors.map((advisor, index) => {
            const cardStackConfig = [
              {
                className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
              },
            ];

            const advisorCards = [
              {
                ...cardStackConfig[0],
                icon: <Phone className="size-4 text-primary" />,
                title: advisor.name,
                description: advisor.title,
                date: "",
                titleClassName: "text-primary",
              },
              {
                ...cardStackConfig[1],
                icon: <Phone className="size-4 text-primary" />,
                title: "Teléfono",
                description: advisor.phone,
                date: "",
                titleClassName: "text-primary",
              },
              {
                ...cardStackConfig[2],
                icon: <Mail className="size-4 text-primary" />,
                title: "Email",
                description: advisor.email,
                date: "",
                titleClassName: "text-primary",
              },
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex justify-center"
              >
                <DisplayCards cards={advisorCards} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
