// app/contact/page.tsx
'use client'; 

import { PageHeader } from '@/components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  
  return (
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="Get in"
        gradientText="Touch"
        subtitle="We're here to answer any questions and help you start your next project."
      />

      <div className="relative max-w-7xl mx-auto py-24 px-8 overflow-hidden">
        
        <Image
          src="/assets/illustrations/hard-hat.png"
          alt="Hard Hat"
          width={500}
          height={500}
          className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-auto opacity-75 z-0"
        />

        <div className="relative z-10 flex justify-center">
          
          {/* UPDATED: Added 'bg-opacity-50' and 'backdrop-blur-sm' */}
          <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg 
                          hover:shadow-xl transition-all duration-300 p-12
                          w-full max-w-2xl">
            <h2 className="text-3xl font-bold mb-8">
              Contact <span className="text-gradient">Information</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-brand-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  {/* UPDATED: 'href' changed to your new link */}
                  <a
                    href="https://share.google/sEnzDALFB2kUOB5Ds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-lg hover:text-brand-accent transition-colors"
                  >
                    Shop no. 8, Laxmi Narayan Complex, Sector 12A, 
                    Koparkhairne, Navi Mumbai - 400709
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={24} className="text-brand-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <a 
                    href="tel:+919967059922"
                    className="text-gray-700 text-lg hover:text-brand-accent transition-colors"
                  >
                    +91 9967059922
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={24} className="text-brand-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a 
                    href="mailto:deeshiengineeringsolutions@gmail.com"
                    className="text-gray-700 text-lg hover:text-brand-accent transition-colors"
                  >
                    deeshiengineeringsolutions@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}