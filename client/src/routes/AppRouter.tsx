import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { PublicLayout } from "../components/layout/PublicLayout";
import { FinancialReportsPage } from "../pages/accountant/FinancialReportsPage";
import { InvoiceDetailsPage } from "../pages/accountant/InvoiceDetailsPage";
import { InvoicesPage } from "../pages/accountant/InvoicesPage";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import { AuditLogPage } from "../pages/admin/AuditLogPage";
import { ManageDoctorsPage } from "../pages/admin/ManageDoctorsPage";
import { ServicesPage } from "../pages/admin/ServicesPage";
import { SettingsPage } from "../pages/admin/SettingsPage";
import { SpecialtiesPage } from "../pages/admin/SpecialtiesPage";
import { StaffPage } from "../pages/admin/StaffPage";
import { DoctorTodayPage } from "../pages/doctor/DoctorTodayPage";
import { LabResultsReviewPage } from "../pages/doctor/LabResultsReviewPage";
import { MySchedulePage } from "../pages/doctor/MySchedulePage";
import { PatientFilePage } from "../pages/doctor/PatientFilePage";
import { VisitPage } from "../pages/doctor/VisitPage";
import { BookAppointmentPage } from "../pages/patient/BookAppointmentPage";
import { MedicalHistoryPage } from "../pages/patient/MedicalHistoryPage";
import { MyAppointmentsPage } from "../pages/patient/MyAppointmentsPage";
import { MyInvoicesPage } from "../pages/patient/MyInvoicesPage";
import { MyLabResultsPage } from "../pages/patient/MyLabResultsPage";
import { PatientDashboardPage } from "../pages/patient/PatientDashboardPage";
import { AcceptInvitationPage } from "../pages/public/AcceptInvitationPage";
import { ContactPage } from "../pages/public/ContactPage";
import { DoctorProfilePage } from "../pages/public/DoctorProfilePage";
import { DoctorsPage } from "../pages/public/DoctorsPage";
import { ForgotPasswordPage } from "../pages/public/ForgotPasswordPage";
import { HomePage } from "../pages/public/HomePage";
import { LoginPage } from "../pages/public/LoginPage";
import { NotFoundPage } from "../pages/public/NotFoundPage";
import { RegisterPage } from "../pages/public/RegisterPage";
import { ResetPasswordPage } from "../pages/public/ResetPasswordPage";
import { OurSpecialtiesPage } from "../pages/public/OurSpecialtiesPage";
import { CalendarPage } from "../pages/receptionist/CalendarPage";
import { PatientDetailsPage } from "../pages/receptionist/PatientDetailsPage";
import { PatientsPage } from "../pages/receptionist/PatientsPage";
import { QueueDisplayPage } from "../pages/receptionist/QueueDisplayPage";
import { QueuePage } from "../pages/receptionist/QueuePage";
import { ReceptionTodayPage } from "../pages/receptionist/ReceptionTodayPage";
import { AccountPage } from "../pages/shared/AccountPage";
import { NotificationsPage } from "../pages/shared/NotificationsPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public: website pages with header and footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:doctorId" element={<DoctorProfilePage />} />
          <Route path="/specialties" element={<OurSpecialtiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/invitations/:token" element={<AcceptInvitationPage />} />
        </Route>

        {/* Dashboards: every logged-in area shares the dashboard layout */}
        <Route element={<DashboardLayout />}>
          {/* Patient */}
          <Route path="/patient">
            <Route index element={<PatientDashboardPage />} />
            <Route path="book" element={<BookAppointmentPage />} />
            <Route path="appointments" element={<MyAppointmentsPage />} />
            <Route path="medical-history" element={<MedicalHistoryPage />} />
            <Route path="lab-results" element={<MyLabResultsPage />} />
            <Route path="invoices" element={<MyInvoicesPage />} />
          </Route>

          {/* Receptionist */}
          <Route path="/reception">
            <Route index element={<ReceptionTodayPage />} />
            <Route path="patients" element={<PatientsPage />} />
            <Route path="patients/:patientId" element={<PatientDetailsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="queue" element={<QueuePage />} />
          </Route>

          {/* Doctor */}
          <Route path="/doctor">
            <Route index element={<DoctorTodayPage />} />
            <Route path="schedule" element={<MySchedulePage />} />
            <Route path="patients/:patientId" element={<PatientFilePage />} />
            <Route path="visits/:visitId" element={<VisitPage />} />
            <Route path="lab-results" element={<LabResultsReviewPage />} />
          </Route>

          {/* Accountant */}
          <Route path="/accountant">
            <Route index element={<InvoicesPage />} />
            <Route path="invoices/:invoiceId" element={<InvoiceDetailsPage />} />
            <Route path="reports" element={<FinancialReportsPage />} />
          </Route>

          {/* Admin */}
          <Route path="/admin">
            <Route index element={<AdminDashboardPage />} />
            <Route path="staff" element={<StaffPage />} />
            <Route path="doctors" element={<ManageDoctorsPage />} />
            <Route path="specialties" element={<SpecialtiesPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="audit-log" element={<AuditLogPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Shared by every role */}
          <Route path="/account" element={<AccountPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>

        {/* Without a layout */}
        <Route path="/display/queue" element={<QueueDisplayPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
