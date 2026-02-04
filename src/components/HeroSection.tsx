import { ArrowDown, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8 opacity-0 animate-scale-in">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/20 glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold gradient-text">NR</span>
              </div>
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 glass-card rounded-full text-xs font-medium text-accent flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available for work
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-2 opacity-0 animate-fade-in animation-delay-100">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-200">
            <span className="gradient-text">Neha R</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-300">
            <span className="text-foreground">AI & ML Engineer</span>
            <span className="mx-3">•</span>
            <span className="text-foreground">NLP Specialist</span>
            <span className="mx-3">•</span>
            <span className="text-foreground">Process Automation</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in animation-delay-400">
            Turning complex problems into elegant AI solutions. Specializing in Multi-Agent Systems, 
            NLP, and Intelligent Process Automation for the BFSI sector — building responsible AI 
            that drives real operational impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-500">
            <Button
              onClick={scrollToProjects}
              className="gradient-bg text-white px-8 py-6 text-lg rounded-xl hover-lift glow hover:glow-strong transition-all duration-300"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <a href="/Neha_R_Resume.pdf" download>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToProjects}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
