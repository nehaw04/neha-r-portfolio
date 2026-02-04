import { Brain, Code2, Globe, BarChart3 } from 'lucide-react';

const roles = [
  {
    icon: Brain,
    title: 'AI & ML Specialist',
    description:
      'Developing intelligent systems using machine learning algorithms, deep learning frameworks, and computer vision to solve real-world problems.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description:
      'Creating end-to-end web solutions with modern frameworks, scalable architectures, and seamless user experiences across the stack.',
  },
  {
    icon: Globe,
    title: 'Web Developer',
    description:
      'Building responsive, performant web applications using React ecosystem, modern CSS, and industry best practices.',
  },
  {
    icon: BarChart3,
    title: 'Data Analyst',
    description:
      'Transforming raw data into meaningful insights through statistical analysis, visualization, and data-driven decision making.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="section-subtitle">
            Leveraging cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="glass-card rounded-3xl p-8 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="icon-container w-14 h-14 mb-6 group-hover:icon-container-hover transition-all duration-300">
                <role.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{role.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
