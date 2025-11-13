// app/services/page.tsx
import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image'; 
import { ReactNode } from 'react';

// ... servicesList data remains the same ...
const servicesList: {
  id: string;
  name: string;
  description: string;
  icon: string; 
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
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="Our"
        gradientText="Services"
        subtitle="We provide a complete range of services for any construction or real estate project."
      />

      {/* 1. This wrapper clips horizontal overflow */}
      <div className="relative overflow-x-hidden">
        
        {/* --- Left Background Silhouette --- */}
        {/* Moved OUTSIDE the max-w-7xl div. Pinned to 'left-0'. */}
        <Image
          src="/assets/illustrations/building-silhouette-3.png"
          alt="Building Silhouette"
          width={400}
          height={700}
          className="absolute -bottom-0 -left-20 w-[400px] h-auto opacity-50 z-0 scale-x-[-1]"
          priority
        />
        
        {/* --- Right Background Silhouette --- */}
        {/* Moved OUTSIDE the max-w-7xl div. Pinned to 'right-0'. */}
        <Image
          src="/assets/illustrations/building-silhouette-2.png"
          alt="Building Silhouette"
          width={400}
          height={700}
          className="absolute -bottom-0 -right-20 w-[400px] h-auto opacity-50 z-0 scale-x-[-1]"
          priority
        />

        {/* 2. This 'div' now ONLY handles content layout and padding */}
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {servicesList.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl border border-gray-200 shadow-lg p-8
                           hover:shadow-xl transition-all duration-300
                           flex flex-col relative overflow-hidden" 
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
                    width={50} 
                    height={50} 
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