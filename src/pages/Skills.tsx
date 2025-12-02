import { Code, Database, LayoutGrid as Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Backend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'TypeScript'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-green-500 to-emerald-500',
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['MySQL', 'Sequelize', 'JDBC','Hibernate'],
    },
    {
      title: 'Other',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: ['OOP','Data Structures', 'Algorithms', 'Machine Learning', 'JWT Authentication',' REST APIs','Docker'],
    },
  ];
  return (
    <section id="skills" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 md:p-8 fade-in">
        <h1 className="text-4xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Always Learning</h2>
          <p className="text-lg opacity-90">
            Continuously exploring new technologies and staying up-to-date with industry trends
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;