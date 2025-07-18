'use client';
import { useState, useEffect, useRef } from 'react';
import { Logo, PulseButton } from '@/components';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);

  const navItemStyles =
    'text-[#62748E] font-inter font-bold text-lg leading-6 tracking-normal whitespace-nowrap hover:bg-amber-50 hover:text-black rounded-[32px] px-4 py-2 transition-colors duration-300 ease-in-out cursor-pointer';

  const navSections = [
    { label: 'Main', id: 'main' },
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Templates', id: 'templates' },
    { label: 'FAQ', id: 'faq' },
  ];

  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;
    const originalPaddingRight = document.body.style.paddingRight;

    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflowY = originalOverflow || '';
      document.body.style.paddingRight = originalPaddingRight || '';
    };
  }, [isMenuOpen]);

  useGSAP(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true);

      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      }

      if (mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20, height: 0 },
          {
            opacity: 1,
            y: 0,
            height: 'auto',
            duration: 0.4,
            ease: 'power2.out',
          }
        );
      }

      if (menuItemsRef.current) {
        const menuItems = menuItemsRef.current.children;
        gsap.fromTo(
          menuItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            delay: 0.2,
            ease: 'power2.out',
          }
        );
      }
    }
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);

    const timeline = gsap.timeline();
    if (mobileMenuRef.current) {
      timeline.to(mobileMenuRef.current, {
        height: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
    if (overlayRef.current) {
      timeline.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
    timeline.eventCallback('onComplete', () => {
      setIsMenuOpen(false);
    });
  };

  return (
    <div className='relative'>
      <header
        className={`fixed top-4 left-4 right-4 flex justify-between items-center py-[12px] px-[16px] rounded-[32px] z-50 transition-all duration-300 ease-in-out ${
          isMenuVisible ? 'bg-zinc-100' : 'shadow-md bg-white'
        }`}
        style={
          isMenuVisible
            ? {
                boxShadow:
                  '0px 2px 4px -1px #0000000F, 0px 4px 6px -1px #0000001A',
              }
            : {}
        }
      >
        <Link
          href='/'
          className='cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out'
        >
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className='flex-1 mx-8 hidden lg:flex'>
          <ul className='flex justify-around w-full'>
            {navSections.map(({ label, id }) => (
              <li key={id} className={navItemStyles}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <PulseButton className='hidden lg:flex' />

        {/* Burger Menu Button */}
        <button
          onClick={isMenuVisible ? closeMenu : openMenu}
          className='block lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-30 relative'
          aria-label={isMenuVisible ? 'Close menu' : 'Open menu'}
        >
          <div className='w-6 h-6 flex flex-col justify-center items-center relative'>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuVisible ? 'rotate-45' : 'top-1'
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuVisible ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-[#62748E] rounded transition-all duration-300 ${
                isMenuVisible ? '-rotate-45' : 'bottom-1'
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Dropdown overlay */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className='fixed inset-0 bg-black/30 z-40 backdrop-blur-sm'
          onClick={closeMenu}
        />
      )}

      {/* Mobile Dropdown nav */}
      {isMenuOpen && (
        <nav
          ref={mobileMenuRef}
          className='fixed top-[115px] left-4 right-4 bottom-4 bg-white rounded-[24px] shadow-2xl z-40 lg:hidden flex overflow-hidden flex-col justify-between'
        >
          <ul
            ref={menuItemsRef}
            className='py-10 flex flex-col gap-4 items-center'
          >
            {navSections.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className='inline-block text-center font-inter font-normal text-lg leading-7 tracking-normal px-4 py-2 mx-4 hover:bg-amber-50 hover:text-black rounded-[20px] transition-colors duration-300 ease-in-out'
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className='bg-zinc-50 rounded-b-[24px] px-6 py-6 mx-2 mb-2'>
            <ul className='flex justify-center gap-6 w-full max-w-[200px] mx-auto mb-4'>
              <li>
                <a href='#'>
                  <img src='/icon-linkedin.svg' alt='LinkedIn' />
                </a>
              </li>
              <li>
                <a href='https://github.com/VibeTechTeam'>
                  <img src='/icon-github.svg' alt='GitHub' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icon-fb.svg' alt='Facebook' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icon-discord.svg' alt='Discord' />
                </a>
              </li>
            </ul>
            <p className='text-center text-sm text-gray-600'>
              © 2025 Foliofy. All rights reserved.
            </p>
          </div>
        </nav>
      )}
    </div>
  );
};
