import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-offwhite">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
