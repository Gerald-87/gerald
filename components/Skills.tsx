import SectionHeading from './SectionHeading';

export default function Skills() {
  const skillsData = [
    {
      title: 'Frontend Development',
      skills: [{name: 'JavaScript (ES6+)', proficiency: 90}, {name: 'React.js', proficiency: 95}, {name: 'TypeScript', proficiency: 85}, {name: 'HTML5 & CSS3', proficiency: 98}, {name: 'Responsive Design', proficiency: 92}, {name: 'Redux', proficiency: 88}],
    },
    {
      title: 'Backend Development',
      skills: [{name: 'Node.js', proficiency: 92}, {name: 'Express.js', proficiency: 90}, {name: 'RESTful APIs', proficiency: 94}, {name: 'GraphQL', proficiency: 88}],
    },
    {
      title: 'Database Technologies',
      skills: [{name: 'PostgreSQL', proficiency: 90}, {name: 'MongoDB', proficiency: 92}, {name: 'MySQL', proficiency: 89}, {name: 'Firebase', proficiency: 91}],
    },
    {
      title: 'DevOps & Tools',
      skills: [{name: 'Git & GitHub', proficiency: 95}, {name: 'Docker', proficiency: 88}, {name: 'Postman', proficiency: 92}, {name: 'Figma', proficiency: 90}],
    },
  ];

  return (
    <section id="skills" className="bg-[#1E1E1E] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-[#00ff00] mb-12 text-center">
          <span className="text-3xl">$ cat ./skills.json</span>
          <p className="mt-4 opacity-80">Technical proficiencies and expertise in modern web technologies.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#00ff00]/20 hover:border-[#00ff00]/40 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#00ff00] font-mono">$</span>
                <h3 className="text-xl font-mono text-[#00ff00]">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="font-mono text-[#00ff00]/70 hover:text-[#00ff00] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <span>{'>'}</span>
                      <span>{skill.name}</span>
                      <span className="ml-auto text-[#00ff00]/50">{skill.proficiency}%</span>
                    </div>
                    <div className="mt-1 h-1 bg-[#1E1E1E] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#00ff00]/40 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}