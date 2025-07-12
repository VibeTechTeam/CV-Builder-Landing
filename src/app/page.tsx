import {
  HowItWorksSection,
  StartBuildSection,
  TemplateSection,
} from '@/components';

export default function Home() {
  return (
    <div>
      <MainSection />
      <HowItWorksSection />
      <div className="h-[50vh] w-full" />
      <TemplateSection />
      <StartBuildSection />
    </div>
  );
}
