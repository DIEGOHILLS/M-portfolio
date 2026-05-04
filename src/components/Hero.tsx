import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  {
    href: 'https://github.com/DIEGOHILLS',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/diego-ahmed-hills-876325208/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hillsdiego33@gmail.com&su=Hello%20Diego&body=Hi%20Diego,',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://wa.me/27740512319',
    icon: MessageCircle,
    label: 'WhatsApp',
  },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl animate-float">
              <img
                src={profileImage}
                alt="Diego Hills"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 animate-fade-in-up animation-delay-100">
          Diego Hills
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-primary mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
          Junior Full-Stack Developer
          <span className="block text-sm sm:text-lg text-foreground/90 font-normal mt-1">
            Java Spring Boot · React · TypeScript
          </span>
        </p>

        {/* Description */}
        <p className="text-sm sm:text-lg text-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up animation-delay-300 px-2">
          I build and deploy full-stack web applications with authentication, real-time
          features, and scalable backend systems. Experienced working in Agile teams and
          delivering production-ready applications.
        </p>

        {/* Social Links & CV Download */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 animate-fade-in-up animation-delay-400">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-secondary/60 border border-border rounded-full text-foreground font-medium hover:bg-secondary hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-primary/20"
            >
              <link.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
          
          {/* Download CV Button */}
          <a
            href="/DHillsCV.pdf"
            download="Diego_Hills_CV.pdf"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground border border-primary rounded-full font-medium hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-primary/40"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
