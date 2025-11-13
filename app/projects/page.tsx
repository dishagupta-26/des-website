// app/projects/page.tsx
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

// 1. Define all 8 images in an object for easy access
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

// 2. Updated ProjectImage component
const ProjectImage = ({ data }: { data: { src: string, alt: string, width: number, height: number } }) => {
  return (
    // This 'div' will now grow to fill vertical space
    // 'flex-1' makes it grow
    // 'min-h-0' is a flexbox fix to allow images to shrink/crop properly
    <div className="w-full flex-1 min-h-0">
      <Image
        src={data.src}
        alt={data.alt}
        width={data.width}
        height={data.height}
        // 'h-full' and 'object-cover' are the "zoom" and "crop"
        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        priority
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="Our"
        gradientText="Projects"
        subtitle="A visual showcase of our commitment to quality, precision, and craftsmanship."
      />

      <div className="py-12 px-8">
        
        {/* 3. This is the new manual CSS Grid.
             - It's a grid (all columns stretch to the tallest height).
             - It becomes 4 columns on large screens.
        */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* === Column 1 === */}
          {/* 'flex flex-col' is crucial for making the 'flex-1' on the images work */}
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-2.jpeg']} />
          </div>

          {/* === Column 2 === */}
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-4.jpeg']} />
            <ProjectImage data={projectImages['project-5.jpeg']} />
          </div>

          {/* === Column 3 === */}
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-1.jpeg']} />
            <ProjectImage data={projectImages['project-3.jpeg']} />
            <ProjectImage data={projectImages['project-7.jpeg']} />
          </div>

          {/* === Column 4 === */}
          <div className="flex flex-col gap-8">
            <ProjectImage data={projectImages['project-6.jpeg']} />
            <ProjectImage data={projectImages['project-8.jpeg']} />
          </div>

        </div>
      </div>
    </div>
  );
}