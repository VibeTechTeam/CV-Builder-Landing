'use client';
import React, { useState } from 'react';

export const PulseButton = ({
  text = 'Get Started',
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={`group relative bg-black flex justify-center items-center gap-3 rounded-full w-[9.3rem] h-12 
      transition-all duration-500 ease-out
      hover:scale-105 active:scale-95 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <span className='text-white font-medium tracking-wide text-sm transition-all duration-300 '>
        {text}
      </span>

      {/* Animated dot */}
      <span
        className={`relative z-10 w-4 h-4 bg-accent-400 rounded-full transition-all duration-500 ease-out
        ${isHovered ? 'bg-accent-300 shadow-lg shadow-accent-300/50 scale-110' : ''}
        ${isPressed ? 'scale-90' : ''}
        before:absolute before:inset-0 before:bg-accent-600 before:rounded-full 
        before:animate-pulse before:opacity-0 group-hover:before:opacity-30`}
      >
        {/* Ripple effect */}
        <div
          className='absolute inset-0 rounded-full bg-accent-200 animate-ping opacity-0 group-hover:opacity-75'
          style={{ animationDuration: '2s' }}
        ></div>
      </span>
    </button>
  );
};
