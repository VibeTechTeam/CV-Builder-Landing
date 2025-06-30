"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItemStyles =
    "text-[#62748E] font-inter font-bold text-lg leading-6 tracking-normal hover:bg-amber-50 hover:text-black rounded-[32px] px-6 py-3 transition-colors duration-300 ease-in-out cursor-pointer";

  const navSections = [
    { label: "Main", id: "main" },
    { label: "How it works", id: "how-it-works" },
    { label: "Features", id: "features" },
    { label: "Templates", id: "templates" },
    { label: "FAQ", id: "faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <header
        className={`flex justify-between items-center py-[12px] px-[16px] rounded-[32px] relative z-20 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "bg-zinc-100" : "shadow-md bg-white"
        }`}
        style={
          isMenuOpen
            ? {
                boxShadow:
                  "0px 2px 4px -1px #0000000F, 0px 4px 6px -1px #0000001A",
              }
            : {}
        }
      >
        <img src='/icon-logo.svg' alt='Logo' style={{ cursor: "pointer" }} />

        {/* Navigation */}
        <nav className='flex-1 mx-8 hidden min-[901px]:flex'>
          <ul className='flex justify-around w-full'>
            {navSections.map(({ label, id }) => (
              <li key={id} className={navItemStyles}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button className='rounded-[32px] bg-[#020618] text-white px-8 py-3 font-inter font-bold text-lg leading-6 tracking-normal hover:bg-[#0f172a] hover:text-gray-100 transition-colors duration-300 ease-in-out hidden min-[901px]:block'>
          Log in
        </button>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className='block min-[901px]:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-30'
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center relative'>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "bottom-1"
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Dropdown overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-white bg-opacity-40 z-10'
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Dropdown nav */}
      <nav
        className={`fixed top-[80px] left-0 right-0 bg-white mx-4 overflow-hidden transition-all duration-300 ease-in-out z-20 min-[901px]:hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <ul className='py-4'>
          {navSections.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className='block text-center font-inter font-normal text-lg leading-7 tracking-normal py-4 mx-4 hover:bg-amber-50 hover:text-black rounded-[32px] transition-colors duration-300 ease-in-out'
                onClick={toggleMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
