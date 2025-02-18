import React, { useState, useEffect } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients([
      { id: 1, name: 'John Doe', age: 45, disease: 'Flu' },
      { id: 2, name: 'Jane Smith', age: 30, disease: 'Cold' }
    ]);
  }, []);

  return (
    <div className="patient-list">
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.name}, {patient.age} - {patient.disease}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
