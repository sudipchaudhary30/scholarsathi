import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/Admindashboard.css";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`} id="sidebar">
      <button onClick={toggleSidebar} className="toggle-btn">☰</button>

      <div className="logo">
        <img src="/assets/logomascot1.png" alt="Logo" />
        <span className="logo-text">ScholorSathi</span>
      </div>
<div>
      <ul>
        <li><Link to="/dashboard" className="active">Dashboard</Link></li>
        <li><Link to="/manage-mascots">Manage Mascots</Link></li>
        <li><Link to="/assign-locations">Assign Locations</Link></li>
        <li><Link to="/scholarship-offers">Scholarship Offers</Link></li>
        <li><Link to="/student-data">Student Data</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
      </div>
    </aside>
  );
}

export default Sidebar;