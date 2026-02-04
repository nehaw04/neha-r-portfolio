import { Lightbulb, MessageCircle, Users, RefreshCw, Clock, Target } from 'lucide-react';

const softSkills = [
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'Analytical approach to breaking down complex challenges into manageable, efficient solutions.',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description:
      'Translating technical concepts into clear language for both technical and non-technical stakeholders.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Thriving in cross-functional environments through effective collaboration and knowledge sharing.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description:
      'Rapidly learning new technologies and adjusting to evolving project requirements and methodologies.',
  },
  {
    icon: Clock,
    title: 'Time Management',
    description:
      'Delivering high-quality results within deadlines through strategic planning and prioritization.',
  },
  {
    icon: Target,
    title: 'Critical Thinking',
    description:
      'Evaluating multiple solution paths with logical reasoning and data-driven decision making.',
  },
];

const SoftSkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Beyond the <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle">
            Soft skills that complement technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Icon */}
              <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
