import { GraduationCap, BookOpen, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';
const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Information Science and Engineering',
      institution: 'BNM Institute of Technology',
      location: 'Bangalore',
      period: '2021 - 2024',
      grade: 'CGPA: 8.1',
      description: 'Specialized in software development, data structures, algorithms, and modern web technologies with hands-on project experience.',
      achievements: ['DSA', 'Machine Learning', 'Full Stack Development', 'Database Management'],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
    },
    {
      degree: 'Diploma',
      field: 'Computer Science and Engineering',
      institution: 'A G Patil Polytechnic',
      location: 'Solapur',
      period: '2019 - 2021',
      grade: 'Percentage: 77.41%',
      description: 'Built strong foundation in computer science fundamentals, programming concepts, and software engineering principles.',
      achievements: ['Programming Fundamentals', 'Web Technologies', 'Computer Networks', 'Operating Systems'],
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
    },
  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-cyan-500',
        icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        text: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        bg: 'from-purple-500 to-pink-500',
        icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
        text: 'text-purple-600 dark:text-purple-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="education" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 md:p-8 slide-in-right">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise through comprehensive academic training and practical learning experiences
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-900 dark:via-purple-900"></div>

          <div className="space-y-8">
            {education.map((edu, index) => {
              const colors = getColorClasses(edu.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ring-4 ring-white dark:ring-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative overflow-hidden transition-all duration-500 p-0">
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={edu.image}
                          alt={edu.institution}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-80`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white p-6">
                            <h3 className="text-3xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-lg opacity-90">{edu.field}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Institution Info */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                              {edu.institution}
                            </h4>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Grade Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <Award className={`w-5 h-5 ${colors.text}`} />
                          <span className={`font-semibold ${colors.text}`}>{edu.grade}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            <TrendingUp className="w-4 h-4" />
                            <span>Key Learnings</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.badge} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.bg} opacity-10 rounded-bl-full`}></div>
                    </div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              8.1
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">B.E in Information Science and Engineering CGPA</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              77.41%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Diploma Percentage</div>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              5+ Years
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Academic Experience</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Education;