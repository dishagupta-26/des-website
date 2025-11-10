// app/services/page.tsx
import { PageHeader } from '@/components/PageHeader';
import {
  HardHat, // for Civil
  Wrench, // for MEP
  PaintRoller, // for Painting
  Construction, // for Carpentry
  Layers, // for Gypsum/POP
  Gem, // for Tiling & Stone
  Briefcase, // for Consultation
} from 'lucide-react';
import { ReactNode } from 'react';

// Define all 7 services with icons and descriptions from the PPT
const servicesList: {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    id: '01',
    name: 'Civil',
    description: 'Building foundations for your dreams with precision and expertise.', // [cite: 29]
    icon: <HardHat size={40} className="text-brand-cyan" />,
  },
  {
    id: '02',
    name: 'MEP',
    description: 'Seamlessly integrating technology and functionality into your spaces.', // [cite: 31]
    icon: <Wrench size={40} className="text-brand-cyan" />,
  },
  {
    id: '03',
    name: 'Painting',
    description: 'Transforming your vision into vibrant reality with our artistic touch.', // [cite: 30]
    icon: <PaintRoller size={40} className="text-brand-cyan" />,
  },
  {
    id: '04',
    name: 'Carpentry',
    description: 'Crafting woodwork that embodies quality, durability, and style.', // [cite: 32]
    icon: <Construction size={40} className="text-brand-cyan" />,
  },
  {
    id: '05',
    name: 'Gypsum / POP',
    description: 'Achieving elegant interiors through our precision plasterwork.', // [cite: 40]
    icon: <Layers size={40} className="text-brand-cyan" />,
  },
  {
    id: '06',
    name: 'Tiling & stone work',
    description: 'Elevating aesthetics with exquisite tile and stone installations.', // [cite: 42]
    icon: <Gem size={40} className="text-brand-cyan" />,
  },
  {
    id: '07',
    name: 'Consultation',
    description: 'Guiding you with expert insights and solutions for your construction needs.', // [cite: 41]
    icon: <Briefcase size={40} className="text-brand-cyan" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-brand-light">
      
      {/* 1. Page Header */}
      <PageHeader
        title="Our"
        gradientText="Services"
        subtitle="We provide a complete range of services for any construction or real estate project."
      />

      {/* 2. Services Grid */}
      <div className="max-w-7xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-900 rounded-xl border border-gray-800 p-8
                         flex flex-col relative overflow-hidden
                         transition-all duration-300 hover:border-brand-cyan hover:shadow-lg"
            >
              {/* Decorative Number from PPT */}
              <span 
                className="absolute -top-4 -right-4 text-[100px] font-extrabold 
                           text-gray-800 opacity-50 select-none z-0"
              >
                {service.id}
              </span>

              {/* Icon */}
              <div className="mb-6 z-10">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-brand-light mb-4 z-10">
                {service.name}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed z-10">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}