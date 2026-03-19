import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillWeights = [
  { label: 'deep_learning', value: 0.90 },
  { label: 'nlp_llms', value: 0.88 },
  { label: 'computer_vision', value: 0.82 },
  { label: 'mlops_infra', value: 0.78 },
  { label: 'data_engineering', value: 0.75 },
];

const envPills = [
  { name: 'PyTorch', color: '#EE4C2C' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'LangChain', color: '#1C3C3C' },
  { name: 'Hugging Face', color: '#FFD21E' },
  { name: 'OpenCV', color: '#5C3EE8' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'Git', color: '#F05032' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* Left — skill_weights.json */}
          <div className="scroll-reveal">
            <div className="text-[10px] font-mono mb-4" style={{ color: 'var(--text-very-muted)' }}>
              skill_weights.json
            </div>
            <div className="space-y-5">
              {skillWeights.map((skill, i) => (
                <div
                  key={skill.label}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex justify-between text-[11px] font-mono mb-2">
                    <span style={{ color: 'var(--text-muted)' }}>{skill.label}</span>
                    <span style={{ color: '#E040FB' }}>{skill.value.toFixed(2)}</span>
                  </div>
                  <div className="h-[2px] rounded-full" style={{ background: 'rgba(120,100,255,0.1)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.value * 100}%`,
                        background: 'linear-gradient(90deg, #7B5EA7, #E040FB)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — environment.yml */}
          <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <div className="text-[10px] font-mono mb-4" style={{ color: 'var(--text-very-muted)' }}>
              environment.yml
            </div>
            <div
              className="ml-card rounded-2xl p-5"
            >
              <div className="grid grid-cols-2 gap-3">
                {envPills.map((pill, i) => (
                  <div
                    key={pill.name}
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
                      style={{ background: pill.color }}
                    />
                    <span
                      className="text-[10px] font-mono group-hover:text-[#E040FB] transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {pill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
