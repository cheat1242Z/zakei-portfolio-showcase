import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const projects = [
  { image: project1, title: 'Landing Page Musique Ivoire', description: "Figma - Création d'une landing page moderne et responsive." },
  { image: project2, title: 'Stade Charles Konan Banny', description: 'JavaScript, Bootstrap, PHP, MySQL - Gestion de réservation et affichage en temps réel.' },
  { image: project3, title: 'Plateforme Étudiant Zen', description: 'React, Node.js, MySQL - Plateforme éducative avec accès aux documents payants.' },
  { image: project4, title: 'Portfolio Créatif', description: 'React, TailwindCSS - Portfolio interactif et moderne.' },
];

export const Projects = () => {
  return (
    <section id="projets" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-2xl overflow-hidden shadow-card ring-1 ring-border hover:ring-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
