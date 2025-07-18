import Image from 'next/image';
import ThirdSectionImage from '../../../public/ThirdSectionImage.png';
export const FeatureSection = () => {
  return (
    <section
      data-scroll-section
      style={{
        backgroundImage: "url('/third-section-bg.png')",
      }}
      className='bg-white rounded-t-4xl overflow-hidden min-h-screen flex items-center pt-20 pb-28'
    >
      <div className='flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
        <div className='w-[500px] relative bottom-36 left-48 ultraXS:w-[300px] ultraXS:bottom-8 ultraXS:left-8 mobileXS:w-[400px] mobileXS:bottom-12 mobileXS:left-10 xs:bottom-14 xs:left-11 smx:bottom-12 smx:left-10 sm:w-[700px] sm:bottom-18 sm:left-16 md:w-[800px] md:bottom-28 md:left-20 lg:bottom-28 lg:left-9 lg:w-[700px] xl:bottom-24 xl:left-4 xl:w-[700px] xl1440:w-[938px] xl1440:h-[1144px] xl1440:bottom-32 xl1440:left-0 xl1536:w-[1000px]'>
          <Image
            className='w-full h-full object-contain'
            src={ThirdSectionImage}
            alt='Third section image'
          />
        </div>
        <div className='flex flex-col gap-6 relative bottom-48 right-28 ultraXS:bottom-16 ultraXS:right-0 ultraXS:left-0 mobileXS:bottom-24 mobileXS:right-0 mobileXS:left-auto xs:bottom-26 xs:right-0 xs:left-3 smx:bottom-20 smx:right-0 smx:left-auto sm:bottom-32 sm:right-0 sm:left-auto md:bottom-52 md:right-0 md:left-auto lg:bottom-28 lg:right-12 lg:left-auto xl:bottom-20 xl:right-16 xl:left-auto xl1440:bottom-28 xl1440:w-[555px] xl1440:left-auto xl1536:bottom-30 xl1536:left-auto'>
          {/* First text */}
          <p className='font-noto-sans font-semibold text-5xl ultraXS:text-xl mobileXS:text-2xl smx:text-4xl lg:text-[28px] lg:leading-normal xl:text-5xl'>
            Unlock Your Advantage
            <br />
            with Foliofy
          </p>
          {/* Second text */}
          <p className='font-noto-sans text-3xl ultraXS:text-lg xs:text-xl mobileXS:text-xl smx:text-2xl sm:text-2xl lg:text-[22px] lg:leading-normal xl:text-3xl'>
            <span className='text-accent-500'>Create</span>, edit, and download
            <br />
            your <span className='text-accent-500'>resume</span> right
            <br />
            from your <span className='text-accent-500'>phone</span>
          </p>
        </div>
      </div>
    </section>
  );
};
