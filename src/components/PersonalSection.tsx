import personal1 from '@/assets/personal-1.jpg';
import personal2 from '@/assets/personal-2.jpg';

export const PersonalSection = () => {
  return (
    <section id="moi" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Moi
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-card ring-2 ring-primary/40 hover:scale-105 transition-transform duration-500">
            <img
              src={personal1}
              alt="Photo personnelle 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-card ring-2 ring-primary/40 hover:scale-105 transition-transform duration-500">
            <img
              src={personal2}
              alt="Photo personnelle 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionné par le développement web depuis mon plus jeune âge, j'ai transformé cette passion en carrière. Chaque ligne de code est une opportunité de créer quelque chose d'extraordinaire.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En dehors du code, j'aime explorer les nouvelles technologies, partager mes connaissances avec la communauté dev, et relever de nouveaux défis créatifs. Mon objectif ? Créer des expériences web qui marquent les esprits.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Je crois fermement que le meilleur code est celui qui allie performance technique et design élégant. C'est cette philosophie qui guide chacun de mes projets.
          </p>
        </div>
      </div>
    </section>
  );
};
