import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTextScramble } from '@/hooks/useTextScramble';

const layers = [
  {
    index: 'L1',
    type: 'INPUT',
    tag: 'Foundation',
    scrambleTexts: ["init(graduate='VIT', major='CS')", "load(weights='academic')"],
    title: 'Academic Foundation',
    description: 'Integrated M.Tech in Computer Science at VIT Bhopal, specializing in AI & ML. 3 years of deep immersion in machine learning theory and application.',
    chips: ['params: 3yr', 'batch: CS+AI', 'dtype: M.Tech'],
  },
  {
    index: 'L2',
    type: 'HIDDEN',
    tag: 'Engineering',
    scrambleTexts: ['pipeline.run(end_to_end=True)', 'build(stack=full)'],
    title: 'Full-Stack ML Engineering',
    description: 'End-to-end pipeline architect — from data ingestion and model training to deployment. Salesforce internship at Impaqtive for enterprise-grade CRM solutions.',
    chips: ['params: E2E', 'batch: prod', 'dtype: full-stack'],
  },
  {
    index: 'L3',
    type: 'ATTN',
    tag: 'Explainability',
    scrambleTexts: ['explainability.shap(visualize=True)', 'attention.focus(privacy=True)'],
    title: 'Privacy-First & Explainable AI',
    description: 'Building offline, local AI systems that protect user data. SHAP-based model explanations ensure transparency and trust in every prediction.',
    chips: ['params: SHAP', 'batch: offline', 'dtype: private'],
  },
  {
    index: 'L4',
    type: 'OUTPUT',
    tag: 'Status',
    scrambleTexts: ['neha.available() → True', '# hire her now'],
    title: 'Ready for Deployment',
    description: 'Currently seeking opportunities in AI/ML engineering, NLP, and intelligent automation. Open to internships, research, and full-time roles.',
    chips: ['status: ready', 'mode: deploy', 'output: hire'],
  },
];

const LayerCard = ({ layer, index }: { layer: typeof layers[0]; index: number }) => {
  const scrambled = useTextScramble(layer.scrambleTexts, 3000);

  return (
    <div
      className="scroll-reveal ml-card rounded-2xl overflow-hidden layer-border-anim flex"
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      {/* Left index column */}
      <div
        className="flex flex-col items-center justify-center px-4 py-6 shrink-0"
        style={{
          width: 58,
          background: 'rgba(120,100,255,0.05)',
          borderRight: '1px solid var(--border-default)',
        }}
      >
        <span style={{ fontFamily: 'Outfit', fontSize: 18, color: 'rgba(185,127,255,0.4)' }}>
          {layer.index}
        </span>
        <span
          className="font-mono mt-2"
          style={{
            fontSize: 8,
            writingMode: 'vertical-lr',
            letterSpacing: '2px',
            color: 'var(--text-very-muted)',
          }}
        >
          {layer.type}
        </span>
      </div>

      {/* Right content */}
      <div className="flex-1 p-6">
        <span
          className="inline-block px-2 py-0.5 rounded text-[9px] uppercase font-mono mb-2"
          style={{
            letterSpacing: '1px',
            background: 'rgba(224,64,251,0.1)',
            color: '#E040FB',
          }}
        >
          {layer.tag}
        </span>

        <div
          className="font-mono text-[11px] mb-3 h-5 overflow-hidden"
          style={{ color: '#B97FFF' }}
        >
          {scrambled}
        </div>

        <h3 style={{ fontFamily: 'Outfit', fontSize: 18, fontWeight: 700, color: '#E2E0FF' }}>
          {layer.title}
        </h3>

        <p className="mt-2 text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {layer.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {layer.chips.map((chip) => (
            <span
              key={chip}
              className="text-[9px] font-mono px-2 py-1 rounded"
              style={{
                background: 'rgba(120,100,255,0.07)',
                color: 'var(--text-very-muted)',
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-num">01</span>
          <h2 className="mt-2" style={{ fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#E2E0FF' }}>
            Model Architecture
          </h2>
        </div>

        {/* Vertical connector line + cards */}
        <div className="relative max-w-3xl">
          {/* Connector line */}
          <div
            className="absolute left-[29px] top-0 bottom-0 w-px hidden md:block"
            style={{
              background: 'linear-gradient(180deg, #B97FFF, #E040FB, #5FFFA0)',
              opacity: 0.3,
            }}
          />

          <div className="space-y-6">
            {layers.map((layer, i) => (
              <LayerCard key={layer.index} layer={layer} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
