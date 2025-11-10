// app/page.tsx
import { StatCard } from '@/components/StatCard';
import { 
  Briefcase, 
  Building, 
  CheckCircle,
  DraftingCompass,
  HardHat, 
  Star, 
  Users 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {

  // Data for the client logos
  const clients = [
    { name: 'RAHEJA UNIVERSAL', logo: '/assets/client-raheja.png' },
    { name: 'RUPAREL REALTY', logo: '/assets/client-ruparel.png' },
    { name: 'PIRAMAL REALTY', logo: '/assets/client-piramal.png' },
  ];
  
  // Data for the new "Process" section
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
      
      {/* === SECTION 1: HERO === */}
      <section className="w-full bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                      min-h-[calc(100vh-80px)] py-24 px-8">
          
          {/* Column 1: Heading & CTA */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering Your <span className="text-gradient">Vision Into Reality.</span>
            </h1>
            <p className="text-xl text-gray-700 mt-6 max-w-xl mx-auto lg:mx-0">
              Market leaders in high-quality infrastructure construction and real estate 
              development, from initial concept to flawless execution.
            </p>
            <div className="mt-12 flex justify-center lg:justify-start gap-4">
              <Link href="/services">
                <span className="px-8 py-3 bg-brand-accent text-white font-semibold rounded-lg 
                                 hover:opacity-90 transition-opacity shadow-sm">
                  Our Services
                </span>
              </Link>
              <Link href="/projects">
                <span className="px-8 py-3 bg-white text-brand-accent font-semibold rounded-lg 
                                 border border-brand-accent hover:bg-brand-accent hover:text-white
                                 transition-colors">
                  View Projects
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon={<Building size={32} />}
              value="7+ Years"
              label="Proven Excellence"
              delay={0}
            />
            <StatCard
              icon={<Briefcase size={32} />}
              value="7"
              label="Core Specializations"
              delay={100}
            />
            <StatCard
              icon={<Users size={32} />}
              value="Tier-1"
              label="Valued Clients"
              delay={200}
            />
            <StatCard
              icon={<Star size={32} />}
              value="Multi-Crore"
              label="Projects Delivered"
              delay={300}
            />
          </div>
          
        </div>
      </section>

      {/* === SECTION 2: CLIENT SHOWCASE === */}
      <section className="py-24 px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-2xl mx-auto">
            We are proud to be a chosen partner for India&apos;s top real estate developers.
          </p>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl 
                           transition-all duration-300 p-8 flex justify-center items-center h-36"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={200}
                  height={80}
                  className="object-contain h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* === SECTION 3: OUR PROCESS === */}
      <section className="py-24 px-8 bg-brand-bg border-t border-gray-200">
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
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg 
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
      
      {/* === SECTION 4: CALL TO ACTION === */}
      <section className="py-24 px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let&apos;s Build Your Next <span className="text-gradient">Landmark</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Ready to start your project or have a question for our team? 
            Get in touch with us today.
          </p>
          <Link href="/contact">
            <span className="px-10 py-4 bg-brand-accent text-white text-lg font-semibold 
                             rounded-lg hover:opacity-90 transition-opacity shadow-sm">
              Contact Us
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}