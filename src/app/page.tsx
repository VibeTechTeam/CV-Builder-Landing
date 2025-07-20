import {
  MainSection,
  HowItWorksSection,
  StartBuildSection,
  TemplateSection,
  FeatureSection,
  QuestionsSection,
} from "@/components";
export default function Home() {
  return (
    <div>
      <MainSection />
      <HowItWorksSection />
      <FeatureSection />
      <TemplateSection />
      <QuestionsSection />
      <StartBuildSection />
    </div>
  );
}
