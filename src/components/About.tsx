import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-image.jpg';

export const About = () => {
  return (
    <section id="a-propos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 overflow-hidden rounded-3xl shadow-card ring-2 ring-primary/40"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="À propos de moi"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              À propos de moi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis un développeur web passionné spécialisé dans la création de sites web modernes et performants. Mon expertise couvre un large éventail de technologies, allant du développement front-end à l'optimisation SEO, en passant par la conception d'interfaces utilisateur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque projet est une opportunité de créer quelque chose d'unique et d'impactant. Je m'engage à transformer vos idées en réalité digitale avec créativité et excellence technique.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
