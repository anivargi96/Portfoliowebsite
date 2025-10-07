import { TrendingUp, Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'TeamLease Services Limited',
      period: 'July 2025 - Present',
      description: 'Working on enterprise software solutions, developing and maintaining scalable applications using modern technologies and best practices',
      skills: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
      highlight: 'Current',
    },
    {
      title: 'Software Engineer',
      company: 'Initea Technology',
      period: 'Mar 2025 - May 2025',
      description: 'Developed full-stack applications and contributed to software architecture decisions, focusing on clean code and efficient solutions',
      skills: ['Node.js', 'React', 'Express.js', 'MongoDB', 'TypeScript'],
    },
    {
      title: 'Software Engineering Trainee',
      company: 'Alpha Tech',
      period: 'June 2024 - Feb 2025',
      description: 'Gained practical experience in software development lifecycle, working on real-world projects and learning industry best practices',
      skills: ['Java', 'Spring Boot', 'JavaScript', 'SQL', 'Git'],
    },
    {
      title: 'Java Full Stack Development',
      company: 'TNSIF - Accenture',
      period: 'Oct 2023 - Jan 2024',
      description: 'Completed comprehensive training in Java full stack development, mastering core Java, Spring Boot, React, and modern web development practices',
      skills: ['Java', 'Spring Boot', 'React', 'REST API', 'MySQL'],
    },
    {
      title: 'AI & Cloud Intern',
      company: 'IBM - Edunet Foundation',
      period: 'Dec 2023 - Feb 2024',
      description: 'Worked on AI and cloud computing projects, gaining hands-on experience with IBM Watson, cloud infrastructure, and machine learning model deployment',
      skills: ['IBM Watson', 'Cloud Computing', 'AI/ML', 'Python'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen pt-16 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl fade-in">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Professional Journey</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building impactful solutions across diverse technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 z-10">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                
                {/* Content card */}
                <div className="relative p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500/50 group-hover:-translate-y-2 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Current badge */}
                  {exp.highlight && (
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                        {exp.highlight}
                      </span>
                    </div>
                  )}
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-6 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                      <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats footer */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-sm opacity-90">Positions</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">2+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm opacity-90">Technologies</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;