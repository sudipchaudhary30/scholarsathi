import React from 'react';
import Sidebar from '../components/Sidebar';

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

        <section className="updates">
          <h2>Recent Activities</h2>
          <ul>
            <li>🟢 10 students captured mascot "FalconX"</li>
            <li>🟡 New mascot "Phoenix" created at Science Fair</li>
            <li>🔴 1 mascot expired due to time limit</li>
            <li>🟢 Scholarship updated for mascot "Tiger01"</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;