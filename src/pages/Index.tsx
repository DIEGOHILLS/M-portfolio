import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>© {new Date().getFullYear()} Diego Hills. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
