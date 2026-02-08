import { useState } from 'react';

type SkillCategory = 'all' | 'languages' | 'aiml' | 'platforms' | 'strengths';

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory[];
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: '🐍', category: ['all', 'languages'] },
  { name: 'R', icon: '📊', category: ['all', 'languages'] },
  { name: 'Apex', icon: '⚡', category: ['all', 'languages'] },
  { name: 'Java', icon: '☕', category: ['all', 'languages'] },

  // AI/ML
  { name: 'Transformers', icon: '🤖', category: ['all', 'aiml'] },
  { name: 'RAG', icon: '🔍', category: ['all', 'aiml'] },
  { name: 'Agentic AI', icon: '🧠', category: ['all', 'aiml'] },
  { name: 'OCR', icon: '📄', category: ['all', 'aiml'] },
  { name: 'Data Mining', icon: '⛏️', category: ['all', 'aiml'] },
  { name: 'PyTorch', icon: '🔥', category: ['all', 'aiml'] },

  // Platforms
  { name: 'Salesforce', icon: '☁️', category: ['all', 'platforms'] },
  { name: 'AWS', icon: '🌐', category: ['all', 'platforms'] },
  { name: 'Git/GitHub', icon: '📦', category: ['all', 'platforms'] },

  // Core Strengths
  { name: 'Competitive Programming', icon: '🏆', category: ['all', 'strengths'] },
  { name: 'Mathematical Aptitude', icon: '📐', category: ['all', 'strengths'] },
  { name: 'Logic Building', icon: '🧩', category: ['all', 'strengths'] },
];

const categories: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'aiml', label: 'AI/ML' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'strengths', label: 'Core Strengths' },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = skills.filter((skill) =>
    skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="text-muted-foreground mr-2">&lt;/&gt;</span>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <span className="text-3xl mb-3">{skill.icon}</span>
              <span className="text-xs md:text-sm text-center text-muted-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
