// components/ProjectCarousel.tsx
'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

interface ProjectCarouselProps {
  images: string[];
  categoryTitle: string;
}

export const ProjectCarousel = ({ images, categoryTitle }: ProjectCarouselProps) => {
  if (images.length === 0) {
    return <p className="text-gray-500">Images for this category are coming soon.</p>;
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white 
                    shadow-lg hover:shadow-xl transition-all duration-300 py-6">
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="#FFF8F1"
        gradientWidth={100}
        speed={40}
      >
        {images.map((imageName) => (
          <div 
            className="aspect-square w-72 mx-4"
            key={imageName}
          >
            <Image
              src={`/assets/projects/${imageName}`}
              alt={`${categoryTitle} - ${imageName}`}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};