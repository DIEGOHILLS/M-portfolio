import { Rocket, Radio, Users, Server, Sparkles, ShieldCheck } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Shipped Full-Stack Apps',
    description: 'Built and deployed 6 production applications end-to-end — not tutorials. 3 with Spring Boot backends, 3 with Node.js. All containerized with Docker.',
  },
  {
    icon: Radio,
    title: 'Real-Time Systems',
    description: 'Production WebSocket experience: built multi-user chat with Socket.io, live UI updates, and JWT-secured connections. Handled concurrent connections and state synchronization.',
  },
  {
    icon: Users,
    title: 'Agile Team Experience',
    description: '1 year in a commercial Agile team (Compuways). Daily standups, Git/GitHub workflows, code reviews, and sprint planning. Shipped features to production, not just internal demos.',
  },
  {
    icon: Server,
    title: 'Backend-Focused',
    description: 'Strongest in Java/Spring Boot: JWT auth, role-based access control, PostgreSQL schema design, RESTful API architecture, and Docker deployment. Can own the backend of a feature from database to API.',
  },
  {
    icon: Sparkles,
    title: 'AI-Ready',
    description: 'Using AI tools daily for code generation, debugging, and documentation. Prompt engineering for LLM integrations.',
  },
  {
    icon: ShieldCheck,
    title: 'Testing & QA',
    description: 'Comfortable with Playwright for automated testing and manual test case execution. Bridges the gap between building features and verifying they work.',
  },
];

const WhatIBring = () => {
  return (
    <section id="what-i-bring" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          What I Bring
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Practical, hireable skills backed by real projects and team experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
