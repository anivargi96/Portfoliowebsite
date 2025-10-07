import { Code2, Database, Layers, Sparkles, Briefcase, Award, Brain, Zap } from 'lucide-react';
import anil from "../images/anil.webp"
const About = () => {
  return (
    <section id="about" className="min-h-screen pt-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel p-8 md:p-10 rounded-3xl fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg">
                Full Stack Developer
              </span>
            </div>
            
            <h1 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Hi, I'm Anil Nivargi
              </span>
            </h1>
            
            <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Associate Software Engineer</span>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Crafting robust and scalable applications with expertise in{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>,{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">Spring Boot</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Node.js</span>,{' '}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">React</span>, and{' '}
              <span className="font-semibold text-pink-600 dark:text-pink-400">Generative AI</span>.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I thrive on transforming complex problems into elegant solutions, building seamless full-stack experiences that users love. Passionate about integrating AI-powered features and leveraging Generative AI to create intelligent, next-generation applications.
            </p>
            
            {/* Skills grid with enhanced styling */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Code2 className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">Full Stack</h3>
                <p className="text-sm text-blue-100">Frontend & Backend</p>
              </div>
              
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Database className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">Database</h3>
                <p className="text-sm text-green-100">MySQL Expert</p>
              </div>
              
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Layers className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">Frameworks</h3>
                <p className="text-sm text-purple-100">Spring & React</p>
              </div>
              
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Brain className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">Gen AI</h3>
                <p className="text-sm text-pink-100">Java + AI</p>
              </div>
              
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Zap className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">AI Integration</h3>
                <p className="text-sm text-yellow-100">Smart Solutions</p>
              </div>
              
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <Sparkles className="w-10 h-10 text-white mb-3 group-hover:rotate-12 transition-transform" />
                <h3 className="font-bold text-white text-lg">Innovator</h3>
                <p className="text-sm text-orange-100">Problem Solver</p>
              </div>
            </div>
          </div>

          {/* Enhanced profile image section */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 animate-ping"></div>
              
              {/* Badge */}
              <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full shadow-2xl animate-bounce">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              {/* Profile image */}
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
              
              {/* Floating tech icons */}
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border-2 border-blue-500 animate-bounce delay-500">
                <span className="text-2xl">☕</span>
              </div>
              <div className="absolute top-10 -right-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border-2 border-cyan-500 animate-bounce delay-700">
                <span className="text-2xl">⚛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;