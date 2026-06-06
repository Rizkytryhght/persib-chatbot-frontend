import React from 'react';
import { landingData } from '../../data/landingData';

const HowItWorksSection = () => {
  return (
    <section className="info-section">
      <h2 className="section-title">How It Works (Educational)</h2>
      <p className="section-description">
        The thesis terminology of the thesis project takes allow about the RAG workflow logos to generating computations and docs.
      </p>
      <div className="process-flow">
        {landingData.howItWorks.map((step, index) => (
          <React.Fragment key={index}>
            <div className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
            {index < landingData.howItWorks.length - 1 && (
              <div className="process-arrow">&rarr;</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;