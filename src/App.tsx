import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LocaleBoundary } from '@/routes/LocaleBoundary';
import { LocaleHomePage } from '@/routes/LocaleHomePage';
import { GenericPage } from '@/routes/GenericPage';
import { NotFoundPage } from '@/routes/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ar" replace />} />
        <Route path=":locale" element={<LocaleBoundary />}>
          <Route index element={<LocaleHomePage />} />
          <Route path=":page" element={<GenericPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/ar" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
