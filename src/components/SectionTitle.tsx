import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false
}) => {
  return (
    <AnimatedSection>
      <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
        <h2 className={`mb-4 font-bold ${light ? 'text-white' : ''}`}>
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && (
          <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-400'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
};

export default SectionTitle;