import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { navAnimation, staggerContainer } from './components/shared/animations';

// Lazy load components
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="min-h-screen relative"
      initial="initial"
      animate="animate"
    >
      <motion.nav 
        variants={navAnimation}
        className="fixed top-0 w-full bg-primary-black/20 backdrop-blur-md z-50 py-4 border-b border-white/5"
      >
        <div className="container mx-auto px-4">
          <motion.ul 
            variants={staggerContainer}
            className="flex justify-center gap-8"
          >
            {['About Me', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase().replace(' ', '-');
              return (
                <motion.li 
                  key={item}
                  variants={navAnimation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(sectionId === 'about-me' ? 'about' : sectionId)}
                    className={`text-primary-white/80 hover:text-primary-white transition-colors relative ${
                      activeSection === (sectionId === 'about-me' ? 'about' : sectionId) ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary-blue' : ''
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.nav>

      <main className="container mx-auto px-4 pt-20">
        <section id="about">
          <HeroSection />
        </section>
        <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
        </Suspense>
      </main>

      <motion.footer 
        id="contact" 
        className="container mx-auto px-4 py-16 mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3 
          className="text-2xl font-display font-semibold mb-4 text-primary-white/90 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's Connect
        </motion.h3>
        <motion.p 
          className="text-primary-white/60 mb-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to chat, feel free to reach out!
        </motion.p>
        
        <ContactForm />
        
        <div className="flex justify-center gap-6 mt-12">
          <motion.a
            href="mailto:contact@kimlongtran.dev"
            className="text-primary-white/60 hover:text-primary-pink transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/kimlongtran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-white/60 hover:text-primary-blue transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://github.com/kimlongtran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-white/60 hover:text-primary-yellow transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default App;