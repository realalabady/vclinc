import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth-context';
import { LocaleBoundary } from '@/routes/LocaleBoundary';
import { LocaleHomePage } from '@/routes/LocaleHomePage';
import { GenericPage } from '@/routes/GenericPage';
import { NotFoundPage } from '@/routes/NotFoundPage';
import { LoginPage } from '@/routes/LoginPage';
import { PatientDashboard } from '@/routes/PatientDashboard';
import { TelemedicineConsult } from '@/routes/TelemedicineConsult';
import { AdminDashboard } from '@/routes/AdminDashboard';
import { ProfilePage } from '@/routes/ProfilePage';
import { ProtectedRoute } from '@/components/protected-route';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/ar" replace />} />
          <Route path=":locale" element={<LocaleBoundary />}>
            <Route index element={<LocaleHomePage />} />
            <Route path="login" element={<LoginPage />} />
            
            {/* مسارات المريض المحمية */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute requiredRole="patient">
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/telemedicine"
              element={
                <ProtectedRoute requiredRole="patient">
                  <TelemedicineConsult />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/profile"
              element={
                <ProtectedRoute requiredRole="patient">
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            
            {/* مسارات الأدمن المحمية */}
            <Route
              path="admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            
            <Route path=":page" element={<GenericPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/ar" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
