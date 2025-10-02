import heroImage from '@/assets/profile-hero.jpg';

export const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide bg-gradient-hero bg-clip-text text-transparent">
              Développement Web
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
              Construisez Votre Futur Numérique.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-muted-foreground">
              Transformez vos idées en solutions digitales innovantes et impactantes.
            </p>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed text-muted-foreground/80">
              Des sites web percutants, des solutions digitales puissantes. Je ne me contente pas de créer, je transforme votre présence en ligne.
            </p>
          </div>

          <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-primary/50 shadow-glow">
              <img src={heroImage} alt="Développeur Web" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
