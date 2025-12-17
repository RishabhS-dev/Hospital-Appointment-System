import React from 'react';
import './PatientForm.css';

function PatientForm() {
  return (
    <div className="patient-form">
      <h2>Patient Information Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;