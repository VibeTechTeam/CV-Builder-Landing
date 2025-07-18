'use client';
import { Typography } from '@/components';
import { useAnimation } from '@/lib/useAnimation';

export const StartBuildSection = () => {
  const rootRef = useAnimation();

  return (
    <section
      ref={rootRef}
      className='relative bg-linear-30 from-accent-400 to-accent-500 py-20'
    >
      <div
        className='absolute inset-0 w-full h-full bg-center bg-size-[150%_150%] md:bg-size-[100%_200%]'
        style={{
          backgroundImage: 'url(/how-it-works-bg.jpg)',
        }}
      />
      {/* Content */}
      <div className='section-container flex flex-col items-center text-center z-10 relative'>
        {/* Main Heading */}
        <div data-animate='fade-in'>
          <Typography as='h2' variant='h3' className='text-white mb-6'>
            Ready to create a resume that gets results?
          </Typography>
        </div>

        {/* Description */}
        <div data-animate='fade-in'>
          <Typography
            as='p'
            variant='body-lg'
            className='max-w-4/5 text-white mb-12'
          >
            Join hundreds of professionals who trust Foliofy to build their
            resume
          </Typography>
        </div>

        {/* CTA Button */}
        <button data-animate='scale' className='btn bg-white text-accent-500'>
          <Typography as='span' variant='button-md'>
            Start building for free
          </Typography>
        </button>
      </div>
    </section>
  );
};
