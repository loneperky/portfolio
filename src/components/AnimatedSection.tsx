import {  ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;