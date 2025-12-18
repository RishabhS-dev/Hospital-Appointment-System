import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/auth?role=${role.toLowerCase()}`);
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
          <div
            className="role-card patient-card"
            onClick={() => handleSelect("patient")}
          >
            <div className="card-background"></div>
            <div className="card-content">
              <span className="emoji">🙋‍♂️</span>
              <h2>Patient</h2>
              <p>Book and manage your appointments</p>
              <div className="card-arrow">→</div>
            </div>
          </div>

          <div
            className="role-card doctor-card"
            onClick={() => handleSelect("doctor")}
          >
            <div className="card-background"></div>
            <div className="card-content">
              <span className="emoji">👨‍⚕️</span>
              <h2>Doctor</h2>
              <p>View and manage patient appointments</p>
              <div className="card-arrow">→</div>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <p>Need help? <a href="#">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
