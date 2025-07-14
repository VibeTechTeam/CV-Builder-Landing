
import Image from "next/image";
import ArrowTop from "../../../public/ArrowTop.svg"
import ArrowBottom from "../../../public/ArrowBottom.svg"

export const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose a template',
      description:
        'Select from our library of professionally designed, ATS-friendly resume templates.',
    },
    {
      number: '02',
      title: 'Add your details with AI',
      description:
        'Fill in your information, and let our AI provide content suggestions and optimize phrasing.',
    },
    {
      number: '03',
      title: 'Download & apply',
      description:
        'Once your resume is ready, download it as a job-ready PDF and begin applying with confidence.',
    },
  ];

  return (
    <div>
      <section
        style={{
          backgroundImage: "url('/how-it-works-bg.jpg')",
        }}
        className="relative bg-black rounded-t-4xl overflow-hidden bg-contain  bg-center py-[145px] bg-size-[150%_150%] md:bg-size-[100%_100%]"
      >
        {/* Content */}
        <div className="section-container flex flex-col justify-center">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 lg:mb-36 gap-x-4 gap-y-6">
            {/* Main Heading */}
            <div className="max-w-[580px] w-full">
              <h2 className="text-white font-semibold text-4xl lg:text-6xl leading-tight">
                Build a Winning <span className="text-accent-500">Resume</span>
                <br />
                That <span className="text-accent-500">Stands Out</span>
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-[580px] text-left lg:text-right">
              <p className="text-white font-light text-xl lg:text-2xl leading-relaxed">
                Craft your perfect resume with AI-enhanced suggestions,
                customizable templates, and a process so simple, it feels like
                magic.
              </p>
            </div>
          </div>

          {/* Steps Section */}
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-zinc-700 rounded-3xl p-3 w-full min-h-40 flex items-center gap-6"
              >
                {/* Number Circle */}
                <div className="w-18 h-18 rounded-full border-4 border-accent-500 flex items-center justify-center p-2 flex-shrink-0">
                  <span className="text-accent-500 font-medium text-3xl leading-tight">
                    {step.number}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-white font-medium text-2xl leading-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white font-normal text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
      className="relative bg-white rounded-t-4xl"
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex justify-center mt-6 xl1440:mt-20">
            <h2 className="font-noto-sans font-semibold p-2 leading-12 text-2xl xl1440:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="flex flex-col justify-center pr-[16px] pl-[16px] mb-6 w-[1184px]">
            <div className="border-b-1 border-white-first">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl leading-8 pt-4 pb-4 xl1440:text-2xl">Is Foliofy free to use?</p>
                <div className="pt-6 pb-6">
                  <Image className="pt-1.5 pb-1.5 pl-1 pr-1 w-full" src={ArrowTop} alt="Arrow Top" />
                </div>
              </div>
              <p className="leading-6 text-lg text-zinc-700 pb-4 xl1440:leading-8 xl1440:text-xl">Foliofy offers a free plan with basic features and limited number of resume downloads. Our premium plans unlock advanced AI features, more templates, and unlimited downloads.</p>
            </div>
            <div className="flex items-center justify-between border-b-1 border-white-first">
              <p className="text-xl leading-8 underline pt-4 pb-4 xl1440:text-2xl xl1440:pt-11 xl1440:pb-11">Are the resumes ATS fiendly?</p>
              <div className="pt-6 pb-6">
                <Image className="pt-1.5 pb-1.5 pl-1 pr-1 w-full" src={ArrowBottom} alt="Arrow Down" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b-1 border-white-first">
              <p className="font-bold text-lg leading-8 pt-4 pb-4 xl1440:text-2xl xl1440:pt-11 xl1440:pb-11">Can I import my existing resume?</p>
              <div className="pt-6 pb-6">
                <Image className="pt-1.5 pb-1.5 pl-1 pr-1 w-full" src={ArrowBottom} alt="Arrow Down" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b-1 border-white-first">
              <p className="font-bold text-lg leading-8 pt-4 pb-4 xl1440:text-2xl xl1440:pt-11 xl1440:pb-11">Can I edit my resume after downloading it?</p>
              <div className="pt-6 pb-6">
                <Image className="pt-1.5 pb-1.5 pl-1 pr-1 w-full" src={ArrowBottom} alt="Arrow Down" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
