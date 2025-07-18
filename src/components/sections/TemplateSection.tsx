'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Typography } from '@/components';
import { useAnimation } from '@/lib/useAnimation';

const templates = [
  {
    name: 'Carla Young – Marketing Manager',
    image: '/templates/template-1.webp',
  },
  {
    name: 'Ahmdd Saah – Marketing Manager',
    image: '/templates/template-2.webp',
  },
  {
    name: 'Ellie Thompson – Marketing Manager',
    image: '/templates/template-3.webp',
  },
];

export const TemplateSection = () => {
  const rootRef = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    if (currentSlide === templates.length - 1) return;
    setCurrentSlide(prev => (prev + 1) % templates.length);
  };

  const prevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(prev => (prev - 1 + templates.length) % templates.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      ref={rootRef}
      style={{
        backgroundImage: "url('/how-it-works-bg.jpg')",
      }}
      className='min-h-[calc(100vh+100px)] flex items-center relative py-28 bg-black rounded-t-4xl bg-center bg-size-[150%_150%] md:bg-size-[100%_100%]'
    >
      {/* Content */}
      <div className='section-container'>
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-20 items-center md:items-start md:justify-between'>
          {/* Left Content */}
          <div
            data-animate='slide-in-left'
            className='flex-1 max-w-[600px] md:text-left sm:text-center text-left'
          >
            {/* Main Heading */}
            <div data-animate='fade-in'>
              <Typography
                as='h2'
                variant='h2'
                className='text-white mb-4 md:mb-8'
              >
                Create a <span className='text-accent-500'>resume</span> that
                gets you <span className='text-accent-500'>hired</span>
              </Typography>
            </div>

            {/* Description */}
            <div data-animate='fade-in'>
              <Typography
                as='p'
                variant='body-lg'
                className='md:w-3/4 text-white mb-12'
              >
                Discover top-performing resume templates trusted by job seekers.
              </Typography>
            </div>

            {/* CTA Button */}
            <button className='btn btn-secondary hover:scale-105 transform transition-all duration-300'>
              <Typography as='span' variant='button-md'>
                Build my resume now
              </Typography>
              <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Resume Template Slider */}
          <div
            data-animate='slide-in-right'
            className='flex-1 max-w-[600px] w-full relative'
          >
            {/* Slider Container */}
            <div
              className='relative overflow-hidden'
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className='w-full flex-shrink-0 flex flex-col items-center'
                  >
                    <Image
                      src={template.image}
                      alt='Resume Template'
                      height={600}
                      width={400}
                      className='rounded-2xl select-none md:w-auto w-4/5 hover:scale-105 transition-transform duration-300'
                      loading='lazy'
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              disabled={currentSlide === 0}
              onClick={prevSlide}
              className='absolute left-4 bottom-1/2 bg-white hover:bg-white/50 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 group z-10 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110'
              aria-label='Previous template'
            >
              <svg
                className='w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            <button
              disabled={currentSlide === templates.length - 1}
              onClick={nextSlide}
              className='absolute right-4 bottom-1/2 bg-white hover:bg-white/50 backdrop-blur-sm text-black p-3 rounded-full transition-all duration-200 group z-10 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110'
              aria-label='Next template'
            >
              <svg
                className='w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
            <div className='text-center mt-6'>
              <Typography as='p' variant='body-md' className='text-white'>
                Sample template: {templates[currentSlide].name}
              </Typography>
            </div>

            {/* Slide Indicators */}
            <div className='flex justify-center mt-6 gap-2'>
              {templates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                    currentSlide === index ? 'bg-accent-500' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
