import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/nehaw04', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nehxr', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nehar.xiaeroor@gmail.com', label: 'Email' },
];

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Column - Tagline */}
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Turning complexity into clarity — building AI systems that think, automate, 
                and deliver real-world impact with every line of code.
              </p>
            </div>

            {/* Right Column - Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/10 my-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Neha R. Crafted with passion and code.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 gradient-bg rounded-full flex items-center justify-center glow hover:glow-strong hover:scale-110 transition-all duration-300 z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
