'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  HowItWorksSection,
  StartBuildSection,
  TemplateSection,
  MainSection,
  CVProcessSection,
} from '@/components';

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initScrollTrigger = () => {
      const sections = gsap.utils.toArray('section') as HTMLElement[];

      if (sections.length === 0) return;

      sections.forEach((section, idx) => {
        gsap.set(section, { zIndex: idx + 1 });
        if (section.dataset.scrollSection) {
          gsap.to(section, {
            // TODO: We need to think what would look better here
            // opacity: 0,
            // scale: 0.9,
            // y: 50,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: section,
              scrub: 3,
              start: 'bottom bottom',
              pin: true,
              pinSpacing: false,
            },
          });
        }
      });
    };

    const timer = setTimeout(initScrollTrigger, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div>
      <MainSection />
      <HowItWorksSection />
      <CVProcessSection />
      <TemplateSection />
      <StartBuildSection />
    </div>
  );
}
