import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientList from './components/PatientList';
import PatientForm from './components/PatientForm';
import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/add-patient" element={<PatientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
