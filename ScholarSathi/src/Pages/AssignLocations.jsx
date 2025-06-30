import React from 'react';
import Sidebar from '../components/Sidebar'; 
import './Admindashboard.css';

const AssignLocations = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <header>
          <h1>Assign Locations</h1>
          <p>Allocate mascots to their designated zones or events.</p>
        </header>

        <section className="card">
          <h3>Current Assignments</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
            <thead>
              <tr style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Location ID</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Location Name</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Assigned Mascot</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>L001</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Science Fair</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Phoenix</td>
                <td style={{ padding: '10px', border: '1px solid #ccc', color: 'red' }}>Active</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button>Reassign</button>
                </td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>L002</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Tech Expo</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>FalconX</td>
                <td style={{ padding: '10px', border: '1px solid #ccc', color: 'red' }}>Active</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button>Reassign</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AssignLocations;