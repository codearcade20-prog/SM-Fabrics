import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  SlidersHorizontal, 
  Check, 
  Info,
  Maximize2
} from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/companyData';
import './Products.css';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'liquid', label: 'Liquid & Solid Separation' },
    { id: 'woven', label: 'Cotton Canvas & Woven' },
    { id: 'nonwoven', label: 'Nonwoven Needle Felt' },
    { id: 'laboratory', label: 'Laboratory Filter Paper' },
    { id: 'air', label: 'Dust & Baghouse' },
    { id: 'specialized', label: 'Pharma & FBD Bags' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  const getWhatsappUrl = (product) => {
    return `https://wa.me/${COMPANY_INFO.whatsapp.clean}?text=${encodeURIComponent(
      `Hello SM Filter & Fabric, I would like to inquire about specifications and pricing for: ${product.name}.`
    )}`;
  };

  return (
    <section id="products" className="section-padding bg-white products-clean-section">
      <div className="container">
        
        {/* Section Header (AgroLnk Clean Style) */}
        <div className="clean-section-header">
          <span className="pill-badge pill-badge-navy">
            <span className="pill-dot" />
            Product Catalog
          </span>
          <h2 className="clean-section-title">
            Industrial Filtration Products
          </h2>
          <p className="clean-section-subtitle">
            Directly manufactured and fabricated in Kodungaiyur, Chennai. 
            Select any category to view technical specifications and request an instant WhatsApp quote.
          </p>
        </div>

        {/* Filter Pills Switch (AgroLnk Switch Pill Style) */}
        <div className="category-filter-wrap">
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (AgroLnk Real-Time Commodity Card Architecture) */}
        <div className="products-grid-clean">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item-card clean-card">
              
              {/* Product Media Container */}
              <div className="product-media-box">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-img"
                  loading="lazy"
                />
                <span className="product-category-tag">
                  {product.categoryLabel}
                </span>
                <button 
                  type="button" 
                  className="quick-view-btn"
                  onClick={() => setSelectedProduct(product)}
                  title="View full specs"
                  aria-label="View specifications"
                >
                  <Maximize2 size={15} />
                </button>
              </div>

              {/* Product Info */}
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.shortDesc}</p>

                {/* Specs Box (AgroLnk 2-Row Metric Panel) */}
                <div className="product-spec-panel">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="spec-item">
                      <span className="spec-lbl">{spec.label}</span>
                      <strong className="spec-val">{spec.value}</strong>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="product-action-row">
                  <span className="direct-procure-tag">
                    <Check size={14} className="check-icon" />
                    Custom Sizes &amp; Cuts
                  </span>

                  <a 
                    href={getWhatsappUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-clean btn-brand-green product-inquire-btn"
                    title={`Inquire about ${product.name}`}
                  >
                    <span>Inquire</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Technical Specifications (Solid Clean, NO Glassmorphism) */}
        {selectedProduct && (
          <div className="modal-backdrop-clean" onClick={() => setSelectedProduct(null)}>
            <div className="modal-window-clean" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className="pill-badge pill-badge-burgundy">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h3 className="modal-title">{selectedProduct.name}</h3>
                </div>
                <button 
                  type="button" 
                  className="modal-close-btn"
                  onClick={() => setSelectedProduct(null)}
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-image-wrap">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <p className="modal-desc">{selectedProduct.fullDesc}</p>

                <h4 className="modal-specs-title">Technical Specifications</h4>
                <div className="modal-specs-grid">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="modal-spec-row">
                      <span className="spec-name">{spec.label}</span>
                      <strong className="spec-data">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn-clean btn-outline-clean"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
                <a 
                  href={getWhatsappUrl(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clean btn-brand-green"
                >
                  <MessageCircle size={16} />
                  <span>Enquire via WhatsApp</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
