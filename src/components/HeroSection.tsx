import { ArrowDown, FileText, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const roles = [
  'Full-Stack AI Engineer',
  'Privacy-First Developer',
  'Agentic AI Builder',
  'Salesforce Developer',
];

const stats = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'AI Models', value: '3+' },
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(152 60% 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(152 60% 42%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-medium">Available for Opportunities</span>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-3 opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Hi there, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-scale-in animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            <span className="gradient-text">Neha R.</span>
          </h1>

          {/* Typing Role */}
          <div className="h-10 md:h-12 flex items-center justify-center mb-6 opacity-0 animate-fade-in animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <span className="text-xl md:text-2xl font-medium text-foreground font-mono">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-400" style={{ animationFillMode: 'forwards' }}>
            Pre-final year Integrated M.Tech student at VIT Bhopal specializing in AIML.
            I build privacy-first AI systems, agentic workflows, and scalable enterprise solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in animation-delay-500" style={{ animationFillMode: 'forwards' }}>
            <Button
              onClick={scrollToProjects}
              className="gradient-bg text-white px-8 py-6 text-lg rounded-xl hover-lift glow hover:glow-strong transition-all duration-300 group"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/Neha_R_Resume.pdf" download>
              <Button
                variant="outline"
                className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 w-full"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up animation-delay-600" style={{ animationFillMode: 'forwards' }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number gradient-text">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
