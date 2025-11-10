// app/page.tsx
import { StatCard } from '@/components/StatCard';
import { Briefcase, Building, Star, Users } from 'lucide-react'; // Icons for our stats
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {

  // Data for the client logos
  const clients = [
    { name: 'RAHEJA UNIVERSAL', logo: '/assets/client-raheja.png' },
    { name: 'RUPAREL REALTY', logo: '/assets/client-ruparel.png' },
    { name: 'PIRAMAL REALTY', logo: '/assets/client-piramal.png' },
  ];

  return (
    <div className="flex flex-col">
      
      {/* === SECTION 1: NEW HERO === */}
      <section className="w-full bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                      min-h-[calc(100vh-80px)] py-24 px-8">
          
          {/* Column 1: Heading & CTA */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Engineering Your <span className="text-gradient">Vision Into Reality.</span>
            </h1>
            <p className="text-xl text-gray-300 mt-6 max-w-xl mx-auto lg:mx-0">
              Market leaders in high-quality infrastructure construction and real estate 
              development, from initial concept to flawless execution.
            </p>
            <div className="mt-12 flex justify-center lg:justify-start gap-4">
              <Link href="/services">
                <span className="px-8 py-3 bg-brand-cyan text-brand-dark font-semibold rounded-lg 
                                 hover:opacity-90 transition-opacity">
                  Our Services
                </span>
              </Link>
              <Link href="/projects">
                <span className="px-8 py-3 bg-gray-800 text-brand-light font-semibold rounded-lg 
                                 hover:bg-gray-700 transition-colors">
                  Our Projects
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              icon={<Building size={32} />}
              value="7+ Years"
              label="Of Proven Excellence"
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
      <section className="py-24 px-8 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16">
            We are proud to be a chosen partner for India's top real estate developers.
          </p>

          {/* Client Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-gray-900 rounded-xl border border-gray-800 p-8
                           flex justify-center items-center h-36"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={200}
                  height={80}
                  className="object-contain h-16 w-auto" // Uniform height
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/clients">
              <span className="text-lg text-brand-cyan font-medium hover:underline">
                View All Clients & Work Summaries →
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}