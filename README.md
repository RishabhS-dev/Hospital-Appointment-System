
# Hospital Management System

A full-stack web application for managing hospital operations, built using **React**, **Spring Boot**, and **MySQL**.  
It allows patients to upload and manage their medical history, find doctors nearby, book appointments, and lets doctors view patient records and upload prescriptions.  

---

## **Features**

### Patient
- Register and login securely
- Upload and update medical history
- Browse nearby doctors
- Book, update, and view appointments
- View doctor details and prescriptions

### Doctor
- Register and login securely
- View assigned patient medical history
- Upload and update prescriptions
- Manage appointments

### Admin/General
- Role-based access control
- Secure JWT authentication
- Real-time updates on appointments and prescriptions

---

## **Tech Stack**

- **Frontend**: React (Create React App), CSS
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git & GitHub
- **License**: Apache 2.0

---

## **Project Structure**
LandingPage
   ↓
AuthPage (login / create account)
   ↓
IF PATIENT:
   PatientForm → DoctorList → BookAppointment → View Prescription

IF DOCTOR:
   DoctorDashboard → Approve/Reject → Add Prescription


