// components/ProjectCarousel.tsx
'use client';

import React from 'react';
import Marquee from 'react-fast-marquee'; // <-- Import the new package
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
    // We give the container a bit of padding
    <div className="rounded-lg border border-gray-800 bg-gray-900 py-6">
      <Marquee
        pauseOnHover={true} // This is exactly what you asked for
        gradient={true}     // Adds a nice fade effect on the edges
        gradientColor="#111827" // Matches our bg-gray-900
        gradientWidth={100}
        speed={40}            // You can change this number to make it faster/slower
      >
        {images.map((imageName) => (
          <div 
            // This gives each image a fixed size and spacing
            className="aspect-square w-72 mx-4" // w-72 is 288px
            key={imageName}
          >
            <Image
              src={`/assets/projects/${imageName}`}
              alt={`${categoryTitle} - ${imageName}`}
              width={400}  // 400x400
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