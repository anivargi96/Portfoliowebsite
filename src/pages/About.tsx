import { Code2, Database, Layers, Sparkles, Briefcase, Brain, Zap } from 'lucide-react';
import anil from "../images/anil.webp";

const About = () => {
  return (
    <section id="about" className="">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 md:p-8 fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left Content */}
            <div className="order-2 md:order-1 space-y-6">
              
              {/* Tag */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  Full Stack Developer 
                </span>
              </div>

              {/* Name Heading */}
              <h1 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                  Hi, I’m Anil Nivargi
                </span>
              </h1>

              {/* Role */}
              <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Software Engineer</span>
              </div>

              {/* Professional Summary */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Full Stack Developer specializing in Java + Spring Boot + React, and I build scalable, secure, and user-focused applications.
                I enjoy solving real-world problems, improving system performance, and integrating modern AI tools into practical solutions.
                I love creating products end-to-end — from database design to deployment{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Java with Gen AI</span>,{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Spring Boot</span>,{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Node.js</span>,{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React and MySQL</span>, and modern{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">AI integration</span>.
              </p>

              {/* Personal Description */}
             

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Code2 className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">Full Stack</h3>
                  <p className="text-sm text-blue-100">Frontend to Backend</p>
                </div>

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Database className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">Database</h3>
                  <p className="text-sm text-green-100">MySQL & ORM</p>
                </div>

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Layers className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">Frameworks</h3>
                  <p className="text-sm text-purple-100">Spring Boot & React</p>
                </div>

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Brain className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">AI Development</h3>
                  <p className="text-sm text-pink-100">GenAI & Automation</p>
                </div>

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Zap className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">AI Integration</h3>
                  <p className="text-sm text-yellow-100">Smart App Features</p>
                </div>

                <div className="group p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <Sparkles className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-bold text-white text-lg">Innovator</h3>
                  <p className="text-sm text-orange-100">Creative Problem Solving</p>
                </div>

              </div>
            </div>

            {/* Right: Profile Image Section */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 animate-ping"></div>

                {/* Badge */}
                

                {/* Profile Image */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                  </div>

                  <img
                    src={anil}
                    alt="Anil Nivargi"
                    className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Floating Icons */}
                {/* <div className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border-2 border-blue-500 animate-bounce delay-500">
                  <span className="text-2xl">☕</span>
                </div> */}
                {/* Future icons can be added */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
