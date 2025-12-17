import React from 'react';
import './DoctorList.css';

function DoctorList() {
  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>
      <ul>
        <li>Dr. Smith - Cardiologist</li>
        <li>Dr. Johnson - Dermatologist</li>
        <li>Dr. Williams - Pediatrician</li>
      </ul>
    </div>
  );
}

export default DoctorList;