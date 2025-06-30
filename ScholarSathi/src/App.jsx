import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import ManageMascots from './Pages/ManageMascots';
import AssignLocations from './Pages/AssignLocations';
import ScholarshipOffers from './Pages/ScholarshipOffers';
import StudentData from './Pages/StudentData';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />          
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-mascots" element={<ManageMascots />} />
        <Route path="assign-locations" element={<AssignLocations />} />
        <Route path="/scholarship-offers" element={<ScholarshipOffers />} />
        <Route path="/student-data" element={<StudentData />} />


      
      </Routes>
    </Router>
  );
}

export default App;
