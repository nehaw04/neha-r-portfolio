import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  {
    title: 'AI & Machine Learning',
    file: 'ai_ml_config.json',
    items: ['Transformers', 'RAG', 'Agentic AI', 'PyTorch', 'CNNs'],
    color: '#E040FB',
  },
  {
    title: 'Languages & Cloud',
    file: 'stack_config.yml',
    items: ['Python', 'Apex', 'Java', 'R', 'Salesforce', 'AWS'],
    color: '#B97FFF',
  },
  {
    title: 'Core Strengths',
    file: 'strengths.json',
    items: ['Mathematical Aptitude', 'Logic Building', 'Competitive Programming'],
    color: '#5FFFA0',
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-num">03</span>
          <h2 className="mt-2" style={{ fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#E2E0FF' }}>
            Hyperparameters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className="scroll-reveal ml-card rounded-2xl p-5"
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <div className="text-[10px] font-mono mb-2" style={{ color: 'var(--text-very-muted)' }}>
                {cat.file}
              </div>
              <h3
                className="text-[14px] font-semibold mb-4"
                style={{ fontFamily: 'Outfit', color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item, i) => (
                  <div
                    key={item}
                    className="scroll-reveal flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 cursor-default group"
                    style={{
                      transitionDelay: `${i * 55}ms`,
                      border: '1px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.background = 'rgba(185,127,255,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: cat.color }}
                    />
                    <span
                      className="text-[10px] font-mono group-hover:text-[#E040FB] transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
