import React from 'react';
import { ShieldCheck, Cog, Factory, Layers, ArrowRight } from 'lucide-react';
import { CORE_PILLARS, COMPANY_INFO } from '../data/companyData';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const iconComponents = {
    ShieldCheck: ShieldCheck,
    Cog: Cog,
    Factory: Factory,
    Layers: Layers
  };

  const pillarBadges = ["Pillar 01", "Pillar 02", "Pillar 03", "Pillar 04"];

  return (
    <section id="why-us" className="section-padding bg-light-tint why-us-section">
      <div className="container">
        
        {/* Section Header (AgroLnk Clean Centered Style) */}
        <div className="clean-section-header">
          <span className="pill-badge pill-badge-burgundy">
            <span className="pill-dot" />
            Why Choose SM Filter &amp; Fabric
          </span>
          <h2 className="clean-section-title">
            Engineered for Extreme Industrial Demands
          </h2>
          <p className="clean-section-subtitle">
            Direct manufacturing in Chennai delivering durable, high-pressure filtration textiles 
            customized to your machinery and chemical specifications.
          </p>
        </div>

        {/* 4 Clean Process/Pillar Cards (AgroLnk Step Card Architecture) */}
        <div className="pillars-cards-grid">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = iconComponents[pillar.iconName] || ShieldCheck;
            return (
              <div key={pillar.id} className="pillar-clean-card clean-card">
                
                {/* Top Row: Icon + Step Badge */}
                <div className="pillar-top-row">
                  <div className={`pillar-icon-wrap icon-theme-${index}`}>
                    <Icon size={22} className="pillar-clean-icon" />
                  </div>
                  <span className="step-badge">{pillarBadges[index]}</span>
                </div>

                {/* Content */}
                <h3 className="pillar-clean-title">{pillar.title}</h3>
                <p className="pillar-clean-desc">{pillar.description}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
