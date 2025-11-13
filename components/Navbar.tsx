// components/Navbar.tsx
'use client'; // Needs to be a client component for usePathname and framer-motion

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'; // Import framer-motion

export const Navbar = () => {
  // Using the navLinks from your original code to match your site structure
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Clients', href: '/clients' }, // <-- This link has been removed
    { name: 'Contact', href: '/contact' },
  ];

  const pathname = usePathname();

  return (
    // Container to position the navbar at the top
    <nav className="w-full sticky top-0 z-50 px-8 py-4">
      {/* Align the content to the end (right) */}
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        
        {/* Logo is removed to match the pill-style design from the photo */}

        {/* Navigation pill container */}
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
      </div>
    </nav>
  );
};