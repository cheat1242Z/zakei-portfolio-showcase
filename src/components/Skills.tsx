const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'PHP/MySQL', level: 75 },
  { name: 'Figma', level: 85 },
];

export const Skills = () => {
  return (
    <section id="competences" className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">Compétences</h2>
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                <span className="text-lg font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-hero rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
