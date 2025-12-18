import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/common/LandingPage";
import AuthPage from "./Components/auth/AuthPage";
import PatientForm from "./Components/patient/PatientForm";
import DoctorList from "./Components/patient/DoctorList";
import PrescriptionView from "./Components/patient/PrescriptionView";
import DoctorDashboard from "./Components/doctor/DoctorDashboard";
import AddPrescription from "./Components/doctor/AddPrescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />

      {/* Patient */}
      <Route path="/patient/form" element={<PatientForm />} />
      <Route path="/patient/doctors" element={<DoctorList />} />
      <Route path="/patient/prescription" element={<PrescriptionView />} />

      {/* Doctor */}
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/prescription" element={<AddPrescription />} />
    </Routes>
  );
}

export default App;
