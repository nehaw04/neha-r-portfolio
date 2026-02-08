import { GraduationCap, Building2, ShieldCheck, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'VIT Bhopal University',
    detail: 'Integrated M.Tech in AI & ML (Class of 2027)',
  },
  {
    icon: Building2,
    title: 'Salesforce Intern @ Impaqtive',
    detail: 'Apex, CRM customization & workflow optimization',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First AI',
    detail: 'Building offline, local AI systems that protect user data',
  },
  {
    icon: Cpu,
    title: 'Agentic AI & RAG',
    detail: 'Multi-agent systems with retrieval-augmented generation',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              I am an Integrated M.Tech student in Artificial Intelligence and Machine Learning at{' '}
              <span className="text-foreground font-medium">VIT Bhopal University</span> (Class of 2027). 
              My technical journey is driven by a fascination with how machines learn and a commitment to{' '}
              <span className="text-primary font-medium">Data Privacy</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              While many are moving toward cloud-based AI, I focus on building{' '}
              <span className="text-foreground font-medium">offline, local AI systems</span> that protect user data. 
              My experience spans from deep-learning projects like AutoForm-AI to enterprise-grade development 
              during my Salesforce internship at Impaqtive. I thrive at the intersection of logical problem-solving 
              and creative software architecture.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card rounded-3xl p-8 hover-lift transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="icon-container w-14 h-14 mb-6 group-hover:icon-container-hover transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Experience Block */}
        <div className="max-w-3xl mx-auto mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <h3 className="section-title text-2xl md:text-3xl mb-8">
            Professional <span className="gradient-text">Experience</span>
          </h3>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="icon-container w-12 h-12 shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">Salesforce Development Intern</h4>
                <p className="text-primary text-sm font-medium mb-3">Impaqtive · Oct 2025 – Dec 2025</p>
                <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Collaborated with the consulting team to design and implement custom Salesforce solutions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Gained hands-on experience with Apex programming and CRM customization.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
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
