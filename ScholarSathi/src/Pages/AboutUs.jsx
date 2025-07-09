import React from 'react';
import './AboutUs.css';

const About = () => (
  <div>
    {/* Hero Section */}
    <section className="hero-about">
      <div className="hero-overlay-about">
        <div className="hero-text-about">
          <h1>Empowering Students, Bridging Futures</h1>
          <p>Your trusted partner for scholarships, mentorships, and academic success in Nepal and beyond.</p>
        </div>
      </div>
    </section>

    {/* Mission and Vision */}
    <section className="info-section-about">
      <div className="info-box">
        <h2>🎯 Our Mission</h2>
        <p>To democratize access to higher education by guiding students through scholarships, mentorship, and academic planning.</p>
      </div>
      <div className="info-box alt">
        <h2>🌐 Our Vision</h2>
        <p>We envision a world where every student has equal access to global educational opportunities, supported by technology and community engagement.</p>
      </div>
    </section>

    {/* Meet the Team */}
    <section className="team-section">
      <h2>👥 Meet the Team</h2>
      <div className="team-container">
        <div className="team-card">
          <img src="/assets/oshika.jpg" alt="Oshika Dahal"/>
          <h3>Oshika Dahal</h3>
          <p>Co-Founder & Mentor</p>
        </div>
        <div className="team-card">
          <img src="/assets/nilisha.jpg" alt="Nilisha Giri"/>
          <h3>Nilisha Giri</h3>
          <p>Head of Outreach</p>
        </div>
        <div className="team-card">
          <img src="/assets/sudip.jpg" alt="Sudip Shah"/>
          <h3>Sudip Shah</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </section>

    {/* Partnered Universities */}
    <section className="partners-section">
      <h2>🎓 Our Partner Universities</h2>
      <p>Collaborating with top institutions to make education accessible for all.</p>
      <div className="partner-logos">
        <img src="/assets/softwarica logo copy.png" alt="Softwarica"/>
        <img src="/assets/british college logo.jpg" alt="British College"/>
        <img src="/assets/sunway logo.jpg" alt="Sunway College"/>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="cta-section">
      <h2>📩 Want to Connect?</h2>
      <p>We’re always ready to support your academic journey. Reach out for partnerships, mentorships, or scholarship help.</p>
      <a href="#" className="btn primary-btn">Contact Us</a>
    </section>

    {/* Black Blur Overlays */}
    {/* <div className="owl-overlay top-blur"></div>
    <div className="owl-overlay bottom-blur"></div> */}
  </div>
);

export default About;