import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'iZyane InnoVsolutions',
    period: '2024 - Present',
    icon: '💻',
    link: 'https://izyane.com',
    description: 'Contributing to enterprise software solutions and system integrations'
  },
  {
    title: 'Software Engineer',
    company: 'PS Codes Studio',
    period: '2023 - Present',
    icon: '🚀',
    link: 'https://pscodes.com',
    description: 'Full-stack development of client-facing web applications'
  },
  {
    title: 'IT Intern',
    company: 'Chalimbana University',
    period: '2023 - 2024',
    icon: '🎓',
    link: 'https://chalimbana.edu.zm',
    description: 'Maintained campus IT infrastructure and user support systems'
  },
  {
    title: 'Full Stack Developer',
    company: 'BizTech Solutions',
    period: '2023 - Present',
    icon: '⚡',
    link: 'https://biztech.com',
    description: 'Developed real-time business analytics dashboards'
  },
  {
    title: 'Web Developer',
    company: 'Freelance Projects',
    period: '2022 - Present',
    icon: '🌐',
    link: 'https://portfolio.com',
    description: 'Delivered custom web solutions for diverse client needs'
  }
];

export default function Experience() {
  return (
    <section className="py-12 px-6 bg-[#0d0d0d] text-[#00ff00] min-h-screen font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00ff00] relative w-fit after:content-['|'] after:animate-blink">
            $ Professional Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#00ff00]/20 rounded-md p-6 shadow-inner
                         hover:border-[#00ff00]/50 transition-all duration-300 terminal-panel"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl">{exp.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#00ff00]">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dashed hover:decoration-solid text-[#33ff33]"
                    >
                      {exp.company}
                    </a>
                    <span className="text-xs text-[#00ff00]/60">{exp.period}</span>
                  </div>
                </div>
              </div>
              <p className="ml-10 text-[#00ff00]/80 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
