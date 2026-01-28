'use client';

import { PageHeader } from '@/components/PageHeader';
import Image from 'next/image';

export default function AssociatesPage() {
  return (
    <div className="bg-brand-bg text-brand-text">

      <PageHeader
        title="Our"
        gradientText="Associates"
        subtitle="Collaborating with trusted firms to deliver reliable engineering solutions."
      />

      <div className="relative max-w-7xl mx-auto py-24 px-4 md:px-6 overflow-hidden">

        {/* Background Silhouettes */}
        <Image
          src="/assets/illustrations/building-silhouette.png"
          alt="Building Silhouette"
          width={1200}
          height={500}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                     w-[1200px] h-auto opacity-[0.5] z-0"
        />

        <Image
          src="/assets/illustrations/crane-silhouette.png"
          alt="Crane Silhouette"
          width={600}
          height={600}
          className="absolute right-0 top-1/3 
                     w-[500px] h-auto opacity-[0.04] z-0"
        />

        {/* Content */}
        <div className="relative z-10">
          <div
            className="bg-white bg-opacity-50 backdrop-blur-sm rounded-2xl
                       border border-gray-200 shadow-lg hover:shadow-xl
                       transition-all duration-300
                       p-12 md:p-16 w-full"
          >

            {/* Associate Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prabhu <span className="text-gradient">Enterprises</span>
              </h2>
              <p className="text-gray-600 mt-2 text-lg">
                RCC Rehabilitation Contractor · Navi Mumbai
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-6xl">
              Prabhu Enterprises is a specialized RCC rehabilitation contractor with
              extensive experience in structural repair and strengthening works for
              residential, commercial, and institutional buildings. All works are
              executed in line with standard RCC repair practices and under the
              guidance of approved structural consultants.
            </p>

            {/* Expertise */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'RCC Column Jacketing',
                  'RCC Beam Jacketing',
                  'RCC Slab Jacketing',
                  'Structural Rehabilitation',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm rounded-full border
                               bg-white/70 text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8">
                Selected Projects
              </h3>

              <div className="flex flex-col gap-10">
                {[
                  {
                    name: 'Raheja Haven Society',
                    location: 'Vile Parle',
                    scope: 'RCC Column Jacketing',
                    consultant: 'Mr. Nikhil Mhatre',
                    images: [
                      '/assets/associates/prabhu/raheja-1.jpg',
                      '/assets/associates/prabhu/raheja-2.jpg',
                      '/assets/associates/prabhu/raheja-3.jpg',
                      '/assets/associates/prabhu/raheja-4.jpg',
                    ],
                  },
                  {
                    name: 'Ruby Mills',
                    location: 'Dadar',
                    scope: 'RCC Column Jacketing',
                    consultant: 'Mr. Pravin Gala',
                    images: [
                      '/assets/associates/prabhu/ruby-1.jpg',
                      '/assets/associates/prabhu/ruby-2.jpg',
                      '/assets/associates/prabhu/ruby-3.jpg',
                      '/assets/associates/prabhu/ruby-4.jpg',
                    ],
                  },
                  {
                    name: 'Roop Leela (UPL)',
                    location: 'Vile Parle',
                    scope: 'RCC Columns & Beams Jacketing',
                    consultant: 'Mr. Dwijen Bhat',
                    images: [
                      '/assets/associates/prabhu/roop-1.jpg',
                      '/assets/associates/prabhu/roop-2.jpg',
                      '/assets/associates/prabhu/roop-3.jpg',
                      '/assets/associates/prabhu/roop-4.jpg',
                    ],
                  },
                  {
                    name: 'Bharatiya Arogya Nidhi Hospital',
                    location: 'Vile Parle',
                    scope: 'RCC Columns, Beams & Slabs Jacketing',
                    consultant: 'Mr. Navin',
                    images: [
                      '/assets/associates/prabhu/hospital-1.jpg',
                      '/assets/associates/prabhu/hospital-2.jpg',
                      '/assets/associates/prabhu/hospital-3.jpg',
                      '/assets/associates/prabhu/hospital-4.jpg',
                    ],
                  },
                ].map((project) => (
                  <div
  key={project.name}
  className="rounded-2xl border bg-white/70 backdrop-blur-sm
             p-8 hover:shadow-lg transition"
>
  {/* Project Details – TOP */}
  <div className="mb-6">
    <h4 className="text-2xl font-semibold flex flex-wrap items-baseline gap-3">
      <span>{project.name}</span>
      <span className="text-base font-normal text-gray-500">
        · {project.location}
      </span>
    </h4>

    <div className="flex flex-wrap gap-3 mt-4">
      <span className="px-4 py-2 rounded-full text-sm
                       bg-brand-accent/10 text-brand-accent
                       border border-brand-accent/30">
        RCC Consultant: {project.consultant}
      </span>
      <span className="px-4 py-2 rounded-full text-sm
                      bg-gray-100 text-gray-800
                       border border-gray-300">
        {project.scope}
      </span>
    </div>
  </div>

  {/* Images – BOTTOM */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {project.images.map((img, idx) => (
      <div
        key={idx}
        className="relative h-44 rounded-xl overflow-hidden"
      >
        <Image
          src={img}
          alt={`${project.name} image ${idx + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>
</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
