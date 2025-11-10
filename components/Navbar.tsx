// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-brand-bg sticky top-0 z-50 px-8 py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/des-logo.png"
            alt="Deeshi Engineering Solutions Logo"
            width={180}
            height={50}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-brand-text font-medium text-lg hover:text-brand-accent transition-colors duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};