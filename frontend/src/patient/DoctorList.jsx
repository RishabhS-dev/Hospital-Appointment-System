import "./DoctorList.css";

function DoctorList() {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Johnson", specialization: "Dermatologist" },
    { id: 3, name: "Dr. Williams", specialization: "Neurologist" },
  ];

  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>

      {doctors.map((doc) => (
        <div key={doc.id} className="doctor-card">
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
          <button>Book Appointment</button>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
