import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Architecture', href: '#about' },
  { name: 'Experiments', href: '#projects' },
  { name: 'Metrics', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass' : ''
      }`}
      style={{ height: 58 }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #7B5EA7, #E040FB)' }}
          >
            NR
          </div>
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            neha_r.model
          </span>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.name}
                onClick={() => handleClick(link.href)}
                className="px-4 py-1.5 rounded-md transition-all duration-200"
                style={{
                  fontSize: 10,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: isActive ? '#E040FB' : 'rgba(226,224,255,0.3)',
                  background: isActive ? 'rgba(224,64,251,0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(224,64,251,0.3)' : '1px solid transparent',
                }}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase"
            style={{
              letterSpacing: '1px',
              border: '1px solid rgba(95,255,160,0.2)',
              color: '#5FFFA0',
            }}
          >
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#5FFFA0] mint-pulse" />
              <span className="relative block w-2 h-2 rounded-full bg-[#5FFFA0]" />
            </span>
            model: available
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
            className="px-4 py-1.5 rounded-lg text-white text-[11px] font-semibold uppercase tracking-wider transition-transform hover:scale-[1.04]"
            style={{ background: 'linear-gradient(135deg, #7B5EA7, #E040FB)' }}
          >
            Deploy Me →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
