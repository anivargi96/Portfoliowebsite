import { Github, Globe, Brain, Leaf, Code, Database, Shield, Calendar, Coffee, User, QrCode, ShoppingCart, Book } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const Projects = () => {
  const projects = [
  // ML/AI Projects
  {
    title: "Crop Prediction Analysis",
    description: "Machine learning model that predicts suitable crops based on specific soil conditions and weather patterns, helping farmers make informed decisions.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-green-500 to-emerald-500",
    category: "Machine Learning",
    icon: Brain,
    featured: true,
  },
  {
    title: "Plant Disease Detection",
    description: "Deep learning application that detects plant diseases from images using CNN models, enabling early diagnosis and treatment for agricultural purposes.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-lime-500 to-green-600",
    category: "Machine Learning",
    icon: Leaf,
    featured: true,
  },

  // Full Stack Web Projects
  {
    title: "Student Management System",
    description: "Comprehensive CRUD application for managing student details with secure authentication and role-based access control.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-blue-500 to-cyan-500",
    category: "Full Stack",
    icon: Code,
    featured: true,
  },
  {
    title: "Doctor Appointment Scheduler",
    description: "Real-time appointment booking system allowing patients to book, cancel, and manage doctor appointments with automated notifications.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-purple-500 to-pink-500",
    category: "Full Stack",
    icon: Calendar,
    featured: true,
  },
  {
    title: "Cafe Management System",
    description: "Complete cafe management solution for handling orders, inventory tracking, and billing operations efficiently.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-orange-500 to-amber-500",
    category: "Full Stack",
    icon: Coffee,
    featured: true,
  },
  {
    title: "E-Learning Management System",
    description: "Full-featured Java web application for managing courses, students, and instructors with authentication and role-based access.",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Hibernate"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-blue-500 to-indigo-500",
    category: "Full Stack",
    icon: User,
    featured: true,
  },
  {
    title: "Online Banking System",
    description: "Java-based banking application to manage accounts, transactions, and user authentication with secure database integration.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST API"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-green-500 to-teal-500",
    category: "Full Stack",
    icon: Shield,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive personal portfolio showcasing skills, projects, and downloadable resume with dark mode support.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-indigo-500 to-blue-500",
    category: "Full Stack",
    icon: Globe,
    featured: false,
  },

  // Backend API Projects
  {
    title: "User Authentication API",
    description: "Secure JWT-based authentication system with login, signup, and profile management functionalities.",
    technologies: ["Node.js", "Express", "JWT", "bcrypt", "MySQL"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-rose-500 to-red-500",
    category: "Backend",
    icon: Shield,
    featured: false,
  },
  {
    title: "QR Code Attendance System",
    description: "Generate and scan QR codes for automated student/teacher attendance tracking with real-time updates.",
    technologies: ["Node.js", "Express", "MySQL", "QR Code Library"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-teal-500 to-cyan-500",
    category: "Backend",
    icon: QrCode,
    featured: false,
  },
  {
    title: "Task Management API",
    description: "RESTful API for creating, updating, and managing tasks with user authentication and authorization.",
    technologies: ["Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-violet-500 to-purple-500",
    category: "Backend",
    icon: Database,
    featured: false,
  },
  {
    title: "E-Commerce Backend",
    description: "Complete e-commerce backend with products, cart management, orders, and payment integration APIs.",
    technologies: ["Node.js", "Express", "MySQL", "Stripe API"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-pink-500 to-rose-500",
    category: "Backend",
    icon: ShoppingCart,
    featured: false,
  },

  // Additional Java Projects
  {
    title: "Library Management System",
    description: "Java Spring Boot application for managing library books, members, and borrow/return operations.",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Hibernate"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-indigo-500 to-purple-500",
    category: "Full Stack",
    icon: Book, // import a Book icon from lucide-react
    featured: true,
  },
  {
    title: "Hotel Reservation System",
    description: "Web application to manage hotel rooms, bookings, and customers using Java Spring Boot and MySQL.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    github: "https://github.com/anivargi96",
    live: "#",
    color: "from-pink-500 to-rose-500",
    category: "Full Stack",
    icon: Coffee, 
    featured: true,
  }
];

  // const categories = ["All", "Machine Learning", "Full Stack", "Backend"]; // reserved for future filtering UI

  return (
    <section id="projects" className="min-h-screen pt-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl fade-in">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Personal Project 
          </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A collection of academic and personal projects showcasing expertise in machine learning, full-stack development, and backend technologies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">ML Projects</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Full Stack</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Backend APIs</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
            <div
              key={index}
                className="group relative rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Gradient Header */}
                <div className={`relative h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, i: Key | null | undefined) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                      <Github size={16} />
                      <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                      <Globe size={16} />
                      <span>Demo</span>
                  </a>
                </div>
              </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            );
          })}
            </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            💡 Most projects were developed during my college days as part of coursework and personal learning
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;