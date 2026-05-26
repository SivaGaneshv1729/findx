import { useState } from 'react';
import './PremiumHero.css';

const PremiumHero = () => {
  const [activeTab, setActiveTab] = useState('Residential');

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="display-lg hero-title">
            Secure Your Future with <br />
            <span className="text-highlight">Premium Plots</span>
          </h1>
          <p className="body-lg hero-subtitle">
            Bridge the gap between raw land potential and high-value investment. Expertly curated gated communities for investors and families.
          </p>
          
          <div className="search-widget">
            <div className="search-tabs">
              {['Residential', 'Commercial', 'Villa Plot'].map(tab => (
                <button 
                  key={tab}
                  className={`search-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="search-bar">
              <div className="search-input-group">
                <label className="label-bold">Location</label>
                <input type="text" placeholder="e.g. Diwancheruvu" className="search-input" />
              </div>
              <div className="search-divider"></div>
              <div className="search-input-group">
                <label className="label-bold">Budget</label>
                <input type="text" placeholder="Any Budget" className="search-input" />
              </div>
              
              <button className="btn btn-action search-btn">
                Search
              </button>
            </div>
          </div>
          
          <div className="trust-badges">
            <div className="badge">
              <span className="badge-value">50+</span>
              <span className="badge-label">Gated Communities</span>
            </div>
            <div className="badge">
              <span className="badge-value">10k+</span>
              <span className="badge-label">Happy Families</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-container">
            {/* Using a solid sophisticated block for now as an image placeholder */}
            <div className="premium-image-placeholder">
              <div className="glass-overlay">
                <div className="glass-card">
                  <span className="glass-label">New Listing</span>
                  <p className="glass-title">Sunrise Valley Phase II</p>
                  <p className="glass-price">Starting ₹45L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
