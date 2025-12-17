import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/common/LandingPage";
import AuthPage from "./Components/auth/AuthPage";
import PatientForm from "./Components/patient/PatientForm";
import DoctorList from "./Components/patient/DoctorList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/patient/form" element={<PatientForm />} />
        <Route path="/patient/doctors" element={<DoctorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
