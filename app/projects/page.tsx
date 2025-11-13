// app/projects/page.tsx
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

// 1. Image list (unchanged)
const projectImages = {
  'project-1.jpeg': { src: '/assets/projects/project-1.jpeg', alt: 'Modern bedroom interior', width: 1600, height: 900 },
  'project-2.jpeg': { src: '/assets/projects/project-2.jpeg', alt: 'Sleek kitchen interior', width: 900, height: 1600 },
  'project-3.jpeg': { src: '/assets/projects/project-3.jpeg', alt: 'Living room with swing', width: 1600, height: 1067 },
  'project-4.jpeg': { src: '/assets/projects/project-4.jpeg', alt: 'Traditional living room', width: 900, height: 1600 },
  'project-5.jpeg': { src: '/assets/projects/project-5.jpeg', alt: 'Building construction site', width: 1600, height: 1200 },
  'project-6.jpeg': { src: '/assets/projects/project-6.jpeg', alt: 'Rebar on construction roof', width: 1600, height: 1200 },
  'project-7.jpeg': { src: '/assets/projects/project-7.jpeg', alt: 'Large pillar structure', width: 1600, height: 1200 },
  'project-8.jpeg': { src: '/assets/projects/project-8.jpeg', alt: 'Construction site with rebar and temple', width: 900, height: 1600 },
};

// 2. Client data (unchanged)
const clientsData = [
  {
    name: 'Ruparel Realty',
    summary: 'Executed civil work for multiple high-rise residential buildings in Kandivali and Jogeshwari.'
  },
  {
    name: 'Raheja Universal',
    summary: 'Managed various civil, fabrication, and finishing works, including site development, partition walls, and tiling work.'
  },
  {
    name: 'Piramal Realty',
    summary: 'Handled miscellaneous civil works for multiple clusters at Piramal Vaikunth, Thane.'
  },
  {
    name: 'JVP Constructions',
    summary: 'Completed comprehensive tiling and carpentry work across three residential buildings.'
  },
  {
    name: 'Tata Projects',
    summary: 'Provided PEB civil and structural work for stations on the Metro Line 4 project.'
  },
  {
    name: 'SIPL-AIPL JV',
    summary: 'Conducted specialized granite and civil plastering work for various metro stations.'
  },
];

// 3. Ongoing Projects data (unchanged)
const ongoingProjectsData = [
  {
    name: 'Siddha Developers (jointly with Pinaki Creators)',
    summary: 'Currently executing civil work for the basement and podium levels of a 42-storey residential tower.'
  },
  {
    name: 'Meghdhoot Chemical Ltd.',
    summary: 'Complete aesthetic revamp and structural strengthening work for their industrial facility.'
  },
  {
    name: 'Interchrome Processor Pvt. Ltd.',
    summary: 'Application of specialized epoxy painting for the structural shed and associated machinery.'
  },
];

// 4. ProjectImage helper component (unchanged)
const ProjectImage = ({ data }: { data: { src: string, alt: string, width: number, height: number } }) => {
  return (
    <div className="w-full flex-1 min-h-0">
      <Image
        src={data.src}
        alt={data.alt}
        width={data.width}
        height={data.height}
        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        priority
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      
      {/* 5. PageHeader (unchanged) */}
      <PageHeader
        title="Our"
        gradientText="Projects"
        subtitle="A visual showcase of our commitment to quality, precision, and craftsmanship."
      />

      <div className="py-12 px-8">
        
        {/* 6. Image collage grid (unchanged) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ... all 4 columns ... */}
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-2.jpeg']} />
          </div>
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-4.jpeg']} />
            <ProjectImage data={projectImages['project-5.jpeg']} />
          </div>
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-1.jpeg']} />
            <ProjectImage data={projectImages['project-3.jpeg']} />
            <ProjectImage data={projectImages['project-7.jpeg']} />
          </div>
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-6.jpeg']} />
            <ProjectImage data={projectImages['project-8.jpeg']} />
          </div>
        </div>
      </div>

      {/* 7. "We've worked with" Section (unchanged) */}
      <section className="relative py-24 bg-white border-t border-gray-200 overflow-hidden">
        
        <Image
          src="/assets/illustrations/site.png"
          alt="Construction Site Silhouette"
          width={1920}
          height={334}
          className="absolute bottom-0 left-0 w-full h-auto opacity-50 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          
          <h2 className="text-3xl font-bold text-center mb-16">
            We&apos;ve <span className="text-gradient">Worked With</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {clientsData.map((client) => (
              <div
                key={client.name}
                className="bg-brand-bg bg-opacity-90 rounded-xl border border-gray-200 shadow-lg 
                           hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-text mb-4">
                  {client.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {client.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. UPDATED: "Ongoing Projects" Section */}
      <section className="relative py-24 bg-brand-bg border-t border-gray-200 overflow-hidden">

        {/* --- Left Background Worker --- */}
        {/* - opacity-100 (opaque)
            - h-96 (bigger)
            - left-4 (moved in)
        */}
        <Image
          src="/assets/illustrations/construction-worker-2.png"
          alt="Construction Worker"
          width={400}
          height={600}
          className="absolute bottom-0 left-4 w-auto h-200 opacity-100 z-0"
        />

        {/* --- Right Background Worker --- */}
        {/* - opacity-100 (opaque)
            - h-96 (bigger)
            - right-4 (moved in)
        */}
        <Image
          src="/assets/illustrations/construction-worker-3.png"
          alt="Construction Worker"
          width={400}
          height={600}
          className="absolute bottom-0 right-4 w-auto h-200 opacity-100 z-0"
        />

        {/* Added 'relative z-10' to this container */}
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          
          <h2 className="text-3xl font-bold text-center mb-16">
            Ongoing <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid grid-cols-1 gap-10">
            {ongoingProjectsData.map((project) => (
              <div
                key={project.name}
                // Removed bg-opacity-90
                className="bg-white rounded-xl border border-gray-200 shadow-lg 
                           hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-semibold text-brand-text mb-4">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}