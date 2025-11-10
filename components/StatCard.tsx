// components/StatCard.tsx
'use client';

import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number; // For staggered animation
}

export const StatCard = ({ icon, label, value, delay = 0 }: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5,   // Trigger when 50% visible
  });

  return (
    <div
      ref={ref}
      className={`
        bg-gray-900 p-6 rounded-xl border border-gray-800 
        flex items-center gap-5 transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 text-brand-cyan">
        {icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-lg text-gray-400">{label}</p>
      </div>
    </div>
  );
};