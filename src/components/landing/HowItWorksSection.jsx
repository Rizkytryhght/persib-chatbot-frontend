import React from "react";
import { landingData } from "../../data/landingData";

const HowItWorksSection = () => {
  return (
    <section className="info-section">
      <div className="section-header">
        <h2 className="section-title">How Maung Bot Works</h2>

        <p className="section-description">
          Powered by Retrieval-Augmented Generation (RAG), Maung Bot
          combines official club knowledge with AI to provide fast,
          reliable, and context-aware answers for every Bobotoh.
        </p>
      </div>

      <div className="process-flow">
        {landingData.howItWorks.map((step, index) => (
          <React.Fragment key={step.step}>
            <div className="process-step">
              <div className="step-number">
                {step.step}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h4 className="step-title">
                {step.title}
              </h4>

              <p className="step-desc">
                {step.desc}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;