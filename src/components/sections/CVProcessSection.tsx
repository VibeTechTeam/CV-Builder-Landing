export const CVProcessSection = () => {
  const process = [
    {
      icon: "/icon-ai.svg",
      title: "AI content Suggestions",
      description:
        "Get smart recommendations for skills, summaries, and bullet points tailored to your industry.",
    },
    {
      icon: "/icon-palette.svg",
      title: "Professional templates",
      description:
        "Access a wide range of modern, ATS-optimised templates designed by experts.",
    },
    {
      icon: "/icon-pdf.svg",
      title: "One-click PDF export",
      description:
        "Download your resume in a universally accepted PDF format, ready for applications.",
    },
    {
      icon: "/icon-phone.svg",
      title: "Multi-device access",
      description:
        "Build and edit your resume anytime, anywhere, or any device.",
    },
  ];

  return (
    <section id='features'>
      <div className='section-container py-[80px] px-4'>
        {/* Desktop */}
        <div className='hidden lg:flex items-center gap-10'>
          <div className='flex flex-col gap-8 w-full max-w-[650px]'>
            <h2 className='text-[#020618] font-[Noto Sans] text-[48px] font-semibold leading-[48px]'>
              Foliofy Gives You the Edge
            </h2>
            <p className='text-[#62748e] font-[Ubuntu] text-[24px] font-normal leading-[32px]'>
              Unlock a suite of powerful tools crafted to help your resume stand
              out, showcase your strengths,
              <br /> and leave a lasting impression on employers.
            </p>
            <button className='flex items-center justify-center gap-2 text-white rounded-[32px] bg-[#e17100] opacity-80 py-4 px-6 max-w-[198px] w-full font-[Ubuntu] font-bold text-xl leading-7 tracking-normal text-center'>
              <span>Start NOW</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='white'
              >
                <path d='M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z' />
              </svg>
            </button>
          </div>
          <div className='flex flex-col gap-12'>
            {process.map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className='flex items-center gap-6 p-4 rounded-[32px] hover:shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.04),0px_20px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer'
              >
                <div className='rounded-[16px] bg-[#e17100] p-4 flex-shrink-0'>
                  <img src={icon} alt={`Icon ${title}`} />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-[Ubuntu] font-bold text-[28px] leading-[28px]'>
                    {title}
                  </h4>
                  <p className='text-[#62748E] font-[Ubuntu] font-normal text-[20px] leading-[28px]'>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className='lg:hidden flex flex-col'>
          <div className='flex flex-col gap-6 text-center mb-8'>
            <h2 className='text-[#020618] font-[Noto Sans] text-[32px] sm:text-[36px] font-semibold leading-[36px] sm:leading-[40px]'>
              Foliofy <span className='text-[#e17100]'>Gives</span> You the{" "}
              <span className='text-[#e17100]'>Edge</span>
            </h2>
            <p className='text-[#62748e] font-[Ubuntu] text-[18px] sm:text-[20px] font-normal leading-[26px] sm:leading-[28px] px-4'>
              Unlock a suite of powerful tools crafted to help your resume stand
              out, showcase your strengths, and leave a lasting impression on
              employers.
            </p>
          </div>
          <div className='flex flex-col gap-6 mb-8'>
            {process.slice(0, 1).map(({ icon, title, description }, idx) => (
              <div
                key={idx}
                className='flex items-start gap-4 p-6 bg-white rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
              >
                <div className='rounded-[12px] bg-[#e17100] p-3 flex-shrink-0'>
                  <img src={icon} alt={`Icon ${title}`} className='w-6 h-6' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-[Ubuntu] font-bold text-[20px] leading-[24px] text-[#020618]'>
                    {title}
                  </h4>
                  <p className='text-[#62748E] font-[Ubuntu] font-normal text-[16px] leading-[22px]'>
                    {description}
                  </p>
                </div>
              </div>
            ))}
            <div className='flex justify-center py-2'>
              <div className='flex gap-2'>
                <div className='w-2 h-2 bg-[#e17100] rounded-full'></div>
                <div className='w-2 h-2 bg-[#e17100] rounded-full'></div>
                <div className='w-2 h-2 bg-[#e17100] rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='flex items-center justify-center gap-2 text-white rounded-[32px] bg-[#e17100] opacity-80 py-4 px-6 max-w-[198px] w-full font-[Ubuntu] font-bold text-xl leading-7 tracking-normal text-center'>
              <span>Start NOW</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='white'
              >
                <path d='M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
