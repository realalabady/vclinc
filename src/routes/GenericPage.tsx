import { Navigate, useParams } from 'react-router-dom';
import { InfoPage, PageKey } from '@/components/info-page';
import { NotFoundPage } from '@/routes/NotFoundPage';

const slugToKey: Record<string, PageKey> = {
  about: 'about',
  departments: 'departments',
  obgyn: 'obgyn',
  dermatology: 'dermatology',
  emergency: 'emergency',
  obesity: 'obesity',
  iv: 'iv',
  consultations: 'consultations',
  programs: 'programs',
  telemedicine: 'telemedicine',
  'patient-journey': 'patientJourney',
  insurance: 'insurance',
  blog: 'blog',
  contact: 'contact',
  app: 'app'
};

export function GenericPage() {
  const { page } = useParams<{ page?: string }>();

  if (!page) {
    return <Navigate to="." replace />;
  }

  const pageKey = slugToKey[page];

  if (!pageKey) {
    return <NotFoundPage />;
  }

  return <InfoPage pageKey={pageKey} />;
}
