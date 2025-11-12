// components/PageHeader.tsx
'use client'; // Required for framer-motion animations

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradientText: string;
}

export const PageHeader = ({ title, subtitle, gradientText }: PageHeaderProps) => {
  return (
    // 1. Outer container: border, horizontal padding (matches Navbar px-8)
    <motion.div
      className="relative w-full border-b border-gray-200 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 2. Inner container: max-width, relative positioning.
        - 'py-8' - REDUCED from py-12 to move text block up.
      */}
      <div className="relative max-w-7xl mx-auto py-8">

        {/* Logo:
          - 'top-8' - MOVED UP to match the container's 'py-8'.
          - 'left-0' - Aligns to the left edge of this 'max-w-7xl' container,
                       mirroring the navbar pill's right-side alignment.
        */}
        <Image
          src="/assets/des-logo.png"
          alt="Deeshi Engineering Solutions Logo"
          width={240}
          height={67}
          // Use a negative top offset so the logo visually moves upward
          // (overlapping the top area) while keeping container padding at 0.
          // Add z-10 so it sits above the border/other content.
          className="absolute -top-16 left-0 hidden md:block z-10"
          priority
        />
        
        {/* Text Container: */}
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text">
            {title} <span className="text-gradient">{gradientText}</span>
          </h1>
          <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

      </div>
    </motion.div>
  );
};