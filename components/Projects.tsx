'use client';

import SectionHeading from './SectionHeading';

export default function Projects() {
  const projectsData = [
    {
      title: 'School Management System',
      description: 'Manage students, teachers, classes, results, and attendance in one streamlined system.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'Tailwind CSS'],
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Secure Chat App',
      description: 'Real-time encrypted messaging with Firebase authentication and media sharing.',
      tags: ['Flutter', 'Firebase', 'Node.js'],
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Hotel Management System',
      description: 'Complete booking, check-in/out, and staff management with responsive UI.',
      tags: ['React JS', 'PHP', 'MySQL', 'Tailwind CSS'],
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Loan Management System',
      description: 'Automate loan applications, approvals, disbursement, and repayments.',
      tags: ['React JS', 'Firebase', 'CSS'],
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Results Management System',
      description: 'Secure portal for managing and publishing student grades with analytics.',
      tags: ['Next JS', 'MySQL', 'Tailwind CSS', 'HTML'],
      links: { demo: '#', code: '#' },
    },
  ];

  return (
    <section id="projects" className="bg-[#1E1E1E] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-[#00ff00] mb-12 text-center">
          <span className="text-3xl">$ ls ./projects</span>
          <p className="mt-4 opacity-80">A selection of my real-world and academic systems built with modern technologies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#00ff00]/20 hover:border-[#00ff00]/40 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#00ff00] font-mono">$</span>
                  <h3 className="text-xl font-mono text-[#00ff00]">{project.title}</h3>
                </div>
                <p className="text-[#00ff00]/70 font-mono mb-6 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1E1E1E] text-[#00ff00] px-3 py-1 rounded text-sm font-mono border border-[#00ff00]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 font-mono text-sm">
                  <a
                    href={project.links.demo}
                    className="text-[#00ff00] hover:text-[#00cc00] transition-colors duration-200 flex items-center gap-1"
                  >
                    <span>{'>'} ./open_demo</span>
                  </a>
                  <a
                    href={project.links.code}
                    className="text-[#00ff00] hover:text-[#00cc00] transition-colors duration-200 flex items-center gap-1"
                  >
                    <span>{'>'} ./view_source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
