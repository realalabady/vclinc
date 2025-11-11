import '@/app/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'V Clinic | Evidence-based care… centered around you',
  description:
    'V Clinic delivers bilingual, evidence-based healthcare with warm human interactions across web and mobile experiences.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
