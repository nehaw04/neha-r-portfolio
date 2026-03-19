import { useScrollReveal } from '@/hooks/useScrollReveal';

const contactLinks = [
  { label: 'EMAIL', value: 'neha.2022@vitbhopal.ac.in', href: 'mailto:neha.2022@vitbhopal.ac.in' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/nehxr', href: 'https://www.linkedin.com/in/nehxr' },
  { label: 'GITHUB', value: 'github.com/nehaw04', href: 'https://github.com/nehaw04' },
  { label: 'RESUME', value: 'Download CV', href: '/Neha_R_Resume.pdf' },
];

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <footer id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="section-num">04</span>
          <h2 className="mt-2" style={{ fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#E2E0FF' }}>
            Deploy Model
          </h2>
        </div>

        <div
          className="scroll-reveal rounded-[20px] overflow-hidden"
          style={{ border: '1px solid var(--border-default)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-8 md:p-12" style={{ background: 'rgba(185,127,255,0.04)' }}>
              <span className="text-[9px] font-mono" style={{ color: '#B97FFF' }}>
                // ready to deploy
              </span>

              <h3 className="mt-4" style={{ fontFamily: 'Outfit', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, color: '#E2E0FF', lineHeight: 1.15 }}>
                Let's build <span className="gradient-text">something</span> intelligent.
              </h3>

              <p className="mt-4 text-[11px] font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Currently open to internship or project opportunities in AI, Machine Learning, or Salesforce Development.
              </p>

              <div className="flex gap-8 mt-8">
                {[
                  { label: 'Projects', val: '12', unit: '+' },
                  { label: 'Experience', val: '3', unit: 'yr' },
                  { label: 'Papers', val: '2', unit: '' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'Outfit', fontSize: 28, fontWeight: 700 }}>
                      <span className="text-white">{s.val}</span>
                      <span style={{ color: '#E040FB' }}>{s.unit}</span>
                    </div>
                    <div className="text-[9px] font-mono uppercase mt-1" style={{ color: 'var(--text-very-muted)', letterSpacing: '1px' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div
              className="p-8 md:p-12 flex flex-col justify-center"
              style={{ borderLeft: '1px solid var(--border-default)' }}
            >
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'EMAIL' && link.label !== 'RESUME' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="scroll-reveal contact-link flex items-center justify-between py-4 px-4 -mx-4 rounded-lg group"
                  style={{ transitionDelay: `${i * 100}ms`, borderBottom: i < contactLinks.length - 1 ? '1px solid rgba(120,100,255,0.08)' : 'none' }}
                >
                  <div>
                    <div className="text-[9px] uppercase font-mono mb-1" style={{ letterSpacing: '1.5px', color: 'rgba(185,127,255,0.5)' }}>
                      {link.label}
                    </div>
                    <div className="contact-value text-[12px] font-mono transition-colors" style={{ color: 'var(--text-muted)' }}>
                      {link.value}
                    </div>
                  </div>
                  <span className="contact-arrow text-[14px] transition-transform" style={{ color: 'var(--text-very-muted)' }}>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="flex items-center justify-between mt-12 text-[10px] font-mono">
          <span style={{ color: '#B97FFF' }}>neha_r · v3.0.0</span>
          <span style={{ color: 'var(--text-whisper)' }}>
            © 2025 · Model trained on 3 years of production ML · All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
