import React from "react";
import "./LandingPage.css";

function LandingPage() {
  const handleSelect = (role) => {
    alert(`${role} selected`);
  };

  return (
    <div className="landing-wrapper">
      <div className="background-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <div className="landing-container">
        <div className="header-section">
          <div className="logo-container">
            <span className="logo-icon">🏥</span>
          </div>
          <h1 className="main-title">Hospital Appointment System</h1>
          <p className="subtitle">Choose your role to get started</p>
        </div>

        <div className="cards-container">
          <div className="role-card patient-card" onClick={() => handleSelect("Patient")}>
            <div className="card-background"></div>
            <div className="card-content">
              <div className="emoji-container">
                <span className="emoji">🙋‍♂️</span>
              </div>
              <h2>Patient</h2>
              <p className="card-description">Book and manage your appointments</p>
              <div className="card-arrow">→</div>
            </div>
          </div>

          <div className="role-card doctor-card" onClick={() => handleSelect("Doctor")}>
            <div className="card-background"></div>
            <div className="card-content">
              <div className="emoji-container">
                <span className="emoji">👨‍⚕️</span>
              </div>
              <h2>Doctor</h2>
              <p className="card-description">View and manage patient appointments</p>
              <div className="card-arrow">→</div>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <p>Need help? <a href="#contact">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;