"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowTop from "../../../public/ArrowTop.svg";
import ArrowBottom from "../../../public/ArrowBottom.svg";

const faqItems = [
  {
    question: "Is Foliofy free to use?",
    answer:
      "Foliofy offers a free plan with basic features and limited number of resume downloads. Our premium plans unlock advanced AI features, more templates, and unlimited downloads.",
  },
  {
    question: "Are the resumes ATS friendly?",
    answer:
      "Yes, all resumes built with Foliofy are optimized for ATS (Applicant Tracking Systems), ensuring better chances of passing automated screenings.",
  },
  {
    question: "Can I import my existing resume?",
    answer:
      "Yes, you can import your resume in PDF or DOCX format and edit it using Foliofy's tools.",
  },
  {
    question: "Can I edit my resume after downloading it?",
    answer:
      "Absolutely! You can return to your dashboard, make changes, and download your resume again anytime.",
  },
];

export const QuestionsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative bg-white rounded-t-4xl'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center mt-6'>
          <h2 className='font-noto-sans font-semibold p-2 leading-12 text-2xl'>
            Frequently asked questions
          </h2>
        </div>
        <div className='flex flex-col justify-center pr-[16px] pl-[16px] mb-6 w-full max-w-[1184px]'>
          {faqItems.map((item, index) => (
            <div key={index} className='border-b-1 border-zinc-100'>
              <div
                className='flex items-center justify-between cursor-pointer'
                onClick={() => toggleAccordion(index)}
              >
                <p
                  className={`font-bold text-xl leading-8 pt-4 pb-4 ${index === 1 ? "underline" : ""}`}
                >
                  {item.question}
                </p>
                <div className='pt-6 pb-6'>
                  <Image
                    className='pt-1.5 pb-1.5 pl-1 pr-1 w-full'
                    src={openIndex === index ? ArrowTop : ArrowBottom}
                    alt={openIndex === index ? "Collapse" : "Expand"}
                  />
                </div>
              </div>
              {openIndex === index && (
                <p className='leading-6 text-lg text-zinc-700 pb-4'>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
