// components/TabbedContent.tsx
'use client'; // This component needs to be a Client Component

import { useState } from 'react';

interface TabbedContentProps {
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const TabbedContent = ({ tabs }: TabbedContentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-700 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-6 text-lg font-medium transition-colors
              ${
                activeTab === index
                  ? 'border-b-2 border-brand-cyan text-brand-cyan'
                  : 'text-gray-500 hover:text-gray-300'
              }
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab, index) => (
          <div key={tab.title} className={activeTab === index ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};