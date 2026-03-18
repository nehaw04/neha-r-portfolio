import { Github, ShieldCheck, Bot, Brain, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    icon: ShieldCheck,
    title: 'AutoForm-AI',
    subtitle: 'Offline OCR System',
    number: '01',
    problem: 'Most OCR tools require internet access and risk data exposure.',
    solution: 'Developed a high-accuracy text recognition system using Transformer models that runs entirely offline.',
    tags: ['Python', 'Transformer Models', 'PyTorch'],
    impact: 'Ensures 100% data privacy for sensitive document processing.',
    github: 'https://github.com/nehaw04',
    accent: 'from-accent to-primary',
  },
  {
    icon: Bot,
    title: 'Agentic Loan Workflow',
    subtitle: 'BFSI Automation',
    number: '02',
    problem: 'Manual loan processing is slow and prone to human error.',
    solution: 'Built an autonomous Agentic AI system that handles the loan lifecycle — from data extraction to risk assessment.',
    tags: ['Python', 'Agentic Frameworks', 'AI Logic'],
    github: 'https://github.com/nehaw04',
    accent: 'from-primary to-secondary',
  },
  {
    icon: Brain,
    title: 'Agentic AI with RAG',
    subtitle: 'Ongoing Project',
    number: '03',
    problem: 'Traditional AI assistants lack contextual understanding of custom data.',
    solution: 'Creating an intelligent AI assistant utilizing Retrieval-Augmented Generation (RAG) to provide context-aware answers from custom datasets.',
    tags: ['RAG', 'LLMs', 'Custom UI', 'Python'],
    github: 'https://github.com/nehaw04',
    accent: 'from-secondary to-accent',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            What I've built
          </p>
          <h2 className="section-title opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Real-world AI systems built with a focus on privacy, automation, and impact
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-3xl p-8 md:p-10 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up relative"
              style={{
                animationDelay: `${index * 150 + 300}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Project Number */}
              <span className="absolute top-6 right-8 text-6xl font-bold text-primary/5 select-none font-mono">
                {project.number}
              </span>

              {/* Header Row */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`icon-container w-14 h-14 bg-gradient-to-br ${project.accent}/10 group-hover:icon-container-hover transition-all duration-300`}>
                    <project.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mt-1 group/link"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6 relative z-10">
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-destructive/70 bg-destructive/10 px-2 py-1 rounded mt-0.5 shrink-0">
                    Problem
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mt-0.5 shrink-0">
                    Solution
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                </div>
                {project.impact && (
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded mt-0.5 shrink-0">
                      Impact
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/90 font-mono"
                  >
                    {tag}
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

export default ProjectsSection;
