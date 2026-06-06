import React from 'react';

const KnowledgeSection = () => {
  return (
    <section className="info-section">
      <h2 className="section-title">Powered by Official<br/>Knowledge Base</h2>
      <div className="knowledge-flow">
        <div className="flow-node">
          <div className="icon database">🗄️</div>
          <span>Knowledge<br/>Base</span>
        </div>
        <div className="flow-arrow">&rarr;</div>
        <div className="flow-node">
          <div className="icon retrieval">🔍</div>
          <span>Retrieval</span>
        </div>
        <div className="flow-arrow">&rarr;</div>
        <div className="flow-node">
          <div className="icon llm">🧠</div>
          <span>LLM</span>
        </div>
        <div className="flow-arrow">&rarr;</div>
        <div className="flow-node">
          <div className="icon answer">💬</div>
          <span>Answer</span>
        </div>
      </div>
      <p className="section-description">
        Clean modern and scalable knowledge chatbot interface. Strictly controlled, official responses and ensured to controlled, official responses.
      </p>
    </section>
  );
};

export default KnowledgeSection;