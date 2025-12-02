import { useState } from 'react';
import { Mail, Linkedin, Github, Send, FileDown, Image, Sparkles, CheckCircle } from 'lucide-react';
// import anil from "../images/anil1.webp"

import anil1 from "../images/anil1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | "success">(null);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anilnivargi2001@gmail.com',
      link: 'mailto:anilnivargi2001@gmail.com',
      color: 'from-red-500 to-orange-500',
      description: 'Drop me an email',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Anil Nivargi',
      link: 'https://www.linkedin.com/in/anil-nivargi-4534511a0/?originalSubdomain=in',
      color: 'from-blue-500 to-cyan-500',
      description: 'Connect professionally',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'anivargi96',
      link: 'https://github.com/anivargi96',
      color: 'from-gray-700 to-gray-900',
      description: 'Check out my code',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(null), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 md:p-8 fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                
                <div className="relative p-6 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${contact.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {contact.description}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 break-words group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20"></div>
            
            <div className="relative p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Send a Message
                </h2>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 dark:text-green-400 font-semibold">Message sent successfully!</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                   Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="Anil Nivargi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                   Enter Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="anil@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                   Enter Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder-gray-400"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

              <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative p-6 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Work Gallery
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="group/img relative overflow-hidden rounded-2xl aspect-square">
                    <img 
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" 
                      src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop" 
                      alt="Project 1" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover/img:opacity-80 transition-opacity"></div>
                  </div>
                  <div className="group/img relative overflow-hidden rounded-2xl aspect-square">
                    <img 
                      className="w- h-100 object-cover group-hover/img:scale-110 transition-transform duration-500" 
                  src = {anil1}
                      alt="Project 2" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-0 group-hover/img:opacity-80 transition-opacity"></div>
                  </div>
                  <div className="group/img relative overflow-hidden rounded-2xl aspect-square">
                    <img 
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" 
                      src= {anil1}
                      alt="Project 3" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-transparent opacity-0 group-hover/img:opacity-80 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              
              <div className="relative p-10 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm">
                    <FileDown className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Download Resume</h3>
                </div>
                <p className="text-lg opacity-95 mb-6 leading-relaxed">
                  Get my latest CV in PDF format with complete details of my experience and skills.
                </p>
                <a
                  href="/cv/Anil_Nivargi_CV.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md transition-all duration-300 font-bold text-lg hover:scale-105 group/btn"
                >
                  <FileDown className="w-6 h-6 group-hover/btn:animate-bounce" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>        

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-100 shadow-lg">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm">Let's build something amazing together!</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
