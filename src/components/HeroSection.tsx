import { useTextScramble } from '@/hooks/useTextScramble';
import { useEffect, useState, useRef } from 'react';

const roles = ['AI ENGINEER', 'ML ENGINEER', 'NLP ENGINEER', 'MODEL BUILDER', 'SYSTEM THINKER'];

const metrics = [
  { label: 'AI/ML Projects', value: '10', unit: '+', delta: '↑ shipped & building' },
  { label: 'Live Deployments', value: '2', unit: '+', delta: '↑ RAG apps in production' },
  { label: 'Core Focus', value: 'RAG', unit: '/Agents', delta: '↑ LangGraph · LangChain' },
];

const epochLog = [
  { epoch: 1, loss: '2.847', acc: '52.1%', lr: '1e-3', time: '4m 12s' },
  { epoch: 5, loss: '1.203', acc: '71.8%', lr: '5e-4', time: '3m 58s' },
  { epoch: 12, loss: '0.541', acc: '84.2%', lr: '1e-4', time: '3m 44s' },
  { epoch: 20, loss: '0.182', acc: '91.7%', lr: '5e-5', time: '3m 31s' },
  { epoch: 25, loss: '0.082', acc: '92.4%', lr: '1e-5', time: '3m 28s' },
];

const HeroSection = () => {
  const scrambledRole = useTextScramble(roles, 2400);
  const [visibleLines, setVisibleLines] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < epochLog.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-[58px]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16">
        {/* Breadcrumb */}
        <div
          className="mb-6 sm:mb-8 text-[12px] uppercase font-mono"
          style={{ letterSpacing: '1.5px', color: 'var(--text-very-muted)' }}
        >
          models / neha_r / v3.0
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-3">
            {/* Name */}
            <h1 style={{ fontFamily: 'Outfit', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05 }}>
              <span className="block text-white">NEHA R.</span>
              <span className="block gradient-text">{scrambledRole}</span>
            </h1>

            {/* Role line */}
            <p
              className="mt-3 sm:mt-4 mb-6 sm:mb-8"
              style={{
                fontSize: 13,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--text-very-muted)',
              }}
            >
              AI & ML Engineer · Full-Stack Developer
            </p>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="ml-card rounded-xl p-3 sm:p-4 group cursor-default"
                  style={{ border: '1px solid var(--border-default)' }}
                >
                  <div
                    className="text-[11px] uppercase mb-2 font-mono"
                    style={{ color: 'var(--text-very-muted)', letterSpacing: '1px' }}
                  >
                    {m.label}
                  </div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 28px)' }}>
                    <span className="text-white">{m.value}</span>
                    <span style={{ color: '#E040FB' }}>{m.unit}</span>
                  </div>
                  <div className="text-[12px] mt-1 font-mono" style={{ color: '#5FFFA0' }}>
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              className="mb-6 sm:mb-8 max-w-xl"
              style={{
                fontSize: 14,
                lineHeight: 1.95,
                color: 'var(--text-muted)',
              }}
            >
              <b style={{ color: '#E040FB' }}>AI Engineer</b> building production-grade{' '}
              <i style={{ color: '#B97FFF' }}>Agentic AI &amp; RAG systems</i> — LangGraph state machines, vector retrieval with Pinecone,
              and FastAPI services shipped as live, hallucination-safe products. Integrated M.Tech in AI at{' '}
              <b style={{ color: '#E040FB' }}>VIT Bhopal</b> · graduating 2027.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-[9px] text-white text-[13px] font-semibold uppercase tracking-wider transition-transform hover:scale-[1.04]"
                style={{ background: 'linear-gradient(135deg, #7B5EA7, #E040FB)' }}
              >
                View Experiments →
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-[9px] text-[13px] font-semibold uppercase tracking-wider transition-all hover:text-[#E040FB] hover:border-[#B97FFF] text-center"
                style={{
                  border: '1px solid rgba(120,100,255,0.25)',
                  color: 'var(--text-muted)',
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column — Training Panel (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(120,100,255,0.15)' }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: '1px solid rgba(120,100,255,0.1)' }}
              >
                <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  training_run · neha_r_v3
                </span>
                <div className="flex items-center gap-2">
                  <span className="relative w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-[#5FFFA0] mint-pulse" />
                    <span className="relative block w-2 h-2 rounded-full bg-[#5FFFA0]" />
                  </span>
                  <span className="text-[11px] uppercase font-mono font-semibold" style={{ color: '#5FFFA0', letterSpacing: '1px' }}>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Loss Curve */}
              <div className="px-5 py-4">
                <svg ref={svgRef} viewBox="0 0 300 120" className="w-full h-auto">
                  {[0, 30, 60, 90].map((y) => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(120,100,255,0.06)" strokeWidth="0.5" />
                  ))}
                  <path
                    d="M0,15 C30,18 60,30 100,55 C140,72 200,95 280,105 L280,120 L0,120 Z"
                    fill="url(#lossGrad)"
                    opacity="0.15"
                  />
                  <path
                    d="M0,15 C30,18 60,30 100,55 C140,72 200,95 280,105"
                    fill="none"
                    stroke="#E040FB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,100 C30,95 60,85 100,70 C140,55 200,30 280,18"
                    fill="none"
                    stroke="#5FFFA0"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                    strokeLinecap="round"
                  />
                  <circle cx="280" cy="105" r="3" fill="#E040FB">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy="18" r="3" fill="#5FFFA0">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <defs>
                    <linearGradient id="lossGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E040FB" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#E040FB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex gap-6 mt-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="w-3 h-[2px] bg-[#E040FB] rounded" />
                    <span style={{ color: 'var(--text-very-muted)' }}>loss</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="w-3 h-[2px] bg-[#5FFFA0] rounded" style={{ opacity: 0.7 }} />
                    <span style={{ color: 'var(--text-very-muted)' }}>accuracy</span>
                  </div>
                </div>
              </div>

              {/* Epoch Log */}
              <div
                className="px-5 py-3 space-y-1.5 font-mono text-[12px]"
                style={{ borderTop: '1px solid rgba(120,100,255,0.08)', maxHeight: 150, overflow: 'hidden' }}
              >
                {epochLog.slice(0, visibleLines).map((line, i) => (
                  <div
                    key={line.epoch}
                    className="epoch-line flex gap-4"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <span style={{ color: 'var(--text-very-muted)' }}>Epoch {String(line.epoch).padStart(2, '0')}</span>
                    <span>loss: <span style={{ color: '#E040FB' }}>{line.loss}</span></span>
                    <span>acc: <span style={{ color: '#5FFFA0' }}>{line.acc}</span></span>
                    <span className="hidden sm:inline">lr: <span style={{ color: '#B97FFF' }}>{line.lr}</span></span>
                    <span className="hidden sm:inline" style={{ color: 'var(--text-very-muted)' }}>{line.time}</span>
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

export default HeroSection;
