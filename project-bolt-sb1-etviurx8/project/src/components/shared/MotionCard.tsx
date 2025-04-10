import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHoverAnimation } from './animations';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const MotionCard = ({ children, className = '', delay = 0 }: MotionCardProps) => {
  return (
    <motion.div
      variants={cardHoverAnimation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;