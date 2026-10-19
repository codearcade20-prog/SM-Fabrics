import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-clean">
      <div className="container footer-container">
        
        {/* Top 4-Column Grid */}
        <div className="footer-grid">
          
          {/* Col 1: Brand & Credibility */}
          <div className="footer-col brand-col">
            <div className="footer-brand-wrap">
              <div className="footer-logo-box">
                <img 
                  src="/favicon.svg" 
                  alt="SM Logo" 
                  className="footer-logo-img"
                />
              </div>
              <div>
                <span className="footer-brand-name">SM FILTER &amp; FABRIC</span>
                <span className="footer-brand-tag">Industrial Filtration Solutions • Chennai</span>
              </div>
            </div>

            <p className="footer-about-text">
              Specialized industrial manufacturer and fabricator of high-tensile 
              filter cloth, heavy duck cotton canvas, and precision liquid &amp; dust bags 
              serving chemical, pharma, and processing plants across India.
            </p>

            <div className="footer-gst-chip">
              <ShieldCheck size={14} className="gst-shield" />
              <span>GST Registered: <strong>{COMPANY_INFO.gstNumber}</strong></span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Product Range</h4>
            <ul className="footer-links-list">
              {PRODUCTS_DATA.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="footer-link">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us &amp; Capabilities</a></li>
              <li><a href="#products" className="footer-link">Product Showcase</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#contact" className="footer-link">Contact &amp; Quotes</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory Address */}
          <div className="footer-col">
            <h4 className="footer-col-title">Chennai Factory</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-line">
                <MapPin size={16} className="f-icon" />
                <span className="f-text">{COMPANY_INFO.address.full}</span>
              </div>

              <div className="footer-contact-line">
                <Phone size={16} className="f-icon" />
                <div className="f-phones">
                  {COMPANY_INFO.phones.map((ph, idx) => (
                    <a key={ph.raw} href={`tel:${ph.raw}`} className="f-phone-link">
                      {ph.display}{idx < COMPANY_INFO.phones.length - 1 ? ', ' : ''}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-contact-line">
                <MessageCircle size={16} className="f-icon" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.clean}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="f-link"
                >
                  WhatsApp: +91 {COMPANY_INFO.whatsapp.display}
                </a>
              </div>

              <div className="footer-contact-line">
                <Mail size={16} className="f-icon" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="f-link">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>SM Filter &amp; Fabric</strong>, Chennai. All rights reserved.
          </p>
          <div className="bottom-tagline">
            <span className="developer-credit">
              Developed by{' '}
              <a 
                href="https://codearcade20.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-link"
              >
                CodeArcade
              </a>
            </span>
          </div>
          <button 
            type="button" 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
