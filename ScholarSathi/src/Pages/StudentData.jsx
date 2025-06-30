import React from 'react';
import Sidebar from '../components/Sidebar'; 
import './Admindashboard.css'; 

const StudentData = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">
        <header>
          <h1>Student Data</h1>
          <p>View and manage registered student details.</p>
        </header>

        <section className="card">
          <h3>Registered Students</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
            <thead>
              <tr style={{ backgroundColor: '#3b82f6', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>S.No</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Phone Number</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>1</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Anita Sharma</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>anita@email.com</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>9845374545</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>25000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default StudentData;