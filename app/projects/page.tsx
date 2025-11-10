// app/projects/page.tsx
import { PageHeader } from '@/components/PageHeader';
import { projectData } from './data'; // Import our data file
import { ProjectCarousel } from '@/components/ProjectCarousel'; // Import our new carousel

export default function ProjectsPage() {
  return (
    <div className="bg-black text-brand-light">
      
      {/* 1. Page Header */}
      <PageHeader
        title="Our"
        gradientText="Projects"
        subtitle="A visual showcase of our commitment to quality, precision, and craftsmanship."
      />

      <div className="max-w-7xl mx-auto py-24 px-8 space-y-24">
        
        {/* 2. Loop over each project category */}
        {projectData.map((category) => (
          <section key={category.id}>
            
            {/* Category Title */}
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-800">
              {category.title}
            </h2>

            {/* Use the Carousel Component */}
            <ProjectCarousel
              images={category.images}
              categoryTitle={category.title}
            />

          </section>
        ))}

      </div>
    </div>
  );
}