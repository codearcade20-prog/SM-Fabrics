import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Elegant brief timeout to ensure initial styles and DOM are ready
    const timer = setTimeout(() => {
      setFading(true);
    }, 700);

    // Completely unmount after fade transition completes
    const removeTimer = setTimeout(() => {
      setHidden(true);
    }, 1250);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <aside 
      className={`loading-screen-overlay ${fading ? 'fade-out' : ''}`}
      aria-label="Loading SM Filter and Fabric"
      role="status"
    >
      <div className="loading-content-box">
        {/* Logo Emblem with Subtle Ring */}
        <div className="loading-logo-wrap">
          <div className="loading-logo-ring" />
          <img 
            src="/favicon.svg" 
            alt="SM Filter & Fabric" 
            className="loading-logo-img"
          />
        </div>

        {/* Brand Text */}
        <h2 className="loading-title">SM FILTER &amp; FABRIC</h2>
        <span className="loading-subtitle">Industrial Filtration Solutions • Chennai</span>

        {/* Minimalist Progress Indicator */}
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </aside>
  );
}
