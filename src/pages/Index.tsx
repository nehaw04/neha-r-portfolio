import ParticleNetwork from '@/components/ParticleNetwork';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen grid-bg" style={{ background: '#0C0C14' }}>
      <ParticleNetwork />
      <Navigation />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
