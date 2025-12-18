import React, { useEffect, useState } from "react";
import "./DoctorList.css";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const bookAppointment = async (doctorId) => {
    await fetch("http://localhost:8080/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: 1, // temporary (later from auth)
        doctorId: doctorId,
        status: "PENDING",
      }),
    });

    alert("Appointment request sent");
  };

  const viewPrescription = (doctorId) => {
    alert("Prescription view coming next");
  };

  return (
    <div className="doctor-list-container">
      <h2>Available Doctors</h2>

      {doctors.map((doc) => (
        <div className="doctor-card" key={doc.doctorId}>
          <h3>{doc.fullName}</h3>
          <p>{doc.location}</p>

          <div className="actions">
            <button onClick={() => bookAppointment(doc.doctorId)}>
              Book Appointment
            </button>
            <button
              className="secondary"
              onClick={() => viewPrescription(doc.doctorId)}
            >
              View Prescription
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
