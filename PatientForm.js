import React, { useState } from 'react';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Patient:', { name, age, disease });
  };

  return (
    <div className="patient-form">
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Disease:</label>
          <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
        </div>
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default PatientForm;
