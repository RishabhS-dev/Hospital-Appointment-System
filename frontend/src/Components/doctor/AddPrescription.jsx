import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../api/api";
import "./AddPrescription.css";

function AddPrescription() {
  const navigate = useNavigate();
  const appointmentId = new URLSearchParams(useLocation().search).get(
    "appointmentId"
  );

  const [prescriptionText, setPrescriptionText] = useState("");

  const submitPrescription = async () => {
    if (!prescriptionText) {
      alert("Prescription cannot be empty");
      return;
    }

    try {
      await api.post("/prescriptions", {
        appointmentId,
        prescriptionText,
      });

      alert("Prescription added successfully");
      navigate("/doctor/dashboard");
    } catch (err) {
      alert("Failed to save prescription");
    }
  };

  return (
    <div className="prescription-container">
      <h2>Add Prescription</h2>

      <textarea
        placeholder="Enter prescription details"
        value={prescriptionText}
        onChange={(e) => setPrescriptionText(e.target.value)}
      />

      <button onClick={submitPrescription}>Save Prescription</button>
    </div>
  );
}

export default AddPrescription;
