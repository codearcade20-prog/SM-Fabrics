import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  FileText, 
  User, 
  Send, 
  Clock, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: PRODUCTS_DATA[0].name,
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `*New Inquiry - SM Filter & Fabric*
• *Customer Name:* ${formData.name || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Product:* ${formData.product}
• *Quantity / Dimensions:* ${formData.quantity || 'Standard'}
• *Details:* ${formData.message || 'Please provide quotation and catalog.'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-light-tint contact-clean-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="clean-section-header">
          <span className="pill-badge pill-badge-burgundy">
            <span className="pill-dot" />
            Contact &amp; Factory Enquiries
          </span>
          <h2 className="clean-section-title">
            Get in Touch With Our Team
          </h2>
          <p className="clean-section-subtitle">
            Reach out directly for custom machinery dimensions, slurry operating conditions, 
            technical specifications, or fabric sample requests.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid-clean">
          
          {/* Left Column: Authentic Contact Cards */}
          <div className="contact-info-col">
            
            {/* Phone Card */}
            <div className="contact-item-card clean-card">
              <div className="contact-icon-box icon-phone">
                <Phone size={22} />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Calling Lines (Factory Direct)</h3>
                <p className="contact-card-desc">Call anytime during business hours for quotes:</p>
                <div className="phones-list">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a 
                      key={phone.raw} 
                      href={`tel:${phone.raw}`} 
                      className="phone-pill-link"
                    >
                      <Phone size={14} className="sub-phone-icon" />
                      <span>{phone.display}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-item-card clean-card">
              <div className="contact-icon-box icon-whatsapp">
                <MessageCircle size={22} />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Official WhatsApp</h3>
                <p className="contact-card-desc">Send specifications, drawings, and photos directly:</p>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent('Hello SM Filter & Fabric, I would like to inquire about industrial filter fabrics.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-highlight-link"
                >
                  <strong>+91 {COMPANY_INFO.whatsapp.display}</strong>
                  <span className="wa-status-tag">Online for Enquiries</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-item-card clean-card">
              <div className="contact-icon-box icon-email">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Official Email</h3>
                <p className="contact-card-desc">For formal purchase orders, tender drawings &amp; RFQs:</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="email-link">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="contact-item-card clean-card">
              <div className="contact-icon-box icon-address">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Registered Office &amp; Works</h3>
                <p className="address-full-text">{COMPANY_INFO.address.full}</p>
                <a 
                  href={COMPANY_INFO.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="maps-direction-link"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Form */}
          <div className="contact-form-col">
            <div className="form-container-card clean-card">
              <div className="form-header">
                <h3 className="form-heading">Send a Quick Quote Request</h3>
                <p className="form-subtext">
                  Fill in your requirements below. Clicking submit will directly launch a preformatted WhatsApp message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="quote-form-clean">
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="form-input" 
                    placeholder="Enter your name / company name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    className="form-input" 
                    placeholder="e.g. 98765 43210" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="product" className="form-label">Product / Fabric Type *</label>
                  <select 
                    id="product"
                    name="product" 
                    className="form-select"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.categoryLabel})
                      </option>
                    ))}
                    <option value="Custom Filter Fabric">Other / Custom Textile Requirement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity" className="form-label">Required Quantity / Dimensions</label>
                  <input 
                    type="text" 
                    id="quantity"
                    name="quantity" 
                    className="form-input" 
                    placeholder="e.g. 50 Filter Bags / 2 Rolls of 24oz Canvas" 
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Technical Notes (Optional)</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={3} 
                    className="form-textarea" 
                    placeholder="Specify micronic rating, machinery model, operating temperature, or slurry type..." 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-clean btn-brand-green form-submit-btn"
                >
                  <Send size={18} />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>

                <div className="form-privacy-note">
                  <CheckCircle size={14} className="privacy-check" />
                  <span>Your enquiry opens directly in WhatsApp for an instant factory response.</span>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
