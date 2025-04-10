import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionCard from './shared/MotionCard';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-primary-yellow" />,
      title: 'Hackathon Winner',
      description: 'First place in University Hackathon 2023',
    },
    {
      icon: <Award className="w-6 h-6 text-primary-blue" />,
      title: 'Academic Excellence',
      description: 'Dean\'s List for Academic Year 2022-2023',
    },
  ];

  return (
    <section className="py-16" id="achievements">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Achievements & Activities
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <MotionCard
            key={index}
            className="glass-card p-6 hover:border-primary-blue/50 transition-colors"
            delay={index * 0.1}
          >
            <div className="flex items-center gap-4 mb-4">
              {achievement.icon}
              <h3 className="text-xl font-display font-semibold">{achievement.title}</h3>
            </div>
            <p className="text-primary-white/80">{achievement.description}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;