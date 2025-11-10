// app/about/page.tsx
import { PageHeader } from '@/components/PageHeader';

// We'll define the "About Us" data from your PPT [cite: 4-9]
const aboutStats = [
  { label: 'Established', value: 'April 2023' },
  { label: 'Founder', value: 'Mr. Deepak Gupta' },
  { label: 'Proprietor', value: 'Mrs. Shilpa Deepak Gupta' },
];

// And the certificates data [cite: 61-66]
const certificates = [
  'PAN CARD', 'MSME', 'GST', 'PF', 'ADHAR CARD'
];

export default function AboutPage() {
  return (
    <div className="bg-black text-brand-light">
      
      {/* 1. Use our new PageHeader component */}
      <PageHeader
        title="About"
        gradientText="Us"
        subtitle="Building foundations for your dreams with precision and expertise."
      />

      <div className="max-w-7xl mx-auto py-24 px-8">
        
        {/* 2. "About" Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {aboutStats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800"
            >
              <p className="text-lg text-brand-cyan font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-2xl text-brand-light font-medium">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Our Vision [cite: 16] */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be a world-class infrastructure construction and Real Estate 
              Development company committed to total customer satisfaction, 
              by building on our strengths - superlative quality of material, 
              cutting-edge technology, timely completion and demonstrating 
              the highest standards of workmanship.
            </p>
          </div>

          {/* Our Mission [cite: 19] */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-10">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              “To strengthen our position as a market leader in 
              Infrastructure Construction and Real Estate Development Projects.”
            </p>
          </div>
        </div>

        {/* 4. Certificates Section [cite: 60] */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Certificates & <span className="text-gradient">Registrations</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert}
                className="bg-gray-800 text-gray-200 text-lg font-medium px-8 py-4 rounded-full border border-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}