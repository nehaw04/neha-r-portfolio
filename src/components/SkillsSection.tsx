import { useState } from 'react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'aiml' | 'database' | 'devtools';

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory[];
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', icon: '🟨', category: ['all', 'frontend', 'backend'] },
  { name: 'Python', icon: '🐍', category: ['all', 'backend', 'aiml'] },
  { name: 'TypeScript', icon: '🔷', category: ['all', 'frontend', 'backend'] },
  
  // Frontend
  { name: 'React', icon: '⚛️', category: ['all', 'frontend'] },
  { name: 'Next.js', icon: '▲', category: ['all', 'frontend'] },
  { name: 'Vue.js', icon: '💚', category: ['all', 'frontend'] },
  { name: 'Tailwind CSS', icon: '🎨', category: ['all', 'frontend'] },
  { name: 'HTML5', icon: '🌐', category: ['all', 'frontend'] },
  { name: 'CSS3', icon: '🎭', category: ['all', 'frontend'] },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: ['all', 'backend'] },
  { name: 'Express.js', icon: '🚂', category: ['all', 'backend'] },
  { name: 'REST APIs', icon: '🔌', category: ['all', 'backend'] },
  
  // AI/ML
  { name: 'TensorFlow', icon: '🧠', category: ['all', 'aiml'] },
  { name: 'PyTorch', icon: '🔥', category: ['all', 'aiml'] },
  { name: 'Scikit-learn', icon: '📊', category: ['all', 'aiml'] },
  { name: 'OpenCV', icon: '👁️', category: ['all', 'aiml'] },
  { name: 'Pandas', icon: '🐼', category: ['all', 'aiml'] },
  { name: 'NumPy', icon: '🔢', category: ['all', 'aiml'] },
  
  // Databases
  { name: 'MongoDB', icon: '🍃', category: ['all', 'database'] },
  { name: 'PostgreSQL', icon: '🐘', category: ['all', 'database'] },
  { name: 'MySQL', icon: '🐬', category: ['all', 'database'] },
  { name: 'Firebase', icon: '🔥', category: ['all', 'database'] },
  
  // DevTools
  { name: 'Git', icon: '📦', category: ['all', 'devtools'] },
  { name: 'Docker', icon: '🐳', category: ['all', 'devtools'] },
  { name: 'VS Code', icon: '💻', category: ['all', 'devtools'] },
  { name: 'Figma', icon: '🎨', category: ['all', 'devtools'] },
];

const categories: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'aiml', label: 'AI/ML' },
  { id: 'database', label: 'Database' },
  { id: 'devtools', label: 'DevTools' },
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
