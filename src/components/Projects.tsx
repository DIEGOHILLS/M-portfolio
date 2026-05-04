import { useState } from 'react';
import { ExternalLink, Github, Check } from 'lucide-react';
import stocklyImg from '@/assets/stockly.png';
import fitnessImg from '@/assets/fitness-app.png';
import chatImg from '@/assets/chat-app.png';
import blogPlatformImg from '@/assets/blog-platform.png';
import movieReviewsImg from '@/assets/movie-reviews.png';
import taskManagerImg from '@/assets/task-manager.png';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  codeUrl?: string;
  hidden?: boolean;
}

const projects: Project[] = [
  {
    title: 'Blog Platform',
    subtitle: 'Full-Stack Content Management System',
    description: 'A production-ready blogging platform with role-based publishing and content management.',
    image: blogPlatformImg,
    technologies: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JWT', 'Tailwind'],
    features: [
      'JWT authentication & role-based access',
      'Draft and publish workflow',
      'Category and tag filtering',
      'REST API with structured database design',
    ],
    liveUrl: 'https://blog-platform-ylvh.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/blog-platform.git',
  },
  {
    title: 'Real-Time Chat App',
    subtitle: 'WebSocket Messaging Platform',
    description: 'A real-time messaging platform with instant communication using WebSockets.',
    image: chatImg,
    technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'JWT'],
    features: [
      'Real-time messaging with Socket.io',
      'JWT authentication',
      'Live UI updates',
      'Multi-user communication',
    ],
    liveUrl: 'http://chattabox-swcj.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/chat_app.git',
  },
  {
    title: 'Stockly',
    subtitle: 'Inventory Management System',
    description: 'Inventory management system for tracking products and stock levels.',
    image: stocklyImg,
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Zustand'],
    features: [
      'Multi-user inventory tracking',
      'REST API with PostgreSQL',
      'Rate limiting & bot protection',
      'State management with Zustand',
    ],
    liveUrl: 'https://stockly-aqif.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/Stockly.git',
  },
  {
    title: 'Movie Reviews App',
    subtitle: 'Containerized Full-Stack App',
    description: 'Full-stack movie review application with React frontend and Spring Boot REST API, deployed using Docker with MongoDB Atlas.',
    image: movieReviewsImg,
    technologies: ['React', 'Spring Boot', 'MongoDB', 'Docker'],
    features: [
      'Spring Boot REST API',
      'MongoDB Atlas persistence',
      'Dockerized deployment',
      'React frontend',
    ],
    liveUrl: 'https://movie-revview.netlify.app/',
    codeUrl: 'https://github.com/DIEGOHILLS/movie-reviews.git',
    hidden: true,
  },
  {
    title: 'Task Management App',
    subtitle: 'Responsive Productivity Dashboard',
    description: 'A modern, responsive task management dashboard with full CRUD and dark mode.',
    image: taskManagerImg,
    technologies: ['TypeScript', 'React', 'Vite', 'TailwindCSS'],
    features: [
      'Create, edit and delete tasks',
      'Organize by projects or categories',
      'Responsive design',
      'Dark mode toggle',
    ],
    liveUrl: 'https://task-manager-hfq5.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/Task-deadline-manager.git',
    hidden: true,
  },
  {
    title: 'Fitness App',
    subtitle: 'Exercise Discovery Platform',
    description: 'Fitness exercise discovery app with 1000+ exercises, filters and YouTube demos.',
    image: fitnessImg,
    technologies: ['React', 'Material UI', 'RapidAPI', 'Axios'],
    features: [
      '1000+ exercises library',
      'Filter by muscle group',
      'YouTube demonstrations',
      'Similar exercise suggestions',
    ],
    liveUrl: 'https://fitness-app-x819.vercel.app/',
    codeUrl: 'https://github.com/DIEGOHILLS/Fitness_app.git',
    hidden: true,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.filter((p) => !p.hidden);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Real, deployed full-stack applications — not just demos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-secondary/50 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-lg font-medium">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-70" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-sm text-primary font-medium mb-2">{project.subtitle}</p>
                )}
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-2 border-t border-border/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-full text-foreground font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
