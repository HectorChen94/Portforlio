import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionCard from './shared/MotionCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Fly Dream Air Web App -Group Project',
      description: 'A  web application for airport with functional ticket purchasing options and admin dashboard using simple HTML, CSS, and JavaScript.',
      github: 'https://github.com/ByronBBanz/CSIT214_Project',
      // demo: 'https://ecommerce-demo.com',
      tags: ['HTML', 'CSS', 'Javascript'],
    },
    {
      title: 'Hammer Time -Group Project',
      description: 'A  web application for a Hammer Store with functional cart and checkout options using simple HTML, CSS, and JavaScript.',
      github: 'https://github.com/ByronBBanz/CSIT214_Project',
      // demo: 'https://task-manager-demo.com',
      tags: ['HTML', 'CSS', 'Javascript'],
    },
  ];

  return (
    <section className="py-16" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <MotionCard
            key={index}
            className="glass-card p-6 hover:border-primary-pink/50 transition-colors"
            delay={index * 0.1}
          >
            <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
            <p className="text-primary-white/80 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 text-primary-white/60 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-white/60 hover:text-primary-yellow transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </a>
              {/* <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-white/60 hover:text-primary-blue transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </a> */}
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;