import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Layers, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import './Hero.css';

export default function Hero() {
  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent(
    'Hello SM Filter & Fabric, I am looking for custom industrial filter cloth / bags and would like to request a quote.'
  )}`;

  return (
    <section id="hero" className="hero-clean-section">
      <div className="container hero-clean-container">
        
        {/* Left Column: Headline, Subtext, Buttons & Metrics */}
        <div className="hero-left-content">
          
          {/* Pill Badge (AgroLnk Style) */}
          <div className="hero-badge-row">
            <span className="pill-badge pill-badge-burgundy">
              <span className="pill-dot" />
              <span>Chennai Industrial Filtration Manufacturer</span>
            </span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="hero-clean-title">
            Precision Filter Cloth &amp; <br className="title-break" />
            <span className="title-burgundy-accent">Custom Industrial Bags.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-clean-desc">
            Direct factory manufacturer in Kodungalyur, Chennai. Supplying high-tensile 
            filter cloth, natural cotton canvas, laboratory filter paper, nonwoven needle felt, 
            and precision-stitched centrifuge &amp; baghouse bags across India.
          </p>

          {/* Button Group (AgroLnk Style) */}
          <div className="hero-clean-btn-group">
            <a 
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clean btn-brand-green hero-primary-btn"
              title="Get instant WhatsApp quote"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Instant Quote</span>
              <ArrowRight size={17} className="btn-arrow" />
            </a>

            <a 
              href="#products"
              className="btn-clean btn-outline-clean hero-secondary-btn"
            >
              <span>Explore Product Range</span>
              <ChevronDown size={17} />
            </a>
          </div>

          {/* Trust Metrics Strip (AgroLnk Three-Item Row) */}
          <div className="hero-metrics-row">
            <div className="metric-col">
              <span className="metric-val">100%</span>
              <span className="metric-label">Custom Tailored to Spec</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-col">
              <span className="metric-val">0.5 – 200 µm</span>
              <span className="metric-label">Micronic Precision Range</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-col">
              <span className="metric-val">Pan-India</span>
              <span className="metric-label">Fast Supply &amp; Dispatch</span>
            </div>
          </div>

        </div>

        {/* Right Column: Featured Spotlight Card (AgroLnk Style) */}
        <div className="hero-right-card-wrap">
          <div className="featured-spec-card clean-card">
            
            {/* Card Header */}
            <div className="spec-card-header">
              <div className="spec-card-brand">
                <div className="spec-emblem-small">
                  <img 
                    src="/favicon.svg" 
                    alt="SM Logo" 
                    className="spec-emblem-img"
                  />
                </div>
                <div>
                  <h2 className="spec-card-title">SM Filter &amp; Fabric</h2>
                  <span className="spec-card-loc">Kodungalyur, Chennai - 600118</span>
                </div>
              </div>
              <span className="pill-badge pill-badge-green spec-status-pill">
                <span className="pill-dot" />
                Factory Direct
              </span>
            </div>

            {/* Featured Image */}
            <div className="spec-card-media">
              <img 
                src="/images/branding/hero-fabrics.jpg" 
                alt="Heavy filter cloth rolls and industrial canvas" 
                className="spec-card-photo"
              />
              <div className="spec-photo-tag">
                <Sparkles size={13} className="spec-tag-icon" />
                <span>Heavy-Duty Filter Media</span>
              </div>
            </div>

            {/* Spec Grid (AgroLnk Two-Block Metric Style) */}
            <div className="spec-metrics-panel">
              <div className="spec-block">
                <span className="spec-block-label">Available Materials</span>
                <strong className="spec-block-value">PP Felt, Canvas, Nylon, PE</strong>
              </div>
              <div className="spec-block">
                <span className="spec-block-label">Filtration Quality</span>
                <strong className="spec-block-value text-green">
                  <CheckCircle2 size={14} className="inline-icon" />
                  Industrial Tested
                </strong>
              </div>
            </div>

            {/* Action Bar */}
            <div className="spec-action-bar">
              <div className="spec-proprietor-info">
                <span className="spec-info-label">Supply Type</span>
                <strong className="spec-info-name">Custom &amp; Bulk Orders</strong>
              </div>
              <a 
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clean btn-brand-green spec-cta-btn"
              >
                <span>Instant Inquiry</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
