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
    </div>
  );
};
