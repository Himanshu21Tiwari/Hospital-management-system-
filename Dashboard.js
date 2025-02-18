import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Hospital Management System</h1>
      <nav>
        <Link to="/patients">View Patients</Link>
        <Link to="/add-patient">Add New Patient</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
