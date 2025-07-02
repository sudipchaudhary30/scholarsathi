import React, { useState } from 'react';
import './RegisterForm.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="main-content-area">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to ScholarSathi</h1>
          <p>Empowering students to reach their academic dreams with guidance, mentorship, and opportunities.</p>
          <a href="#register" className="scroll-btn">↓ Scroll to Register</a>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>Why Join ScholarSathi?</h2>
        <p>Get connected to the best courses, mentorships, and learning resources designed to help you excel in your field of interest.</p>
      </section>

      {/* Registration Section */}
      <section className="registration-section" id="register">
        <div className="form-wrapper">
          <div className="form-inner-container">
            <div className="animated-hat">🎓</div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
              <select name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select Preferred Course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Design & Multimedia">Design & Multimedia</option>
              </select>
              <button type="submit">Register</button>
              <button type="button" className="admin-btn">Sign in as Admin</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default RegistrationPage;