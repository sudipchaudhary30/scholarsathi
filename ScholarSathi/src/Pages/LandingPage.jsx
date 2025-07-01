import React from 'react';
import './landingpage.css';

const LandingPage = () => (
  <div>
    {/* Hero Section */}
    <section
      className="hero"
      style={{
        background: `url(/assets/landing page.png) center/cover no-repeat`
      }}
    >
      <div className="hero-content">
        <h1>Start Your Journey<br />to Fun and Learning</h1>
        <p>Scan, play, and earn exciting rewards while expanding your knowledge!</p>
        <div className="hero-buttons">
          <a href="#" className="btn primary-btn" aria-label="Play ScholarSathi now">🎮 Play Now</a>
          <a href="#" className="btn secondary-btn" aria-label="Learn more about ScholarSathi">📘 Learn More</a>
        </div>
      </div>
    </section>

    {/* Mascot Image Section */}
    <section className="owl-section">
      <div className="owl-overlay top-blur"></div>
      <div className="owl-content">
        <img src="/assets/scholarsathi logo.png" alt="Owl Mascot" className="owl-image" />
        <h2 className="owl-heading">Your Learning Companion</h2>
        <p className="owl-subtext">Fly into your future with ScholarSathi 🦉</p>
      </div>
      <div className="owl-overlay bottom-blur"></div>
    </section>

    {/* Features Section */}
    <section className="how-it-works">
      <h2>🚀 How ScholarSathi Works</h2>
      <div className="steps">
        <div className="step">
          <img src="/assets/qr-scan-icon.png" alt="Scan QR" />
          <h3>1. Scan</h3>
          <p>Find ScholarSathi mascots around you and scan the QR code.</p>
        </div>
        <div className="step">
          <img src="/assets/game-play-icon.png" alt="Play Game" />
          <h3>2. Play</h3>
          <p>Play engaging AR mini-games and collect points & characters.</p>
        </div>
        <div className="step">
          <img src="/assets/reward-icon.png" alt="Win Rewards" />
          <h3>3. Earn</h3>
          <p>Unlock scholarships, coupons, and exclusive university offers.</p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="stats-section">
      <h2>📊 ScholarSathi Impact</h2>
      <div className="stats">
        <div className="stat"><span>5,200+</span><p>Students Joined</p></div>
        <div className="stat"><span>12,000+</span><p>Mascots Captured</p></div>
        <div className="stat"><span>₹3.5M+</span><p>Scholarships Awarded</p></div>
      </div>
    </section>

    {/* Partnered Universities Section */}
    <section className="partners">
      <div className="partner-content">
        <div className="partner-text">
          <h2>🎓 Our Partner Colleges</h2>
          <p>We collaborate with top institutions to bring value to your learning journey.</p>
        </div>
        <div className="university-logos">
          <div className="university-card">
            <img src="/assets/softwarica logo.png" alt="Softwarica College" />
            <p>Softwarica College</p>
          </div>
          <div className="university-card">
            <img src="/assets/british college logo.jpg" alt="British College" />
            <p>British College</p>
          </div>
          <div className="university-card">
            <img src="/assets/sunway logo.jpg" alt="Sunway College" />
            <p>Sunway College</p>
          </div>
        </div>
      </div>
      <div className="owl-overlay top-blur"></div>
      <div className="owl-overlay bottom-blur"></div>
    </section>
  </div>
);

export default LandingPage;