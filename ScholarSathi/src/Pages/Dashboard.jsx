
import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardBarGraph from '../components/DashboardBarGraph';

import './Admindashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header>
          <h1>Admin Dashboard</h1>
          <p>Welcome, Admin 👋</p>
        </header>

        <section className="cards">
          <div className="card"><h3>Total Mascots</h3><p>12</p></div>
          <div className="card"><h3>Registered Students</h3><p>145</p></div>
          <div className="card"><h3>Scholarship Offers</h3><p>8</p></div>
          <div className="card"><h3>Events Active</h3><p>3</p></div>
        </section>

        {/* Graph replaces recent activities */}
        <DashboardBarGraph />
      </main>
    </div>
  );
};

export default Dashboard;
