import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent(
    'Hello SM Filter & Fabric, I would like to inquire about your industrial filtration fabrics and request a quote.'
  )}`;

  return (
    <header className={`navbar-header-clean ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner-clean">
        {/* Brand Logo (Clean Modern Presentation) */}
        <a href="#hero" className="brand-logo-clean" onClick={handleLinkClick}>
          <div className="logo-emblem-clean">
            <img 
              src="/favicon.svg" 
              alt="SM Crown Logo" 
              className="logo-img-clean"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="brand-text-clean">
            <span className="brand-title-clean">SM FILTER &amp; FABRIC</span>
            <span className="brand-sub-clean">Industrial Filtration Solutions • Chennai</span>
          </div>
        </a>

        {/* Centered Desktop Navigation (AgroLnk Pill Navigation Style) */}
        <nav className="desktop-nav-clean">
          <ul className="nav-pill-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-pill-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action: Clean WhatsApp Quote Button */}
        <div className="navbar-actions-clean">
          <a 
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clean btn-brand-green nav-quote-btn"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle size={17} />
            <span>WhatsApp Quote</span>
            <ArrowRight size={15} className="btn-arrow" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean Solid White Architecture) */}
      <div className={`mobile-drawer-clean ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-drawer-content">
          <ul className="mobile-list-clean">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-item-link"
                  onClick={handleLinkClick}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="item-arrow" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-buttons">
            <a 
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clean btn-brand-green full-width"
              onClick={handleLinkClick}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Instant Inquiry</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="btn-clean btn-primary-dark full-width mt-2"
              onClick={handleLinkClick}
            >
              <span>Call: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
