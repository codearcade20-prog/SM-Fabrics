import React from 'react';
import { MessageCircle, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './CtaBanner.css';

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent(
    'Hello SM Filter & Fabric, I need a bulk quote / custom dimension filter fabric inquiry.'
  )}`;

  return (
    <section className="section-padding bg-white cta-banner-section">
      <div className="container">
        
        {/* AgroLnk Style Deep Contrast Rounded Card */}
        <div className="cta-contrast-card">
          <div className="cta-badge-wrap">
            <span className="pill-badge pill-badge-gold">
              <span className="pill-dot" />
              Direct Commercial Supply
            </span>
          </div>

          <h2 className="cta-headline">
            Need Custom Dimensions or <br className="cta-break" />
            <span className="cta-gold-accent">Bulk Industrial Fabric Supply?</span>
          </h2>

          <p className="cta-subtext">
            Connect directly with our Chennai technical team for tailored sample swatches, 
            fabric rolls, and exact replacement filter bags. Fast dispatch across India.
          </p>

          <div className="cta-actions-row">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clean btn-brand-green cta-main-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Inquiry ({COMPANY_INFO.whatsapp.display})</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="btn-clean btn-primary-dark cta-phone-btn"
            >
              <PhoneCall size={18} />
              <span>Call Direct: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>

          {/* Practical Service Badges */}
          <div className="cta-trust-chips">
            <span className="trust-chip">
              <CheckCircle2 size={15} className="trust-icon" />
              Custom Stitching to Machinery Spec
            </span>
            <span className="trust-chip">
              <CheckCircle2 size={15} className="trust-icon" />
              Sample Swatches Provided
            </span>
            <span className="trust-chip">
              <CheckCircle2 size={15} className="trust-icon" />
              Pan-India Logistics Dispatch
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
