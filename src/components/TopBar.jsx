import React from 'react';
import { Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        {/* Left: GST Registration */}
        <div className="topbar-left">
          <span className="topbar-gst">
            <FileText size={13} className="topbar-icon" />
            <span className="gst-label">GST:</span> {COMPANY_INFO.gstNumber}
          </span>
        </div>

        {/* Right: Direct Contact & Email */}
        <div className="topbar-right">
          <div className="topbar-phones">
            <Phone size={13} className="topbar-icon" />
            <span className="phone-label">Call:</span>
            {COMPANY_INFO.phones.map((phone, idx) => (
              <React.Fragment key={phone.raw}>
                <a 
                  href={`tel:${phone.raw}`} 
                  className="topbar-link topbar-phone-link"
                  title={`Call ${phone.display}`}
                >
                  {phone.display}
                </a>
                {idx < COMPANY_INFO.phones.length - 1 && <span className="phone-sep">/</span>}
              </React.Fragment>
            ))}
          </div>

          <span className="topbar-divider hide-mobile">|</span>

          <a 
            href={`mailto:${COMPANY_INFO.email}`} 
            className="topbar-link topbar-email hide-mobile"
            title="Send Email"
          >
            <Mail size={13} className="topbar-icon" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
