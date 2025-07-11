"use client";
import Image from "next/image";

export const MainSection = () => {
  const avatarImages = [
    "/img-person1.png",
    "/img-person2.png",
    "/img-person3.png",
    "/img-person4.png",
  ];

  return (
    <section className='relative pt-20 pb-28 z-10' id='main'>
      <div className='relative section-container'>
        <div className='space-y-8 '>
          <div className='max-w-1/2'>
            <h1 className='font-bold text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight uppercase text-black'>
              Resumes Built
              <br />
              <span className='flex flex-wrap items-center gap-4'>
                <span className='text-orange-500'>to</span>
                <span>Impress</span>
                <span className='rounded-full bg-gradient-to-b from-orange-200/80 to-orange-100/40 px-6 py-3 text-slate-900 text-xl md:text-2xl font-normal leading-tight tracking-normal capitalize shadow-sm'>
                  With AI
                </span>
              </span>
            </h1>
          </div>

          <div
            className='w-full rounded-[32px] shadow-lg pt-8 pr-10 pb-8 pl-10'
            style={{
              background:
                "linear-gradient(29.26deg, rgb(255, 212, 160) 2.358%, rgb(255, 234, 208) 31.415%, rgb(255, 255, 255) 113.154%)",
            }}
          >
            <p className='max-w-1/2 w-full text-[#020618] font-light text-[28px] leading-[56px] tracking-normal mb-10'>
              Create standout resumes in minutes with AI-driven insights. Land
              your dream job with stunning templates.
            </p>

            <div className='max-w-[226px] flex items-center gap-3 mb-10 rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[0px] bg-white pt-3 pr-5 pb-3 pl-5'>
              <div className='flex -space-x-2'>
                {avatarImages.map((src, idx) => (
                  <div
                    key={idx}
                    className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm'
                  >
                    <Image
                      src={src}
                      alt={`User avatar ${idx + 1}`}
                      width={40}
                      height={40}
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
              <p className='text-gray-600 font-medium'>+500</p>
            </div>

            <button
              className='flex items-center justify-center border-4 rounded-[32px] bg-white py-4 px-6 font-medium text-xl leading-none tracking-normal align-middle gap-2 transition hover:bg-orange-50'
              style={{
                borderColor: "rgb(225, 113, 0)",
                fontFamily: "Montserrat, sans-serif",
              }}
              aria-label='Create your free resume'
            >
              <span>Create my FREE resume</span>
              <svg
                className='mt-1'
                xmlns='http://www.w3.org/2000/svg'
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
              >
                <path
                  d='M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z'
                  fill='#020618'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='absolute bottom-0 left-1/2 w-[50vw]'>
          <Image
            src='/img-laptop.png'
            alt='Resume builder interface on laptop'
            width={640}
            height={650}
            className='object-contain h-full'
            priority
          />
        </div>
      </div>
    </section>
  );
};
