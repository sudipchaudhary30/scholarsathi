
import React, { useEffect } from 'react';
import './Footer.css'; // Create and style this file as needed

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>ScholarSathi</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ScholarSathi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;