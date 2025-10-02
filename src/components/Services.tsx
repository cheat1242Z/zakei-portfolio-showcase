import { motion } from 'framer-motion';
import { Code, Palette, Search, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création de sites web modernes et performants avec les dernières technologies.',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
  },
  {
    icon: Search,
    title: 'Optimisation SEO',
    description: 'Amélioration de votre visibilité sur les moteurs de recherche.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Sites parfaitement adaptés à tous les appareils et écrans.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card ring-1 ring-border hover:ring-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-glow)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
