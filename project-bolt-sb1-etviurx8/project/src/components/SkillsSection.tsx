import React from 'react';
import { motion } from 'framer-motion';
import { skillBadgeAnimation, staggerContainer } from './shared/animations';

const SkillsSection = () => {
  const skills = {
    'Languages': ['JavaScript', 'HTML', 'CSS'],
    'Frameworks': ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    'Tools': ['Git', 'VS Code', 'Figma'],
    'Other': ['REST APIs', 'GraphQL', 'Responsive Design', 'Performance Optimization']
  };

  return (
    <section className="py-16" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display font-semibold mb-4 text-primary-white/90">
              {category}
            </h3>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap gap-2"
            >
              {skillList.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillBadgeAnimation}
                  whileHover="hover"
                  className="px-3 py-1 text-sm rounded-full bg-white/5 text-primary-white/60 border border-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;