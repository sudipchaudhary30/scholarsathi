import React, { useState } from 'react';
import './ContactUs.css';

const faqs = [
  {
    question: "How do I apply for scholarships through ScholarSathi?",
    answer: "You can start by scanning mascots at your school and collecting points. Visit our app or website to apply using those points."
  },
  {
    question: "Is ScholarSathi available in all regions of Nepal?",
    answer: "We're rapidly expanding and currently active in major cities like Kathmandu, Pokhara, Butwal, and more."
  },
  {
    question: "Can I contact a counselor for personal help?",
    answer: "Yes! We offer personalized counseling services. Use the contact form above to schedule a session."
  }
];

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-contact">
        <div className="hero-overlay">
          <h1>Contact ScholarSathi</h1>
          <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="contact-container">
        <div className="contact-info">
          <h2>📍 Our Office</h2>
          <p><strong>Address:</strong> Pulchowk, Lalitpur, Nepal</p>
          <p><strong>Email:</strong> contact@scholarsathi.com</p>
          <p><strong>Phone:</strong> +977-9800000000</p>
        </div>

        <div className="contact-form">
          <h2>📬 Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="map-section">
        <h2>🗺️ Find Us on the Map</h2>
        <div className="map-placeholder">
          <p>[Google Map Embed or Screenshot Placeholder]</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item${openIndex === idx ? ' active' : ''}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle-icon">{openIndex === idx ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;