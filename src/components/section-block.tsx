import { ReactNode } from 'react';

interface SectionBlockProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionBlock({ title, subtitle, children }: SectionBlockProps) {
  return (
    <section className="container-section">
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      {children}
    </section>
  );
}
