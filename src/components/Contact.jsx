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
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import './Contact.css';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'baa44615-d58e-41e6-85b9-0c4932146c5b';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: PRODUCTS_DATA[0].name,
    quantity: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Factory Enquiry: ${formData.product} - ${formData.name}`,
          from_name: 'SM Filter Website Form',
          to_email: 'smfilterfabric@gmail.com',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          product: formData.product,
          quantity: formData.quantity || 'Standard specification',
          message: formData.message || 'No additional technical notes provided.'
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          name: '',
          phone: '',
          email: '',
          product: PRODUCTS_DATA[0].name,
          quantity: '',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: data.message || 'Submission failed. Please check your network and try again.'
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Unable to connect to the mail server. Please try calling or using WhatsApp.'
      });
    }
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

          {/* Right Column: Clean Interactive Enquiry Form */}
          <div className="contact-form-col">
            <div className="form-container-card clean-card">
              <div className="form-header">
                <h3 className="form-heading">Send a Quick Quote Request</h3>
                <p className="form-subtext">Direct factory pricing & technical consultation within 24 hours.</p>
              </div>

              {status.submitted && (
                <div className="form-alert form-alert-success" style={{ marginBottom: '1.25rem' }}>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Enquiry Received Successfully!</strong>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem' }}>
                      Thank you. We have received your request and our team will contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="form-alert form-alert-error" style={{ marginBottom: '1.25rem' }}>
                  <AlertCircle size={20} />
                  <div>
                    <strong>Unable to Send</strong>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem' }}>
                      {status.error}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="quote-form-clean">

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name / Company Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name or business name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* 2-Column Responsive Row for Phone & Email */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp *</label>
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
                    <label htmlFor="email" className="form-label">Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. purchase@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
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
                  disabled={status.submitting}
                  className="btn-clean btn-primary form-submit-btn"
                >
                  {status.submitting ? (
                    <>
                      <span className="btn-spinner" />
                      <span>Sending ...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Your Enquiry</span>
                    </>
                  )}
                </button>



              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
