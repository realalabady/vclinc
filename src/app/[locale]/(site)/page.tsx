import { Hero } from '@/components/hero';
import { Highlights } from '@/components/highlights';
import { Story } from '@/components/story';
import { ProgramsSection } from '@/components/programs-section';
import { Testimonials } from '@/components/testimonials';
import { InsurancePartners } from '@/components/insurance-partners';

export default function LocaleHomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Story />
      <ProgramsSection />
      <Testimonials />
      <InsurancePartners />
    </>
  );
}
