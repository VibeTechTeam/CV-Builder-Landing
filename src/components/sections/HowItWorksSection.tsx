import Image from "next/image";
import ThirdSectionImage from "../../../public/ThirdSectionImage.png"

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
        style={{
            backgroundImage: "url('/third-section-bg.png')",
        }}
        className="bg-white-first rounded-t-4xl overflow-hidden  h-section-first  lg:h-[400px] xl:h-[800px]"
        >
            {/* <div className="flex items-center justify-center"> */}
            <div className="flex items-center justify-center md:flex-col">
                {/* <div className="w-image-second h-image-second  relative bottom-36 left-48 md:w-[800px] lg:bottom-20 lg:left-9 xl:bottom-32 xl:left-16" > */}
                {/* <div className="w-image-second h-image-second  relative bottom-36 left-48 md:w-[800px] lg:bottom-20 lg:left-9 lg:w-[1000px] xl:bottom-32 xl:left-16" > */}
                <div className="w-image-second h-image-second  relative bottom-36 left-48 md:w-[800px] md:bottom-28 md:left-20 lg:bottom-20 lg:left-9 lg:w-[1000px] xl:bottom-32 xl:left-16" >
                {/* <div className="relative w-full lg:w-[384px] xl:w-[880px]" > */}
                    {/* <Image className="h-auto max-w-none" src={ThirdSectionImage} alt="Third section image" /> */}
                    <Image className="w-full h-auto object-contain" src={ThirdSectionImage} alt="Third section image" />
                </div>
                <div className="flex flex-col gap-6 relative bottom-48 right-28  md:right-0 lg:bottom-14 lg:right-12 xl:bottom-40 xl:right-24">
                {/* <div className="flex flex-col gap-6 w-full lg:w-[464px]"> */}
                    {/* <p className="font-noto-sans font-semibold text-5xl w-block-first">Unlock Your Advantage<br/>with Foliofy</p> */}
                    <p className="font-noto-sans font-semibold text-5xl lg:text-4xl">Unlock Your Advantage<br/>with Foliofy</p>
                    <div style={{ width: '464px' }}>
                        <p className="font-noto-sans text-3xl lg:text-2xl"><span className="text-accent-500">Create</span>, edit, and download<br/>your <span className="text-accent-500">resume</span> right<br/>from your <span className="text-accent-500">phone</span></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};
