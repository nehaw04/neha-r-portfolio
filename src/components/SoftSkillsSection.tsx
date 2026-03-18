import { Lightbulb, MessageCircle, Users, RefreshCw, Clock, Target } from 'lucide-react';

const softSkills = [
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Analytical approach to breaking down complex challenges into manageable, efficient solutions.',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'Translating technical concepts into clear language for both technical and non-technical stakeholders.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Thriving in cross-functional environments through effective collaboration and knowledge sharing.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description: 'Rapidly learning new technologies and adjusting to evolving project requirements and methodologies.',
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Delivering high-quality results within deadlines through strategic planning and prioritization.',
  },
  {
    icon: Target,
    title: 'Critical Thinking',
    description: 'Evaluating multiple solution paths with logical reasoning and data-driven decision making.',
  },
];

const SoftSkillsSection = () => {
  return (
    <section className="py-28 relative">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            The human side
          </p>
          <h2 className="section-title opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Beyond the <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Soft skills that complement technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card rounded-2xl p-7 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100 + 300}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="icon-container w-12 h-12 mb-5 group-hover:icon-container-hover transition-all duration-300">
                <skill.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
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
