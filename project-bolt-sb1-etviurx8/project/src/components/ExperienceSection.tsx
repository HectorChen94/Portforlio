import React from 'react';
import { motion } from 'framer-motion';
import MotionCard from './shared/MotionCard';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Front-end Development Intern',
      company: 'LINK GROUP PTY LTD',
      period: 'Sep 2024 - Dec 2024',
      description: [
        'Installed and learned Flutter to support development tasks',
        'Adjusted menu list item sizes for responsive design',
        'Implemented dynamic placeholders for menu items',
        'Enhanced app accessibility via backend API and QR codes',
        'Collaborated via ClickUp and WeChat',
        'Managed GitHub version control'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: 'Jan 2025 - Present',
      description: [
        'Currently exploring freelance opportunities in web development',
        'Building portfolio-ready projects using modern web technologies',
        'Focusing on improving UI/UX, responsiveness, and performance',
      ]
    },
  ];

  return (
    <section className="py-16" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Experience
      </motion.h2>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <MotionCard
            key={index}
            className="timeline-item glass-card p-6"
            delay={index * 0.1}
          >
            <div className="timeline-dot" />
            <h3 className="text-xl font-display font-semibold mb-1">{exp.title}</h3>
            <p className="text-primary-white/60 mb-2">
              {exp.company} • {exp.period}
            </p>
              {Array.isArray(exp.description) ? (
                <ul className="list-disc list-inside space-y-1 text-primary-white/80">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-white/80">{exp.description}</p>
              )}

          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;