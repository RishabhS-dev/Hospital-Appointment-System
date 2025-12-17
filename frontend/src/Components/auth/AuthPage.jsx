import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const role = params.get("role");

  return (
    <div className="auth-container">
      <h2>{role === "doctor" ? "Doctor" : "Patient"} Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button
        className="btn"
        onClick={() =>
          role === "patient"
            ? navigate("/patient/form")
            : alert("Doctor flow coming next")
        }
      >
        Login
      </button>

      <p className="switch-text">
        Don’t have an account? <span>Create one</span>
      </p>
    </div>
  );
}

export default AuthPage;
