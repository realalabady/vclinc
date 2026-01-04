import { ReactNode } from 'react';

interface SectionBlockProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionBlock({ title, subtitle, children }: SectionBlockProps) {
  return (
    <section className="container-section">
      {/* العنوان الفخم مع تأثيرات */}
      <div className="relative inline-block">
        <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent blur-2xl opacity-50" />
        <h2 className="section-title relative text-luxury animate-fade-in">
          {title}
        </h2>
        {/* خط زخرفي تحت العنوان */}
        <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
      </div>
      
      {subtitle ? (
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
      ) : null}
      
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {children}
      </div>
    </section>
  );
}
