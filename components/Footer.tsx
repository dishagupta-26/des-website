// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  // Array of the 3 truck illustrations
  const vehicles = [
    { name: 'Bulldozer', src: '/assets/illustrations/bulldozer.png', flipped: true },
    { name: 'Cement Mixer', src: '/assets/illustrations/cement-mixer.png', flipped: false },
    { name: 'Dump Truck', src: '/assets/illustrations/dump-truck.png', flipped: false },
  ];

  return (
    <footer className="w-full bg-brand-bg text-gray-700 border-t border-gray-200">
      
      {/* === DIAGONAL LINE DIV REMOVED === */}
      
      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Subsidiary Info */}
        <div>
          <h3 className="text-lg text-brand-text font-semibold mb-4">
            A Subsidiary of
          </h3>
          <Image
            src="/assets/ssi-logo.png"
            alt="Shree Sai Infra Logo"
            width={150}
            height={40}
          />
          <p className="mt-4 text-sm">
            Deeshi Engineering Solutions is a proud subsidiary unit of Shree Sai Infra.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg text-brand-text font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about"><span className="hover:text-brand-accent">About Us</span></Link></li>
            <li><Link href="/services"><span className="hover:text-brand-accent">Services</span></Link></li>
            <li><Link href="/projects"><span className="hover:text-brand-accent">Projects</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-brand-accent">Contact</span></Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg text-brand-text font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-medium mr-2 text-brand-text">Email:</span>
              <a href="mailto:deeshiengineeringsolutions@gmail.com" className="hover:text-brand-accent">
                deeshiengineeringsolutions@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2 text-brand-text">Phone:</span>
              <a href="tel:+919967059922" className="hover:text-brand-accent">
                +91 9967059922
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2 text-brand-text">Address:</span>
              <span>
                A/104, Neel Sidhi Tower, Plot no. 195, Sector- 12, Vashi, Navi Mumbai - 400703
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Truck "Road" */}
      <div className="relative text-center text-gray-500 py-8 border-t border-gray-200">
        
        <div className="absolute top-0 right-8 flex gap-8 -translate-y-full">
          {vehicles.map((vehicle) => (
            <Image
              key={vehicle.name}
              src={vehicle.src}
              alt={vehicle.name}
              width={165} // Set to your requested size
              height={105} // Set to your requested size
              className={`object-contain ${vehicle.flipped ? 'scale-x-[-1]' : ''}`}
            />
          ))}
        </div>
        
        © {new Date().getFullYear()} Deeshi Engineering Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};