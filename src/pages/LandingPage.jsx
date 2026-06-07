import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import KnowledgeSection from '../components/landing/KnowledgeSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import ScalabilitySection from '../components/landing/ScalabilitySection';
import UseCaseSection from '../components/landing/UseCaseSection';
import TechnologySection from '../components/landing/TechnologySection';
import FAQSection from '../components/landing/FAQSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';
import '../styles/landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <Navbar />
        <HeroSection />
        <div className="landing-grid">
          <div className="grid-left"><KnowledgeSection /></div>
          <div className="grid-right"><FeaturesSection /></div>
          
          <div className="grid-left"><HowItWorksSection /></div>
          <div className="grid-right"><ScalabilitySection /></div>
          
          <div className="grid-left"><UseCaseSection /></div>
          <div className="grid-right"><TechnologySection /></div>
          
          <div className="grid-left"><FAQSection /></div>
          <div className="grid-right"><CTASection /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;