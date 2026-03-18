import { useState } from 'react';

type SkillCategory = 'all' | 'languages' | 'aiml' | 'platforms' | 'strengths';

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory[];
  level?: 'expert' | 'advanced' | 'intermediate';
}

const skills: Skill[] = [
  { name: 'Python', icon: '🐍', category: ['all', 'languages'], level: 'expert' },
  { name: 'R', icon: '📊', category: ['all', 'languages'], level: 'intermediate' },
  { name: 'Apex', icon: '⚡', category: ['all', 'languages'], level: 'advanced' },
  { name: 'Java', icon: '☕', category: ['all', 'languages'], level: 'intermediate' },
  { name: 'Transformers', icon: '🤖', category: ['all', 'aiml'], level: 'advanced' },
  { name: 'RAG', icon: '🔍', category: ['all', 'aiml'], level: 'advanced' },
  { name: 'Agentic AI', icon: '🧠', category: ['all', 'aiml'], level: 'advanced' },
  { name: 'OCR', icon: '📄', category: ['all', 'aiml'], level: 'expert' },
  { name: 'Data Mining', icon: '⛏️', category: ['all', 'aiml'], level: 'intermediate' },
  { name: 'PyTorch', icon: '🔥', category: ['all', 'aiml'], level: 'advanced' },
  { name: 'Salesforce', icon: '☁️', category: ['all', 'platforms'], level: 'advanced' },
  { name: 'AWS', icon: '🌐', category: ['all', 'platforms'], level: 'intermediate' },
  { name: 'Git/GitHub', icon: '📦', category: ['all', 'platforms'], level: 'advanced' },
  { name: 'Competitive Programming', icon: '🏆', category: ['all', 'strengths'] },
  { name: 'Mathematical Aptitude', icon: '📐', category: ['all', 'strengths'] },
  { name: 'Logic Building', icon: '🧩', category: ['all', 'strengths'] },
];

const categories: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'aiml', label: 'AI / ML' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'strengths', label: 'Core Strengths' },
];

const levelColors: Record<string, string> = {
  expert: 'bg-accent/20 text-accent',
  advanced: 'bg-primary/20 text-primary',
  intermediate: 'bg-secondary/20 text-secondary',
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = skills.filter((skill) =>
    skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-28 relative">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            What I work with
          </p>
          <h2 className="section-title opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle opacity-0 animate-fade-in animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="text-sm text-center text-foreground font-medium mb-1">
                {skill.name}
              </span>
              {skill.level && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full mt-1 ${levelColors[skill.level]}`}>
                  {skill.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
