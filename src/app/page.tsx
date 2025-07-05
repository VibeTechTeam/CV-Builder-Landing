import { HowItWorksSection, TemplateSection } from '@/components';

export default function Home() {
  return (
    <div>
      <MainSection />
      <HowItWorksSection />
      <div className="h-screen w-full" />
      <TemplateSection />
    </div>
  );
}
