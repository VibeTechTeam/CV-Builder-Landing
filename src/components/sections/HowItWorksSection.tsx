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
        className="bg-white-first rounded-t-4xl overflow-hidden  h-section-first  smx:h-[700px]  sm:h-[880px]  md:h-[900px]  lg:h-[600px] xl:h-[600px] xl1440:h-[880px]"
        >
            {/* <div className="flex items-center justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row"> */}
            <div className="flex flex-col items-center justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                <div className="w-[500px] relative bottom-36 left-48 xs:bottom-16 xs:left-11 smx:bottom-12 smx:left-10 sm:w-[700px] sm:bottom-18 sm:left-12 md:w-[800px] md:bottom-28 md:left-20 lg:bottom-28 lg:left-9 lg:w-[700px] xl:bottom-24 xl:left-4 xl:w-[700px] xl1440:w-[938px] xl1440:h-[1144px] xl1440:bottom-32 xl1440:left-0 xl1536:w-[1271px]" >
                    <Image className="w-full h-full object-contain" src={ThirdSectionImage} alt="Third section image" />
                </div>
                <div className="flex flex-col gap-6 relative bottom-48 right-28  xs:bottom-28 xs:right-0 xs:left-5 smx:bottom-20 smx:right-0 smx:left-auto sm:bottom-32 sm:right-0 sm:left-auto md:bottom-52 md:right-0 md:left-auto lg:bottom-14 lg:right-12 lg:left-auto xl:bottom-24 xl:right-24 xl:left-auto xl1440:bottom-32 xl1440:w-[555px] xl1440:left-auto xl1536:bottom-38 xl1536:left-auto">
                    {/* <p className="font-noto-sans font-semibold text-5xl  lg:text-4xl xl:text-5xl">Unlock Your Advantage<br/>with Foliofy</p> */}
                    {/* <p className="font-noto-sans font-semibold text-5xl  smx:text-3xl lg:text-4xl xl:text-5xl">Unlock Your Advantage<br/>with Foliofy</p> */}
                    <p className="font-noto-sans font-semibold text-5xl  smx:text-4xl lg:text-4xl xl:text-5xl">Unlock Your Advantage<br/>with Foliofy</p>
                    {/*  */}
                    {/* <p className="font-noto-sans text-3xl xs:text-lg smx:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl"><span className="text-accent-500">Create</span>, edit, and download<br/>your <span className="text-accent-500">resume</span> right<br/>from your <span className="text-accent-500">phone</span></p> */}
                    {/* <p className="font-noto-sans text-3xl xs:text-xl smx:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl"><span className="text-accent-500">Create</span>, edit, and download<br/>your <span className="text-accent-500">resume</span> right<br/>from your <span className="text-accent-500">phone</span></p> */}
                    <p className="font-noto-sans text-3xl xs:text-xl smx:text-2xl sm:text-2xl lg:text-2xl xl:text-3xl"><span className="text-accent-500">Create</span>, edit, and download<br/>your <span className="text-accent-500">resume</span> right<br/>from your <span className="text-accent-500">phone</span></p>
                </div>
            </div>
        </section>
    </div>
  );
};
