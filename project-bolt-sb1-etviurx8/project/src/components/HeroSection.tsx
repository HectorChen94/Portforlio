import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[90vh] flex flex-col items-center justify-center text-center relative"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="avatar-glow"
      >
        <img
          src="/images/1744119675664.jpg"
          alt="Kim Long Tran"
          width={224}
          height={224}
          className="relative w-48 h-48 md:w-56 md:h-56 mb-8 rounded-full object-cover border-4 border-primary-blue/50 shadow-lg"
        />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl md:text-6xl font-display font-bold mb-4"
      >
        <span className="gradient-text">Kim Long Tran</span>
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl md:text-3xl font-display mb-6 text-primary-white/90"
      >
        Front-end Developer
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex gap-6 mb-8"
      >
        <a
          href="mailto:contact@kimlongtran.dev"
          className="text-primary-white hover:text-primary-pink transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/kimlongtran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-white hover:text-primary-blue transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/kimlongtran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-white hover:text-primary-yellow transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-2xl text-lg text-primary-white/60 leading-relaxed"
      >
        Passionate front-end developer focused on creating beautiful, user-friendly web experiences with modern technologies.
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;