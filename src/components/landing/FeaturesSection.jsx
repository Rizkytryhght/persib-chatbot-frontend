import React from 'react';
import Card from '../common/Card';
import { landingData } from '../../data/landingData';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {landingData.features.map((feature, index) => (
          <Card key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;