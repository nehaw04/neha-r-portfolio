import { ExternalLink, Github, Folder, ShieldCheck, Bot, Brain } from 'lucide-react';

const projects = [
  {
    icon: ShieldCheck,
    title: 'AutoForm-AI',
    subtitle: 'Offline OCR System',
    problem: 'Most OCR tools require internet access and risk data exposure.',
    solution: 'Developed a high-accuracy text recognition system using Transformer models that runs entirely offline.',
    tags: ['Python', 'Transformer Models', 'PyTorch'],
    impact: 'Ensures 100% data privacy for sensitive document processing.',
    github: 'https://github.com/nehaw04',
  },
  {
    icon: Bot,
    title: 'Agentic Loan Workflow',
    subtitle: 'BFSI Automation',
    problem: 'Manual loan processing is slow and prone to human error.',
    solution: 'Built an autonomous Agentic AI system that handles the loan lifecycle — from data extraction to risk assessment.',
    tags: ['Python', 'Agentic Frameworks', 'AI Logic'],
    github: 'https://github.com/nehaw04',
  },
  {
    icon: Brain,
    title: 'Agentic AI with RAG',
    subtitle: 'Ongoing Project',
    problem: 'Traditional AI assistants lack contextual understanding of custom data.',
    solution: 'Creating an intelligent AI assistant utilizing Retrieval-Augmented Generation (RAG) to provide context-aware answers from custom datasets.',
    tags: ['RAG', 'LLMs', 'Custom UI', 'Python'],
    github: 'https://github.com/nehaw04',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world AI systems built with a focus on privacy, automation, and impact
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-3xl p-8 md:p-10 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="icon-container w-14 h-14 group-hover:icon-container-hover transition-all duration-300">
                    <project.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-1"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive/80">The Problem</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">The Solution</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">{project.solution}</p>
                </div>
                {project.impact && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Impact</span>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">{project.impact}</p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80"
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
