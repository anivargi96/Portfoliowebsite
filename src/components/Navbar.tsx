import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certification' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Scrolled state removed; not used anymore

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: [0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? 'bg-blue-900 shadow-2xl border-b border-blue-800'
          : 'bg-blue-600 shadow-2xl border-b border-blue-500'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* relative added here 👆 */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('about')} className="relative group">
            <span className="text-2xl md:text-3xl font-black text-white hover:scale-105 transition-transform duration-300">
              Anil Nivargi
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
          </button>

          {/* Hamburger */}
          <button
            className="text-white md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-blue-700 md:bg-transparent flex-col md:flex-row items-center md:space-x-3 text-center md:text-left z-50 transition-all duration-300`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden group ${
                  activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <span className={`absolute inset-0 ${darkMode ? 'bg-blue-800' : 'bg-blue-700'}`}></span>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {item.name}
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkModeToggle}
              className="ml-0 md:ml-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
