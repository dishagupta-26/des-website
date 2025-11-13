// app/about/page.tsx
import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';

// Updated the certificates array to include 'href' paths
const certificates = [
  { name: 'PAN CARD', href: '/assets/certificates/pan-card.jpg' },
  { name: 'MSME', href: '/assets/certificates/msme-certificate.pdf' },
  { name: 'GST', href: '/assets/certificates/gst-registration.pdf' },
  { name: 'PF', href: '/assets/certificates/pf-registration.pdf' },
  { name: 'ADHAR CARD', href: '/assets/certificates/adhar-card.jpg' }
];

export default function AboutPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="About"
        gradientText="Us"
        subtitle="Building foundations for your dreams with precision and expertise."
      />

      <div className="max-w-7xl mx-auto py-24 px-8">
        
        {/* === Vision & Mission Section (Unchanged) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* --- Vision Card --- */}
          <div className="relative bg-white border border-gray-200 rounded-xl p-10 shadow-lg 
                          hover:shadow-xl transition-all duration-300">
            
            <Image
              src="/assets/illustrations/crane.png"
              alt="Crane Illustration"
              width={150}
              height={150}
              className="absolute -top-20 -right-10 w-44 h-44 scale-x-[-1]"
            />

            <h2 className="relative z-10 text-3xl font-bold mb-6">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <p className="relative z-10 text-lg text-gray-700 leading-relaxed text-justify">
              To be a world-class infrastructure construction and Real Estate 
              Development company committed to total customer satisfaction, 
              by building on our strengths - superlative quality of material, 
              cutting-edge technology, timely completion and demonstrating 
              the highest standards of workmanship.
            </p>
          </div>

          {/* --- Mission Card --- */}
          <div className="relative bg-white border border-gray-200 rounded-xl p-10 shadow-lg
                          hover:shadow-xl transition-all duration-300">
            
            <Image
              src="/assets/illustrations/blueprint-hat.png"
              alt="Blueprint Hat Illustration"
              width={200}
              height={100}
              className="absolute -bottom-0 -right-4 w-80 h-auto object-contain"
            />

            <h2 className="relative z-10 text-3xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="relative z-10 text-lg text-gray-700 leading-relaxed text-justify">
              “To strengthen our position as a market leader in 
              Infrastructure Construction and Real Estate Development Projects.”
            </p>
          </div>
        </div>

        {/* === UPDATED Single Stat Section === */}
        {/* This wrapper centers the single card below */}
        <div className="flex justify-center mb-24">
          <div 
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg 
                       hover:shadow-xl transition-all duration-300
                       max-w-xl w-full flex flex-col items-center text-center"
          >
            {/* Subsidiary Info */}
            <p className="text-lg text-brand-accent font-semibold mb-2">
              A Subsidiary of
            </p>
            <Image
              src="/assets/ssi-logo.png"
              alt="Shree Sai Infra Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-lg text-brand-text font-medium max-w-sm">
              Deeshi Engineering Solutions is a proud subsidiary unit of Shree Sai Infra.
            </p>

            {/* Divider */}
            <div className="w-1/2 h-px bg-gray-200 my-6"></div>

            {/* Establishment Info */}
            <p className="text-lg text-brand-accent font-semibold mb-2">
              Core Establishment
            </p>
            <p className="text-2xl text-brand-text font-medium">
              2017
            </p>
          </div>
        </div>


        {/* === Certificates Section (Unchanged) === */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Certificates & <span className="text-gradient">Registrations</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            
            {certificates.map((cert) => (
              <Link 
                key={cert.name}
                href={cert.href}
                target="_blank" // Opens the certificate in a new tab
                rel="noopener noreferrer"
                className="bg-brand-accent text-white text-lg font-medium px-8 py-4 rounded-full
                           shadow-md hover:opacity-90 transition-opacity"
              >
                {cert.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}