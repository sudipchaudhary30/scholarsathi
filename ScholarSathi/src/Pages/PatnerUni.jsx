import React from 'react';
import './PatnerUni.css';

const PartnerUni = () => (
  <div>
    {/* Hero Section */}
    <section className="hero-patner">
      <div className="hero-overlay-patner">
        <h1>🎓 Our Partner Universities</h1>
        <p>We work hand-in-hand with Nepal’s top colleges to provide better access, affordability, and academic success.</p>
      </div>
       <div className="background-slider"></div>
    </section>

    {/* Partner Universities */}
    <section className="partners-section">
      <h2>🤝 Collaborating Institutions</h2>
      <p>These are the institutions we proudly collaborate with to connect students with real opportunities.</p>

      <div className="university-grid">
        <div className="university-card-patner">
          <img src="/assets/softwarica logo.png" alt="Softwarica College" />
          <h3>Softwarica College</h3>
          <p>Focused on international IT education in collaboration with Coventry University, UK.</p>
        </div>

        <div className="university-card-patner">
          <img src="/assets/british college logo.jpg" alt="The British College" />
          <h3>The British College</h3>
          <p>Offering UK degrees in Nepal through partnerships with Leeds Beckett and University of the West of England.</p>
        </div>

        <div className="university-card-patner">
          <img src="/assets/sunway logo.jpg" alt="Sunway College" />
          <h3>Sunway College</h3>
          <p>Top-ranked institution for A-level and international business programs in Nepal.</p>
        </div>
      </div>
    </section>

    {/* Animated Images Section */}
    <section className="animated-gallery">
      <h2>🎥 A Glimpse Into Our Collaborations</h2>
      <p>Take a closer look at some of the beautiful campuses and events from our partner universities.</p>
      <div className="gallery-images">
        <img src="/assets/glipse softwarica.jpg" alt="Campus View 1" className="animated-image fade-in-left" />
        <img src="/assets/glipsee 2.jpg" alt="Campus View 2" className="animated-image fade-in-up" />
        <img src="/assets/glipsee 3.jpg" alt="University Event" className="animated-image fade-in-right" />
      </div>
    </section>

    {/* Call to Action for Partnership */}
    <section className="cta-section">
      <h2>🏫 Want to Partner With Us?</h2>
      <p>If you're a university or institution looking to reach passionate learners, we'd love to collaborate with you.</p>
      <a href="#" className="btn primary-btn">Become a Partner</a>
    </section>
  </div>
);

export default PartnerUni;