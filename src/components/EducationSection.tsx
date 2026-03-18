import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-28 relative">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Academic Background
          </p>
          <h2 className="section-title opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            Education <span className="gradient-text">& Learning</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card rounded-3xl p-8 md:p-10 hover-lift group opacity-0 animate-fade-in-up animation-delay-200"
            style={{ animationFillMode: 'forwards' }}
          >
            <div className="flex items-start gap-5">
              <div className="icon-container w-14 h-14 shrink-0 group-hover:icon-container-hover transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Integrated M.Tech in Computer Science
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Specialization in Artificial Intelligence & Machine Learning
                </p>
                <p className="text-lg text-foreground/80 font-medium mb-4">
                  VIT Bhopal University
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary/60" />
                    <span>2022 – 2027 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary/60" />
                    <span>Bhopal, India</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-xs text-primary font-mono uppercase tracking-widest mb-3">Key Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Deep Learning',
                      'Natural Language Processing',
                      'Computer Vision',
                      'Data Structures & Algorithms',
                      'Machine Learning',
                      'Database Systems',
                    ].map((course) => (
                      <span
                        key={course}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/80 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
