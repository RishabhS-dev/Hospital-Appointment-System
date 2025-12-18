import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setAuth } from "../../utils/auth";
import "./AuthPage.css";

function AuthPage() {
  const navigate = useNavigate();
  const role =
    new URLSearchParams(useLocation().search).get("role") || "patient";

  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ---------------- LOGIN ----------------
  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Email and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      // TEMP: until JWT is added
      setAuth("dummy-token", data.role || role.toUpperCase());

      if (data.role === "PATIENT") {
        navigate("/patient/form");
      } else if (data.role === "DOCTOR") {
        navigate("/doctor/dashboard");
      } else {
        alert("Unknown role");
      }
    } catch (err) {
      alert("Login failed. Please create an account.");
      setIsRegister(true);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async () => {
    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          role: role.toUpperCase(),
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      alert("Account created successfully. Please login.");
      setIsRegister(false);
    } catch (err) {
      alert("Registration failed. Email may already exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>
        {isRegister ? "Create Account" : "Login"} ({role})
      </h2>

      {isRegister && (
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
      )}

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <button onClick={isRegister ? handleRegister : handleLogin} disabled={loading}>
        {loading
          ? "Please wait..."
          : isRegister
          ? "Create Account"
          : "Login"}
      </button>

      <p className="switch-text" onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? "Already have an account? Login"
          : "Don’t have an account? Create one"}
      </p>
    </div>
  );
}

export default AuthPage;
