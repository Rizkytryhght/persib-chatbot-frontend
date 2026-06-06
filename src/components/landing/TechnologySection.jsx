import React from 'react';
import { landingData } from '../../data/landingData';

const TechnologySection = () => {
  return (
    <section className="technology-section text-center">
      <h2 className="section-title">Technology</h2>
      <p className="section-description">Clean and appealing with polished technology, and visualization sections.</p>
      
      <div className="tech-flex">
        {landingData.technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-label">{tech.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;