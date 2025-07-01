
// src/Components/Navbar.jsx

import React from 'react';
import './Navbar.css';



const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
      
                <img src="/assets/scholarsathi logo.png" alt="ScholarSathi Logo" />
        <span className="logo-text">ScholarSathi</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/partner-universities">Partner Universities</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </nav>
      <a href="/register" className="btn primary-btn" aria-label="Get Started with ScholarSathi">
        Get Started
      </a>
    </header>
  );
};

export default Navbar;