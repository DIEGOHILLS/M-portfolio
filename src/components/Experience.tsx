interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experience: TimelineItem[] = [
  {
    title: 'Software Engineering Intern',
    company: 'Compuways',
    date: 'January 2025 – August 2025',
    description: 'Built and deployed 4 production web applications with React, Spring Boot, and Node.js. Implemented JWT auth, role-based access control, and REST APIs with MongoDB Atlas and PostgreSQL. Containerized deployments with Docker. Shipped 12 features in an Agile team using Git, code reviews, and sprint planning.',
  },
  {
    title: 'Private Tutor',
    company: 'Self Employed',
    date: 'March 2022 – September 2022',
    description: 'Programming & STEM Tutor: Taught Grade 9–12 students Mathematics, Computer Applications Technology, and introductory programming concepts (HTML, CSS, JavaScript basics). Developed custom learning materials and tracked student progress with data-driven assessments.',
  },
];

const education: TimelineItem[] = [
  {
    title: 'Java Software Engineering Bootcamp',
    company: 'Code College',
    date: 'June 2024 – November 2025 (1 year)',
    description: 'Intensive full-stack program completed while working as a Software Engineering Intern. Focused on Java, Spring Boot, React, and modern web technologies. Built multiple real-world projects with agile methodologies, database design, and cloud deployment.',
  },
  {
    title: 'FNB App Academy Graduate',
    company: 'FNB',
    date: '2025 (9 weeks)',
    description: 'Intensive app development bootcamp covering HTML, CSS, JavaScript, Node.js, Python, and Django. Completed while employed at Compuways — applied learnings directly to production projects.',
  },
  {
    title: 'Grade 12 — Matric',
    company: 'Nigel Secondary School',
    date: '2020',
    description: "Graduated with Bachelor's pass. NQF 4/National Senior Certificate.",
  },
];

const TimelineSection = ({ items, title }: { items: TimelineItem[]; title: string }) => (
  <div>
    <h3 className="text-2xl font-semibold text-foreground mb-8 text-center pb-4 border-b border-border/50">
      {title}
    </h3>
    <div className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-muted">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative mb-8 last:mb-0 group"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[25px] top-2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform" />
          
          {/* Content card */}
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:translate-x-2">
            <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-primary font-medium mb-1">{item.company}</p>
            <p className="text-muted-foreground text-sm italic mb-3">{item.date}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Experience & Education
        </h2>

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <TimelineSection items={experience} title="Professional Experience" />
            <TimelineSection items={education} title="Education & Training" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
