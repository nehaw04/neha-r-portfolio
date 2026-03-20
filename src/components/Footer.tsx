import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { toast } from 'sonner';

const contactLinks = [
  { label: 'EMAIL', value: 'nehar.xiaeroor@email.com', action: 'copy' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/neha-r', href: 'https://linkedin.com/in/neha-r' },
  { label: 'GITHUB', value: 'github.com/nehaw04', href: 'https://github.com/nehaw04' },
  { label: 'RESUME', value: 'Download CV', href: '/resume.pdf' },
];

const Footer = () => {
  const ref = useScrollReveal();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [shakeFields, setShakeFields] = useState<Record<string, boolean>>({});

  const handleEmailCopy = async () => {
    await navigator.clipboard.writeText('nehar.xiaeroor@email.com');
    toast('✓ Email copied to clipboard', {
      style: {
        background: '#1A1A2E',
        border: '1px solid rgba(95,255,160,0.3)',
        color: '#5FFFA0',
        fontSize: 12,
        borderRadius: 8,
        padding: '10px 20px',
      },
      duration: 2500,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const empty: Record<string, boolean> = {};
    if (!formData.name.trim()) empty.name = true;
    if (!formData.email.trim()) empty.email = true;
    if (!formData.message.trim()) empty.message = true;
    if (Object.keys(empty).length) {
      setShakeFields(empty);
      setTimeout(() => setShakeFields({}), 600);
      return;
    }

    setFormState('sending');
    try {
      const res = await fetch('https://formspree.io/f/xaqpvkdg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const handleLinkClick = (link: typeof contactLinks[0]) => {
    if (link.action === 'copy') {
      handleEmailCopy();
    }
  };

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
            <div className="p-6 sm:p-8 md:p-12" style={{ background: 'rgba(185,127,255,0.04)' }}>
              <span className="text-[9px] font-mono" style={{ color: '#B97FFF' }}>
                // ready to deploy
              </span>

              <h3 className="mt-4" style={{ fontFamily: 'Outfit', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#E2E0FF', lineHeight: 1.15 }}>
                Let's build <span className="gradient-text">something</span> intelligent.
              </h3>

              <p className="mt-4 text-[11px] font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Currently open to internship or project opportunities in AI, Machine Learning, or Salesforce Development.
              </p>

              <div className="flex gap-8 mt-8">
                {[
                  { label: 'AI/ML Projects', val: '10', unit: '+' },
                  { label: 'Grad Year', val: '2027', unit: '' },
                  { label: 'Aptitude Solved', val: '300', unit: '+' },
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
              className="p-6 sm:p-8 md:p-12 flex flex-col justify-center"
              style={{ borderLeft: '1px solid var(--border-default)' }}
            >
              {/* Contact Form */}
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-3xl mb-3" style={{ color: '#5FFFA0' }}>✓</div>
                  <p style={{ fontFamily: 'Outfit', fontSize: 14, color: 'white' }}>
                    Message sent! I'll get back to you soon.
                  </p>
                  <p className="mt-1 text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                    Usually within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mb-6 space-y-3">
                  {(['name', 'email', 'message'] as const).map((field) => {
                    const isShaking = shakeFields[field];
                    const commonStyle = {
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isShaking ? 'rgba(255,107,138,0.6)' : 'rgba(120,100,255,0.15)'}`,
                      borderRadius: 10,
                      padding: '13px 16px',
                      color: '#E2E0FF',
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 12,
                      outline: 'none',
                      width: '100%',
                      transition: 'border-color 0.2s',
                    };
                    if (field === 'message') {
                      return (
                        <textarea
                          key={field}
                          placeholder="Message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`resize-none focus:border-[rgba(224,64,251,0.5)] ${isShaking ? 'shake-field' : ''}`}
                          style={commonStyle}
                        />
                      );
                    }
                    return (
                      <input
                        key={field}
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        className={`focus:border-[rgba(224,64,251,0.5)] ${isShaking ? 'shake-field' : ''}`}
                        style={commonStyle}
                      />
                    );
                  })}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full font-mono font-semibold uppercase transition-transform hover:scale-[1.02] disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #7B5EA7, #E040FB)',
                      color: 'white',
                      padding: 14,
                      borderRadius: 10,
                      fontSize: 12,
                      letterSpacing: 1,
                      border: 'none',
                      cursor: formState === 'sending' ? 'wait' : 'pointer',
                    }}
                  >
                    {formState === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                  {formState === 'error' && (
                    <p className="text-[11px] font-mono mt-1" style={{ color: '#FF6B8A' }}>
                      Something went wrong. Please email me directly.
                    </p>
                  )}
                </form>
              )}

              {/* Contact links */}
              {contactLinks.map((link, i) => {
                const isEmail = link.action === 'copy';
                const Tag = isEmail ? 'button' : 'a';
                const extraProps = isEmail
                  ? { onClick: () => handleLinkClick(link), type: 'button' as const }
                  : { href: link.href, target: '_blank' as const, rel: 'noopener noreferrer' };

                return (
                  <Tag
                    key={link.label}
                    {...(extraProps as any)}
                    className="scroll-reveal contact-link flex items-center justify-between py-4 px-4 -mx-4 rounded-lg group w-full text-left"
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
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 text-[10px] font-mono gap-2">
          <span style={{ color: '#B97FFF' }}>neha_r · v3.0.0</span>
          <span className="text-center" style={{ color: 'var(--text-whisper)' }}>
            © 2025 · Model trained on 3 years of production ML · All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
