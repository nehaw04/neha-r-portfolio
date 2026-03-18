import { Github, Linkedin, Mail, ArrowUp, MapPin, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/nehaw04', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nehxr', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:neha.2022@vitbhopal.ac.in', label: 'Email' },
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
    <footer id="contact" className="py-28 relative">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-14 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
            {/* Left Column */}
            <div className="text-center lg:text-left max-w-lg">
              <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
                Get in touch
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Let's Build Something{' '}
                <span className="gradient-text">Together</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                I am currently open to internship or project opportunities in AI,
                Machine Learning, or Salesforce Development.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm justify-center lg:justify-start mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bhopal / Kochi · Open to Remote</span>
              </div>
              <a href="mailto:neha.2022@vitbhopal.ac.in">
                <Button className="gradient-bg text-white px-8 py-6 rounded-xl text-base hover-lift glow hover:glow-strong transition-all duration-300 group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Say Hello
                </Button>
              </a>
            </div>

            {/* Right Column */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn w-14 h-14"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider my-10 max-w-full" />

          {/* Copyright */}
          <div className="text-center relative z-10">
            <p className="text-muted-foreground text-sm">
              © 2026 Neha R. · Crafted with passion and code
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
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
