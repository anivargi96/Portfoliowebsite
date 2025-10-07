import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certification from './pages/Certification';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
        <div className="aurora-bg" />
        <Navbar />
        <div className="relative z-10">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Certification />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;