import React from 'react';
import { 
  Building2, 
  FileCheck, 
  UserCheck, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './AboutUs.css';

export default function AboutUs() {
  const materials = [
    { name: "Polypropylene (PP)", temp: "90°C", chemical: "Excellent Acid & Alkali Resistance", microns: "0.5 - 100 µm" },
    { name: "Natural Cotton Canvas", temp: "120°C", chemical: "Organic Oils & Neutral Slurries", microns: "10 - 250 µm" },
    { name: "Polyester (PE)", temp: "150°C", chemical: "Strong Mineral Acids & Dry Dust", microns: "1 - 150 µm" },
    { name: "Nylon Monofilament", temp: "115°C", chemical: "High Abrasion & Alkali Tolerance", microns: "5 - 300 µm" }
  ];

  return (
    <section id="about" className="section-padding bg-cream-tint about-clean-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="clean-section-header">
          <span className="pill-badge pill-badge-gold">
            <span className="pill-dot" />
            Company Background &amp; Credentials
          </span>
          <h2 className="clean-section-title">
            About SM Filter &amp; Fabric
          </h2>
          <p className="clean-section-subtitle">
            Reliable industrial filtration manufacturing and custom fabric conversion based in Vyasarpadi / Kodungaiyur, Chennai.
          </p>
        </div>

        {/* Split Grid */}
        <div className="about-split-grid">
          
          {/* Left Column: Business Overview & Leadership */}
          <div className="about-left-col">
            <div className="about-story-card clean-card">
              <h3 className="story-title">
                Precision Filtration Engineered in Chennai
              </h3>
              <p className="story-text">
                <strong>SM Filter &amp; Fabric</strong> is a specialized manufacturer and supplier of 
                heavy-duty industrial filter fabrics, custom-stitched filter bags, and technical textiles. 
                Under the leadership of Proprietor <strong>C. Selvarani</strong>, our workshop is equipped 
                with precision sewing machinery, heat-slitting, and ring-crimping tools to produce exact 
                machinery replacements for filter presses, baghouses, centrifuges, and fluid bed dryers.
              </p>

              {/* Verified Credentials Row */}
              <div className="credentials-pills-row">
                <div className="cred-badge-item">
                  <UserCheck size={18} className="cred-icon" />
                  <div>
                    <span className="cred-label">Proprietor</span>
                    <strong className="cred-val">{COMPANY_INFO.proprietor}</strong>
                  </div>
                </div>

                <div className="cred-badge-item">
                  <FileCheck size={18} className="cred-icon" />
                  <div>
                    <span className="cred-label">GST Identification</span>
                    <strong className="cred-val">{COMPANY_INFO.gstNumber}</strong>
                  </div>
                </div>

                <div className="cred-badge-item">
                  <MapPin size={18} className="cred-icon" />
                  <div>
                    <span className="cred-label">Factory Location</span>
                    <strong className="cred-val">Kodungaiyur, Chennai</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Media Matrix */}
          <div className="about-right-col">
            <div className="matrix-card clean-card">
              <div className="matrix-header">
                <div>
                  <h4 className="matrix-title">Technical Filtration Media Capabilities</h4>
                  <p className="matrix-subtitle">Materials calibrated for chemical compatibility and thermal limits</p>
                </div>
                <Award size={24} className="matrix-icon" />
              </div>

              <div className="matrix-table-wrap">
                <table className="matrix-table">
                  <thead>
                    <tr>
                      <th>Media Type</th>
                      <th>Max Temp</th>
                      <th>Micron Span</th>
                      <th>Chemical Resistance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((mat, i) => (
                      <tr key={i}>
                        <td className="mat-name">
                          <strong>{mat.name}</strong>
                        </td>
                        <td>{mat.temp}</td>
                        <td><span className="micron-tag">{mat.microns}</span></td>
                        <td className="chem-text">{mat.chemical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="matrix-footer">
                <CheckCircle size={16} className="matrix-check" />
                <span>Custom fabric widths, slit coils, and sewn sleeves available upon request.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
