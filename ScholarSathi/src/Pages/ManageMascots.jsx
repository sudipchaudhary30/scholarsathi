import React from 'react';
import Sidebar from '../components/Sidebar'; 
import './Admindashboard.css'; 

const ManageMascots = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <header>
          <h1>Manage Mascots</h1>
          <p>Add, edit, or remove mascots for events.</p>
        </header>

        <section className="card">
          <h3>All Mascots</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
            <thead>
              <tr style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Mascot ID</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>M001</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>FalconX</td>
                <td style={{ padding: '10px', border: '1px solid #ccc', color: 'red' }}>Active</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                
                   <button className="btn btn-edit">Edit</button>
                   <button className="btn btn-delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ManageMascots;