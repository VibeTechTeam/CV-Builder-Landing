import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type AnimationType =
  | 'fade-in'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'slide-in-up'
  | 'slide-in-down'
  | 'scale'
  | 'rotate'
  | 'bounce'
  | 'stagger';

interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  stagger?: number;
}

const defaultConfigs: Record<AnimationType, AnimationConfig> = {
  'fade-in': { duration: 0.8, ease: 'power2.out' },
  'slide-in-left': { duration: 0.8, ease: 'power2.out' },
  'slide-in-right': { duration: 0.8, ease: 'power2.out' },
  'slide-in-up': { duration: 0.8, ease: 'power2.out' },
  'slide-in-down': { duration: 0.8, ease: 'power2.out' },
  scale: { duration: 0.8, ease: 'back.out(1.7)' },
  rotate: { duration: 0.8, ease: 'power2.out' },
  bounce: { duration: 1.2, ease: 'bounce.out' },
  stagger: { duration: 0.8, ease: 'power2.out', stagger: 0.1 },
};

export const useAnimation = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const getInitialProps = (type: AnimationType) => {
      switch (type) {
        case 'fade-in':
          return { opacity: 0 };
        case 'slide-in-left':
          return { x: -100, opacity: 0 };
        case 'slide-in-right':
          return { x: 100, opacity: 0 };
        case 'slide-in-up':
          return { y: 50, opacity: 0 };
        case 'slide-in-down':
          return { y: -50, opacity: 0 };
        case 'scale':
          return { scale: 0.8, opacity: 0 };
        case 'rotate':
          return { rotation: 180, opacity: 0 };
        case 'bounce':
          return { y: 30, opacity: 0 };
        case 'stagger':
          return { y: 30, opacity: 0 };
        default:
          return { opacity: 0 };
      }
    };

    const elements = containerRef.current.querySelectorAll('[data-animate]');

    elements.forEach(element => {
      const animationType = element.getAttribute(
        'data-animate'
      ) as AnimationType;
      if (!animationType) return;

      const config = {
        ...defaultConfigs[animationType],
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      };

      const initialProps = getInitialProps(animationType);

      if (animationType === 'stagger') {
        const children = element.children;
        gsap.set(children, initialProps);
        gsap.to(children, {
          ...config,
          opacity: 1,
          y: 0,
          stagger: config.stagger,
          scrollTrigger: config.scrollTrigger,
        });
      } else {
        gsap.set(element, initialProps);
        gsap.to(element, {
          ...config,
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          scrollTrigger: config.scrollTrigger,
        });
      }
    });
  }, []);

  return containerRef;
};
