import React from "react";
import Card from "../common/Card";
import { landingData } from "../../data/landingData";

const UseCaseSection = () => {
  return (
    <section className="use-case-section">
      <h2 className="section-title">Use Case</h2>

      <div className="use-case-grid">
        {landingData.useCases.map((useCase) => (
          <Card key={useCase.title} className="use-case-card">
            <div className="use-case-image-wrapper">
              <img
                src={useCase.image}
                alt={useCase.title}
                className="use-case-image"
              />
            </div>
            
            <div className="use-case-content">
              <h4 className="use-case-title">{useCase.title}</h4>
              <p className="use-case-desc">{useCase.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UseCaseSection;