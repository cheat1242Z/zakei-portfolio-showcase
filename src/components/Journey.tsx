import { Briefcase, GraduationCap } from 'lucide-react';

const journeySteps = [
  {
    year: '2024',
    type: 'work',
    title: 'Développeur Web Full Stack',
    company: 'Freelance',
    description: 'Création de sites web et applications pour divers clients. Spécialisation en React, Node.js et design moderne.',
  },
  {
    year: '2022-2023',
    type: 'work',
    title: 'Développeur Front-End',
    company: 'Agency Digital',
    description: 'Développement d\'interfaces utilisateur modernes et responsive pour des clients internationaux.',
  },
  {
    year: '2020-2022',
    type: 'education',
    title: 'Master Développement Web',
    company: 'École Supérieure du Numérique',
    description: 'Spécialisation en développement web moderne, UX/UI design et architecture logicielle.',
  },
  {
    year: '2018-2020',
    type: 'education',
    title: 'Licence Informatique',
    company: 'Université',
    description: 'Formation en programmation, bases de données et développement web.',
  },
];

export const Journey = () => {
  return (
    <section id="parcours" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Mon Parcours
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const Icon = step.type === 'work' ? Briefcase : GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row gap-8`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 md:-ml-8 rounded-full bg-card ring-4 ring-background flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-28 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div
                      className={`bg-card p-6 rounded-2xl shadow-card ring-1 ring-border hover:ring-primary/50 transition-all ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {step.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-accent font-medium mb-3">{step.company}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
