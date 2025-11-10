// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-dark text-gray-400 py-12 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg text-brand-light font-semibold mb-4">
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
        <div>
          <h3 className="text-lg text-brand-light font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about"><span className="hover:text-brand-cyan">About Us</span></Link></li>
            <li><Link href="/services"><span className="hover:text-brand-cyan">Services</span></Link></li>
            <li><Link href="/projects"><span className="hover:text-brand-cyan">Projects</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-brand-cyan">Contact</span></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-brand-light font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:deeshiengineeringsolutions@gmail.com" className="hover:text-brand-cyan">
                deeshiengineeringsolutions@gmail.com
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Phone:</span>
              <a href="tel:+919967059922" className="hover:text-brand-cyan">
                +91 9967059922
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Address:</span>
              <span>
                A/104, Neel Sidhi Tower, Plot no. 195, Sector- 12, Vashi, Navi Mumbai - 400703
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-800">
        © {new Date().getFullYear()} Deeshi Engineering Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};