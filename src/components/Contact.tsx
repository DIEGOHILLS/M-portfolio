import { Github, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/DIEGOHILLS',
    detail: 'GitHub Profile',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diego-ahmed-hills-876325208/',
    detail: 'LinkedIn Profile',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hillsdiego33@gmail.com&su=Hello%20Diego&body=Hi%20Diego,',
    detail: 'E-mail me',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/27740512319',
    detail: 'Text me',
  },
  {
    icon: MapPin,
    label: 'Location',
    detail: 'Gauteng, South Africa',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Get In Touch
        </h2>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Contact Information
          </h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center group">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 flex items-center justify-center bg-secondary/50 rounded-full text-foreground hover:bg-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6" />
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {item.detail}
                    </span>
                  </a>
                ) : (
                  <div className="relative w-14 h-14 flex items-center justify-center bg-secondary/50 rounded-full text-foreground cursor-default group">
                    <item.icon className="w-6 h-6" />
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {item.detail}
                    </span>
                  </div>
                )}
                <span className="mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 italic">
          Feel free to reach out
        </p>
      </div>
    </section>
  );
};

export default Contact;
