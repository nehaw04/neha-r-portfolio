import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiments = [
  {
    id: 'EXP-001',
    year: '2024',
    badge: 'NLP',
    badgeColor: 'rgba(224,64,251,0.8)',
    title: 'AutoForm-AI',
    headline: 'Privacy-First Automated Onboarding',
    desc: 'A browser extension that eliminates manual data entry by processing ID cards locally. It uses OCR to extract text and a local LLM to map that data into web forms without ever sending sensitive info to the cloud.',
    metrics: [
      { label: 'Data Privacy', value: 100, display: '100% Local' },
      { label: 'Processing Time', value: 95, display: '< 2 Seconds' },
      { label: 'Tech Stack', value: 88, display: 'Tesseract.js / WebLLM' },
    ],
    tags: ['Tesseract.js', 'WebLLM', 'OCR', 'Browser Extension'],
    github: 'https://github.com/nehaw04/AutoForm-AI',
  },
  {
    id: 'EXP-002',
    year: '2024',
    badge: 'ML',
    badgeColor: 'rgba(255,180,50,0.8)',
    title: 'Loan Buddy',
    headline: 'Multi-Agent Financial Automation',
    desc: 'An intelligent framework using specialized AI agents to automate the end-to-end loan lifecycle. The system manages everything from initial lead capture and document verification to final sanctioning logic.',
    metrics: [
      { label: 'Efficiency Gain', value: 40, display: '40% Reduction' },
      { label: 'Architecture', value: 85, display: 'Multi-Agent' },
      { label: 'Automation Scope', value: 92, display: 'Lead-to-Sanction' },
    ],
    tags: ['LangChain', 'CrewAI', 'Agentic AI', 'Python'],
    github: 'https://github.com/nehaw04/Loan-Processing-Multi-Agent-System',
  },
  {
    id: 'EXP-003',
    year: '2025',
    badge: 'CV',
    badgeColor: 'rgba(95,255,160,0.8)',
    title: 'Faculty Availability Indicator',
    headline: 'Real-Time Campus Detection System',
    desc: 'Real-time detection and classification system using YOLOv8 for campus faculty tracking.',
    metrics: [
      { label: 'mAP@50', value: 91, display: '91.3%' },
      { label: 'FPS', value: 78, display: '78' },
      { label: 'Precision', value: 93, display: '93.1%' },
    ],
    tags: ['YOLOv8', 'OpenCV', 'ONNX', 'Python'],
    github: 'https://github.com/nehaw04/faculty-availability-indicator',
  },
  {
    id: 'EXP-004',
    year: '2025',
    badge: 'Backend',
    badgeColor: 'rgba(120,100,255,0.8)',
    title: 'Allo Allocation Engine',
    headline: 'Timed Inventory Reservation Engine for Multi-Warehouse Checkout',
    desc: 'A race-condition-free inventory reservation system for e-commerce checkout flows. It places a timed 10-minute hold on inventory at checkout — confirmed on payment success, released on cancellation or expiry — using PostgreSQL pessimistic row locking to guarantee serialized writes under contention.',
    metrics: [
      { label: 'Concurrency Model', value: 100, display: 'PostgreSQL Row Locking' },
      { label: 'Hold Window', value: 100, display: '10-Minute Reservation' },
      { label: 'Overselling Risk', value: 0, display: 'Zero Overselling' },
    ],
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Tailwind CSS v4'],
    github: 'https://github.com/nehaw04/Inventory-Reservation-Engine',
    liveDemo: 'https://allo-allocation-engine.vercel.app',
  },
  {
    id: 'EXP-005',
    year: '2025',
    badge: 'NLP',
    badgeColor: 'rgba(224,64,251,0.8)',
    title: 'Luggage Market Intelligence Dashboard',
    headline: 'AI-Powered Competitive Brand Analysis for E-Commerce',
    desc: 'An end-to-end market intelligence platform that scrapes, cleans, and analyzes customer reviews across competing luggage brands on Amazon India, then uses an LLM pipeline to surface strategic insights like positioning gaps, value traps, and review-trust anomalies.',
    metrics: [
      { label: 'Reviews Analyzed', value: 90, display: '450+' },
      { label: 'Brands Tracked', value: 75, display: '6' },
      { label: 'Products Scraped', value: 85, display: '50+' },
    ],
    tags: ['Python', 'Playwright', 'Gemini 2.5 Flash', 'sentence-transformers', 'SQLite', 'Streamlit', 'Plotly'],
    github: 'https://github.com/nehaw04/brand-sentiment-analyzer',
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

              <h3 style={{ fontFamily: 'Outfit', fontSize: 20, fontWeight: 700, color: 'white' }}>
                {exp.title}
              </h3>
              {'headline' in exp && (
                <p className="text-[10px] font-mono mt-1" style={{ color: '#B97FFF', letterSpacing: '0.5px' }}>
                  {exp.headline}
                </p>
              )}

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

              {/* Tags + GitHub */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
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
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono transition-all hover:border-[rgba(185,127,255,0.4)] hover:text-[#B97FFF]"
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: 'rgba(185,127,255,0.7)',
                    background: 'rgba(120,100,255,0.06)',
                    border: '1px solid rgba(120,100,255,0.15)',
                    padding: '5px 12px',
                    borderRadius: 100,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                {'liveDemo' in exp && (
                  <a
                    href={exp.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono transition-all hover:border-[rgba(95,255,160,0.4)] hover:text-[#5FFFA0]"
                    style={{
                      fontSize: 10,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'rgba(95,255,160,0.8)',
                      background: 'rgba(95,255,160,0.06)',
                      border: '1px solid rgba(95,255,160,0.15)',
                      padding: '5px 12px',
                      borderRadius: 100,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
