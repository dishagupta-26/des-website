// app/about/page.tsx
import { PageHeader } from '@/components/PageHeader';

const aboutStats = [
  { label: 'Established', value: 'April 2023' },
  { label: 'Founder', value: 'Mr. Deepak Gupta' },
  { label: 'Proprietor', value: 'Mrs. Shilpa Deepak Gupta' },
];

const certificates = [
  'PAN CARD', 'MSME', 'GST', 'PF', 'ADHAR CARD'
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
        
        {/* === ADDED SHADOWS & HOVER EFFECTS HERE === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {aboutStats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg 
                         hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg text-brand-accent font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-2xl text-brand-text font-medium">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* === ADDED SHADOWS & HOVER EFFECTS HERE === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg 
                          hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-gradient">Vision</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be a world-class infrastructure construction and Real Estate 
              Development company committed to total customer satisfaction, 
              by building on our strengths - superlative quality of material, 
              cutting-edge technology, timely completion and demonstrating 
              the highest standards of workmanship.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg
                          hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              “To strengthen our position as a market leader in 
              Infrastructure Construction and Real Estate Development Projects.”
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Certificates & <span className="text-gradient">Registrations</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert}
                className="bg-brand-accent text-white text-lg font-medium px-8 py-4 rounded-full
                           shadow-md hover:opacity-90 transition-opacity"
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