import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import stocklyImg from '@/assets/stockly.png';
import fitnessImg from '@/assets/fitness-app.png';
import spaceImg from '@/assets/space.png';
import chatImg from '@/assets/chat-app.png';
import issueTrackerImg from '@/assets/issue-tracker.png';
import taskManagerImg from '@/assets/task-manager.png';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  hidden?: boolean;
}

const projects: Project[] = [
  {
    title: 'Stockly',
    description: 'Full-stack product and inventory management system with React frontend and Node.js backend. Features CRUD operations, RESTful APIs, error handling, rate limiting and basic bot protection.',
    image: stocklyImg,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Zustand'],
    liveUrl: 'https://stockly-aqif.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/Stockly.git',
  },
  {
    title: 'Fitness App',
    description: 'A modern fitness exercise discovery web application. Explore over 1000+ exercises, filter by muscle groups, view detailed information, watch YouTube demonstrations, and discover similar exercises.',
    image: fitnessImg,
    technologies: ['React', 'Material UI', 'RapidAPI', 'Axios'],
    liveUrl: 'https://fitness-app-x819.vercel.app/',
    codeUrl: 'https://github.com/DIEGOHILLS/Fitness_app.git',
  },
  {
    title: 'Task Management App',
    description: 'A modern, responsive task management dashboard. Create, edit, and delete tasks, organize by projects or categories, with responsive design and dark mode toggle.',
    image: taskManagerImg,
    technologies: ['TypeScript', 'React', 'Vite', 'TailwindCSS'],
    liveUrl: 'https://task-manager-hfq5.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/Task-deadline-manager.git',
  },
  {
    title: 'Real-Time Chat Platform',
    description: 'Scalable real-time MERN-stack messaging platform with end-to-end encryption, Authentication & Authorization with JWT, and real-time messaging with Socket.io.',
    image: chatImg,
    technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
    liveUrl: 'http://chattabox-swcj.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/chat_app.git',
    hidden: true,
  },
  {
    title: 'Go-Space',
    description: 'A beautiful, interactive space exploration website built with HTML, CSS, JavaScript, and Python Flask. Discover the solar system through engaging visualizations and quizzes.',
    image: spaceImg,
    technologies: ['JavaScript', 'Python', 'Flask', 'HTML', 'CSS'],
    liveUrl: 'https://go-space.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/space_app.git',
    hidden: true,
  },
  {
    title: 'AI Issue Tracker',
    description: 'A React-based issue tracking system enhanced with AI capabilities. Automated AI summaries and intelligent fix suggestions powered by OpenAI GPT.',
    image: issueTrackerImg,
    technologies: ['JavaScript', 'React', 'Vite', 'OpenAI API'],
    liveUrl: 'https://ai-issuetracker.onrender.com/',
    codeUrl: 'https://github.com/DIEGOHILLS/Ai-IssueTracker.git',
    hidden: true,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.filter((p) => !p.hidden);

  return (
    <TooltipProvider delayDuration={200}>
      <section id="projects" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-primary mb-12 text-sm font-medium animate-pulse">
            ✨ New Java/Spring Boot projects coming soon ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-secondary/50 overflow-hidden relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-lg font-medium">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 cursor-help">
                      {project.description}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs bg-card border-border text-foreground p-3">
                    <p className="text-sm">{project.description}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
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
            </div>
          ))}
        </div>

        {/* Toggle Button */}
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
    </TooltipProvider>
  );
};

export default Projects;
