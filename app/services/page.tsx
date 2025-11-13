// app/services/page.tsx
import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image'; // Import the Next.js Image component
import { ReactNode } from 'react';

// Updated list with "Interior" service and new icon PATHS
const servicesList: {
  id: string;
  name: string;
  description: string;
  icon: string; // Changed from ReactNode to string
}[] = [
  { id: '01', name: 'Civil', description: 'Building foundations for your dreams with precision and expertise.', icon: '/assets/icons/civil.png' },
  { id: '02', name: 'MEP', description: 'Seamlessly integrating Mechanical, Electrical & Plumbing systems.', icon: '/assets/icons/mep.png' },
  { id: '03', name: 'Painting', description: 'Transforming your vision into vibrant reality with our artistic touch.', icon: '/assets/icons/painting.png' },
  { id: '04', name: 'Carpentry', description: 'Crafting custom woodwork that embodies quality, durability, and style.', icon: '/assets/icons/carpentry.png' },
  { id: '05', name: 'Interior', description: 'Bringing your indoor spaces to life with beautiful and functional designs.', icon: '/assets/icons/interior.png' },
  { id: '06', name: 'Gypsum / POP', description: 'Achieving elegant false ceilings and plasterwork with precision.', icon: '/assets/icons/gypsum.png' },
  { id: '07', name: 'Tiling & stone work', description: 'Elevating aesthetics with exquisite tile and stone installations.', icon: '/assets/icons/tiling.png' },
  { id: '08', name: 'Consultation', description: 'Guiding you with expert insights and solutions for your project needs.', icon: '/assets/icons/consultation.png' },
];

export default function ServicesPage() {
  return (
    // 1. Root div: REMOVED all 'overflow' and 'relative' classes.
    <div className="bg-brand-bg text-brand-text">
      
      {/* PageHeader is now free to overflow upwards */}
      <PageHeader
        title="Our"
        gradientText="Services"
        subtitle="We provide a complete range of services for any construction or real estate project."
      />

      {/* 2. NEW Wrapper: This 'div' now controls the silhouettes.
           - 'relative' is the anchor.
           - 'overflow-x-hidden' stops horizontal scrollbars.
      */}
      <div className="relative overflow-x-hidden">
        
        {/* 3. Original content div (no changes needed) */}
        <div className="relative max-w-7xl mx-auto py-24 px-8">

          {/* --- Left Background Silhouette (Flipped) --- */}
          {/* (Your final version from the code snippet) */}
          <Image
            src="/assets/illustrations/building-silhouette-3.png"
            alt="Building Silhouette"
            width={400}
            height={700}
            className="absolute -bottom-0 -left-20 w-[400px] h-auto opacity-50 z-0 scale-x-[-1]"
            priority
          />
          
          {/* --- Right Background Silhouette (Flipped) --- */}
          {/* (Your final version from the code snippet) */}
          <Image
            src="/assets/illustrations/building-silhouette-2.png"
            alt="Building Silhouette"
            width={400}
            height={700}
            className="absolute -bottom-0 -right-20 w-[300px] h-auto opacity-50 z-0 scale-x-[-1]"
            priority
          />

          {/* Service Card Grid (z-10) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {servicesList.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-gray-200 shadow-lg p-8
                           hover:shadow-xl transition-all duration-300
                           flex flex-col relative overflow-hidden" // overflow-hidden here is for the number
              >
                <span 
                  className="absolute -top-4 -right-4 text-[100px] font-extrabold 
                             text-gray-100 opacity-50 select-none z-0"
                >
                  {service.id}
                </span>

                <div className="mb-6 z-10">
                  <Image
                    src={service.icon}
                    alt={`${service.name} icon`}
                    width={50} // Set a consistent size
                    height={50} // Set a consistent size
                  />
                </div>

                <h3 className="text-2xl font-semibold text-brand-text mb-4 z-10">
                  {service.name}
                </h3>
                
                <p className="text-gray-700 text-lg leading-relaxed z-10 text-justify">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}