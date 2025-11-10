// app/services/page.tsx
import { PageHeader } from '@/components/PageHeader';
import {
  HardHat, Wrench, PaintRoller, Construction, Layers, Gem, Briefcase,
} from 'lucide-react';
import { ReactNode } from 'react';

const servicesList: {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
}[] = [
  { id: '01', name: 'Civil', description: 'Building foundations for your dreams with precision and expertise.', icon: <HardHat size={40} className="text-brand-accent" /> },
  { id: '02', name: 'MEP', description: 'Seamlessly integrating technology and functionality into your spaces.', icon: <Wrench size={40} className="text-brand-accent" /> },
  { id: '03', name: 'Painting', description: 'Transforming your vision into vibrant reality with our artistic touch.', icon: <PaintRoller size={40} className="text-brand-accent" /> },
  { id: '04', name: 'Carpentry', description: 'Crafting woodwork that embodies quality, durability, and style.', icon: <Construction size={40} className="text-brand-accent" /> },
  { id: '05', name: 'Gypsum / POP', description: 'Achieving elegant interiors through our precision plasterwork.', icon: <Layers size={40} className="text-brand-accent" /> },
  { id: '06', name: 'Tiling & stone work', description: 'Elevating aesthetics with exquisite tile and stone installations.', icon: <Gem size={40} className="text-brand-accent" /> },
  { id: '07', name: 'Consultation', description: 'Guiding you with expert insights and solutions for your construction needs.', icon: <Briefcase size={40} className="text-brand-accent" /> },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="Our"
        gradientText="Services"
        subtitle="We provide a complete range of services for any construction or real estate project."
      />

      <div className="max-w-7xl mx-auto py-24 px-8">
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
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-brand-text mb-4 z-10">
                {service.name}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed z-10">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}