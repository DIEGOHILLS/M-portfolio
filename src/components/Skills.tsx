interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Java', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'Kubernetes', 'Selenium', 'CI/CD'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile', 'Mentoring', 'Project Management', 'Scrum'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
