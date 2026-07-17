// components/Navbar.tsx
'use client'; // Needs to be a client component for usePathname and framer-motion

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion
import { Menu, X } from 'lucide-react'; // Import icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Using the navLinks from your original code to match your site structure
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Associates', href: '/associates' }, // <-- This link has been removed
    { name: 'Contact', href: '/contact' },
  ];

  const pathname = usePathname();

  return (
    // Container to position the navbar at the top
    <nav className="w-full sticky top-0 z-50 px-8 py-4">
      {/* Align the content to the end (right) */}
      <div className="max-w-7xl mx-auto flex justify-end items-center relative">
        
        {/* Logo is removed to match the pill-style design from the photo */}

        {/* Desktop Navigation pill container */}
        <ul className="hidden md:flex items-center gap-1 rounded-full bg-white/70 
                       p-2 shadow-lg backdrop-blur-md border border-gray-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              // Each link item is a list item
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`
                    relative z-10 block px-5 py-2 rounded-full text-sm font-medium transition-colors
                    ${isActive 
                      ? 'text-brand-text' // Active text color from your theme
                      : 'text-gray-600 hover:text-brand-text'}
                  `}
                >
                  {link.name}
                </Link>
                
                {/* This is the sliding active indicator pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-3 rounded-full bg-white/70 shadow-lg backdrop-blur-md border border-gray-200/50 text-gray-700 hover:text-brand-text transition-colors focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 left-0 p-4 rounded-2xl bg-white/95 shadow-xl border border-gray-200/50 backdrop-blur-lg z-50 md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block px-5 py-3 rounded-xl text-base font-medium transition-colors
                          ${isActive 
                            ? 'bg-brand-bg text-brand-text font-semibold' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-text'}
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};