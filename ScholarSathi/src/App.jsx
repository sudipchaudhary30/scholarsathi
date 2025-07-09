import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import ManageMascots from './Pages/ManageMascots';
import AssignLocations from './Pages/AssignLocations';
import ScholarshipOffers from './Pages/ScholarshipOffers';
import StudentData from './Pages/StudentData';
import TestWrite from './Pages/TestWrite';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import RegisterForm from './Pages/RegisterForm';
import ContactUs from './Pages/ContactUs'; 
import PatnerUni from './Pages/PatnerUni'; 
import AboutUs from './Pages/AboutUs'; 



import './App.css';

function App() {
  return (
    <Router>
       <Navbar />
       <div className="main-content">
        
      <Routes>
        <Route path="/" element={<Dashboard />} />          
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-mascots" element={<ManageMascots />} />
        <Route path="assign-locations" element={<AssignLocations />} />
        <Route path="/scholarship-offers" element={<ScholarshipOffers />} />
        <Route path="/student-data" element={<StudentData />} />

         <Route path="/test-write" element={<TestWrite />} />


          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
           <Route path="/partner-universities" element={<PatnerUni />} />
           <Route path="/about-us" element={<AboutUs />} />


      
      </Routes>
       </div>
      <Footer />
    </Router>
  );
}

export default App;




