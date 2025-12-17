import { useNavigate } from "react-router-dom";
import "./PatientForm.css";

function PatientForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/patient/doctors");
  };

  return (
    <div className="patient-form">
      <h2>Patient Medical History</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" required />
        <input placeholder="Age" type="number" required />
        <textarea placeholder="Medical History" required />
        <textarea placeholder="Current Symptoms" required />

        <button type="submit">Submit & View Doctors</button>
      </form>
    </div>
  );
}

export default PatientForm;
