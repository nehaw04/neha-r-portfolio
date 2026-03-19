import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiments = [
  {
    id: 'EXP-001',
    year: '2024',
    badge: 'NLP',
    badgeColor: 'rgba(224,64,251,0.8)',
    title: 'AutoForm-AI',
    desc: 'Offline OCR system using Transformer models — 100% data privacy for sensitive document processing.',
    metrics: [
      { label: 'Accuracy', value: 94, display: '94.2%' },
      { label: 'Precision', value: 91, display: '91.8%' },
      { label: 'Latency', value: 15, display: '15ms' },
    ],
    tags: ['Python', 'PyTorch', 'Transformers', 'SHAP'],
  },
  {
    id: 'EXP-002',
    year: '2024',
    badge: 'ML',
    badgeColor: 'rgba(255,180,50,0.8)',
    title: 'Agentic Loan Workflow',
    desc: 'Autonomous AI system handling full loan lifecycle — data extraction to risk assessment in BFSI.',
    metrics: [
      { label: 'F1 Score', value: 89, display: '0.893' },
      { label: 'AUC-ROC', value: 96, display: '0.961' },
      { label: 'Recall', value: 92, display: '92.1%' },
    ],
    tags: ['Python', 'Agentic AI', 'LangChain'],
  },
  {
    id: 'EXP-003',
    year: '2024',
    badge: 'LLM',
    badgeColor: 'rgba(185,127,255,0.8)',
    title: 'Agentic AI with RAG',
    desc: 'Context-aware AI assistant using Retrieval-Augmented Generation on custom datasets.',
    metrics: [
      { label: 'Accuracy', value: 88, display: '88.4%' },
      { label: 'F1 Score', value: 86, display: '0.862' },
      { label: 'Latency', value: 42, display: '42ms' },
    ],
    tags: ['RAG', 'LLMs', 'Python', 'FAISS'],
  },
  {
    id: 'EXP-004',
    year: '2025',
    badge: 'CV',
    badgeColor: 'rgba(95,255,160,0.8)',
    title: 'Vision Pipeline',
    desc: 'Real-time object detection and classification pipeline using YOLOv8 for industrial QA.',
    metrics: [
      { label: 'mAP@50', value: 91, display: '91.3%' },
      { label: 'FPS', value: 78, display: '78' },
      { label: 'Precision', value: 93, display: '93.1%' },
    ],
    tags: ['YOLOv8', 'OpenCV', 'ONNX', 'Python'],
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-num">02</span>
          <h2 className="mt-2" style={{ fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#E2E0FF' }}>
            Experiment Runs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {experiments.map((exp, i) => (
            <div
              key={exp.id}
              className="scroll-reveal ml-card rounded-2xl p-6 exp-top-border"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-very-muted)' }}>
                  {exp.id} · {exp.year}
                </span>
                <span
                  className="text-[9px] uppercase font-mono font-semibold px-2 py-0.5 rounded"
                  style={{
                    color: exp.badgeColor,
                    background: exp.badgeColor.replace('0.8', '0.1'),
                    letterSpacing: '1px',
                  }}
                >
                  {exp.badge}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'Outfit', fontSize: 20, fontWeight: 700, color: 'white' }}>
                {exp.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-[11px] font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {exp.desc}
              </p>

              {/* Metric bars */}
              <div className="mt-5 space-y-3">
                {exp.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[9px] font-mono mb-1">
                      <span style={{ color: 'var(--text-very-muted)' }}>{m.label}</span>
                      <span style={{ color: '#E040FB' }}>{m.display}</span>
                    </div>
                    <div className="h-[2px] rounded-full" style={{ background: 'rgba(120,100,255,0.1)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${m.value}%`,
                          background: 'linear-gradient(90deg, #7B5EA7, #E040FB)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono px-2 py-1 rounded"
                    style={{
                      background: 'rgba(120,100,255,0.07)',
                      color: 'var(--text-very-muted)',
                    }}
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
