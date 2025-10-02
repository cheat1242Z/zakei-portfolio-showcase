import { motion } from 'framer-motion';
import heroImage from '@/assets/profile-hero.jpg';

export const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide bg-gradient-hero bg-clip-text text-transparent"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Développement Web
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Construisez Votre Futur Numérique.
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Transformez vos idées en solutions digitales innovantes et impactantes.
            </motion.p>
            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed text-muted-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Des sites web percutants, des solutions digitales puissantes. Je ne me contente pas de créer, je transforme votre présence en ligne.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: 'spring', stiffness: 120 }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-primary/50 shadow-glow hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Développeur Web"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
