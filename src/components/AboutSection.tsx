import { GraduationCap, Building2, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'VIT Bhopal University',
    detail: 'Integrated M.Tech in AI & ML (Class of 2027)',
    color: 'from-primary/20 to-secondary/20',
  },
  {
    icon: Building2,
    title: 'Salesforce Intern @ Impaqtive',
    detail: 'Apex, CRM customization & workflow optimization',
    color: 'from-secondary/20 to-primary/20',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First AI',
    detail: 'Building offline, local AI systems that protect user data',
    color: 'from-accent/20 to-primary/20',
  },
  {
    icon: Cpu,
    title: 'Agentic AI & RAG',
    detail: 'Multi-agent systems with retrieval-augmented generation',
    color: 'from-primary/20 to-accent/20',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative">
      {/* Section Divider */}
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Get to know me
          </p>
          <h2 className="section-title opacity-0 animate-fade-in animation-delay-100" style={{ animationFillMode: 'forwards' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto mb-20 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          <div className="glass-card rounded-3xl p-8 md:p-10 relative">
            {/* Decorative quote mark */}
            <span className="absolute top-4 left-6 text-6xl text-primary/10 font-serif leading-none select-none">"</span>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4 relative z-10">
              I am an Integrated M.Tech student in Artificial Intelligence and Machine Learning at{' '}
              <span className="text-foreground font-semibold">VIT Bhopal University</span> (Class of 2027).
              My technical journey is driven by a fascination with how machines learn and a commitment to{' '}
              <span className="text-primary font-semibold">Data Privacy</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              While many are moving toward cloud-based AI, I focus on building{' '}
              <span className="text-foreground font-semibold">offline, local AI systems</span> that protect user data.
              My experience spans from deep-learning projects like AutoForm-AI to enterprise-grade development
              during my Salesforce internship at Impaqtive. I thrive at the intersection of{' '}
              <span className="text-primary font-semibold">logical problem-solving</span> and{' '}
              <span className="text-primary font-semibold">creative software architecture</span>.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card rounded-3xl p-8 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-5">
                <div className={`icon-container w-14 h-14 shrink-0 bg-gradient-to-br ${item.color} group-hover:icon-container-hover transition-all duration-300`}>
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Block */}
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20" />
            <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              Professional <span className="gradient-text">Experience</span>
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20" />
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10 group hover-lift">
            <div className="flex items-start gap-5">
              <div className="icon-container w-14 h-14 shrink-0 group-hover:icon-container-hover transition-all duration-300">
                <Building2 className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Salesforce Development Intern</h4>
                    <p className="text-primary text-sm font-medium">Impaqtive</p>
                  </div>
                  <span className="text-muted-foreground text-xs font-mono bg-primary/5 px-3 py-1 rounded-full w-fit">
                    Oct 2025 – Dec 2025
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Collaborated with the consulting team to design and implement custom Salesforce solutions.
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Gained hands-on experience with Apex programming and CRM customization.
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    Assisted in optimizing business workflows to improve client operational efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
