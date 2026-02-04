import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'AI Image Classifier',
    description: 'Deep learning model for image classification using TensorFlow and convolutional neural networks. Achieves 95%+ accuracy on custom datasets.',
    tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features authentication, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive data visualization dashboard for business metrics. Built with modern web technologies and real-time data streaming.',
    tags: ['React', 'D3.js', 'WebSocket', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'Natural language processing tool for sentiment analysis on social media data. Processes thousands of posts in real-time.',
    tags: ['Python', 'NLTK', 'Scikit-learn', 'Flask'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team features.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'ML Prediction API',
    description: 'RESTful API service for machine learning predictions. Includes model versioning, monitoring, and auto-scaling.',
    tags: ['Python', 'FastAPI', 'Docker', 'AWS'],
    github: '#',
    demo: '#',
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
            A collection of projects showcasing my skills in AI/ML, web development, and data analysis
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 group flex flex-col opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="icon-container w-12 h-12 group-hover:icon-container-hover transition-all duration-300">
                  <Folder className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

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
