// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Icons for the sections below the hero
import { 
  CheckCircle,
  DraftingCompass,
  HardHat, 
} from 'lucide-react';

export default function HomePage() {

  // Data for the "Process" section (remains the same)
  const processSteps = [
    {
      icon: <DraftingCompass size={32} className="text-brand-accent" />,
      title: '1. Consult & Plan',
      description: 'We start by understanding your vision and requirements to create a detailed project blueprint.'
    },
    {
      icon: <HardHat size={32} className="text-brand-accent" />,
      title: '2. Execute & Build',
      description: 'Our expert team manages every phase of construction, ensuring quality and precision.'
    },
    {
      icon: <CheckCircle size={32} className="text-brand-accent" />,
      title: '3. Deliver & Support',
      description: 'We complete the project on time and on budget, ensuring total client satisfaction.'
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* === SECTION 1: HERO (Unchanged) === */}
      <section className="relative w-full h-[87vh] flex items-center justify-center text-center overflow-hidden px-8">
        
        {/* Left Illustration */}
        <Image
          src="/assets/illustrations/construction-worker.png"
          alt="Construction Worker"
          width={400}
          height={600}
          className="absolute left-20 bottom-0 w-1/3 max-w-[275px] opacity-20 lg:opacity-100"
          priority
        />

        {/* Right Illustration */}
        <Image
          src="/assets/illustrations/building-silhouette.png"
          alt="Building Silhouette"
          width={400}
          height={700}
          className="absolute right-10 bottom-0 w-1/3 max-w-[800px] opacity-20 lg:opacity-100"
          priority
        />

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <Image
            src="/assets/des-logo.png"
            alt="Deeshi Engineering Solutions Logo"
            width={400}
            height={111}
            priority
            className="mb-8"
          />
          {/* This is the changed line */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-brand-text">
            <span className="block">Engineering Your</span>
            <span className="text-gradient">Vision Into Reality.</span>
          </h1>
          <p className="font-serif text-2xl text-gray-700 mt-6 max-w-xl">
            Precision, quality, and excellence in every structure we build.
          </p>
        </div>
        
      </section>

      {/* === SECTION 2: OUR PROCESS (Colors Swapped) === */}
      {/* Main section background is now 'bg-white' */}
      <section className="py-24 px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-2xl mx-auto">
            We follow a structured approach to guarantee quality and transparency 
            from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {processSteps.map((step) => (
              <div 
                key={step.title}
                /* Card background is now 'bg-brand-bg' */
                className="bg-brand-bg p-8 rounded-xl border border-gray-200 shadow-lg 
                           hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-brand-text mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}