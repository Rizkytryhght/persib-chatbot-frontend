import React from 'react';
import Card from '../common/Card';
import analyticsChart from "../../assets/images/analytics-chart2.jpg";

const ScalabilitySection = () => {
  return (
    <section className="scalability-section text-center">
      <h2 className="section-title">
        Matchday Scalability
      </h2>

      <p className="section-description">
        Siap Menghadapi Lonjakan Pertanyaan Saat Pertandingan Besar.
      </p>

      <Card className="dashboard-mockup">
        <div className="mockup-header">
          Analytics
        </div>

        <div className="mockup-graph-area">

          <div className="graph-main">
            <img
              src={analyticsChart}
              alt="Analytics Chart"
              className="analytics-image"
            />
          </div>

          <div className="graph-sidebar">
            <div className="stat-box">3.20K</div>
            <div className="stat-box">3.234</div>
            <div className="stat-box">233</div>
          </div>

        </div>
      </Card>
    </section>
  );
};
export default ScalabilitySection;