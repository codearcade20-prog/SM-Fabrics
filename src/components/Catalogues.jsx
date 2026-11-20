import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Eye, X } from 'lucide-react';
import { CATALOGUES } from '../data/companyData';
import './Catalogues.css';

function CatalogueViewer({ catalogue, onClose }) {
  // Close on Esc + lock background scroll on both html and body (prevents double scrollbar)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [onClose]);

  const pages = Array.from({ length: catalogue.pages }, (_, i) =>
    `${catalogue.pagesDir}/page-${String(i + 1).padStart(2, '0')}.jpg`
  );

  return createPortal(
    <div className="viewer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={catalogue.title}>
      <div className="viewer-bar" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-title">
          <strong>{catalogue.title}</strong>
          <small>{catalogue.pages} pages</small>
        </div>
        <div className="viewer-actions">
          <a
            href={catalogue.file}
            download={catalogue.downloadName}
            className="btn-clean btn-brand-burgundy viewer-download"
          >
            <Download size={16} />
            <span>Download</span>
          </a>
          <button type="button" className="viewer-close" onClick={onClose} aria-label="Close viewer">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="viewer-pages">
        {pages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${catalogue.title} – page ${i + 1}`}
            className="viewer-page"
            width="1100"
            height="1556"
            loading={i < 2 ? 'eager' : 'lazy'}
            onClick={(e) => e.stopPropagation()}
          />
        ))}
      </div>
    </div>,
    document.body
  );
}

export default function Catalogues() {
  const [active, setActive] = useState(null);

  return (
    <section id="catalogues" className="catalogues-section bg-light-tint">
      <div className="container catalogues-inner">
        <div className="catalogues-heading">
          <span className="pill-badge pill-badge-burgundy">
            <span className="pill-dot" />
            Free PDF
          </span>
          <h2>Product Catalogue</h2>
          <p>
            Our complete range of filter cloths, bags, felts and cartridges with
            specifications. Tap a cover to view, or download the PDF.
          </p>
        </div>

        <div className="catalogue-list">
          {CATALOGUES.map((cat) => (
            <div key={cat.id} className="catalogue-item">
              <button
                type="button"
                id={`view-${cat.id}`}
                className="catalogue-open"
                onClick={() => setActive(cat)}
                aria-label={`View ${cat.title}`}
              >
                <img
                  src={cat.cover}
                  alt={`${cat.title} cover`}
                  className="catalogue-cover"
                  width="600"
                  height="849"
                  loading="lazy"
                />
                <span className="catalogue-view-hint">
                  <Eye size={16} />
                  View
                </span>
              </button>

              <div className="catalogue-info">
                <button type="button" className="catalogue-text" onClick={() => setActive(cat)}>
                  <strong>{cat.title}</strong>
                  <small>PDF · {cat.pages} pages · {cat.size}</small>
                </button>
                <a
                  id={`download-${cat.id}`}
                  href={cat.file}
                  download={cat.downloadName}
                  className="catalogue-dl"
                  title={`Download ${cat.title} (PDF)`}
                  aria-label={`Download ${cat.title} PDF`}
                >
                  <Download size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && <CatalogueViewer catalogue={active} onClose={() => setActive(null)} />}
    </section>
  );
}
