// components/StatCard.tsx
'use client';

import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number;
}

export const StatCard = ({ icon, label, value, delay = 0 }: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`
        bg-white p-6 rounded-xl border border-gray-200 
        shadow-lg hover:shadow-xl transition-all duration-300
        flex items-center gap-5
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 text-brand-accent">
        {icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-brand-text">{value}</p>
        <p className="text-lg text-gray-700">{label}</p>
      </div>
    </div>
  );
};