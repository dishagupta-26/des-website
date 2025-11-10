// app/projects/data.ts

export interface ProjectCategory {
  id: string;
  title: string;
  images: string[];
}

const generateImageNames = (baseName: string, count: number): string[] => {
  const names: string[] = [];
  for (let i = 1; i <= count; i++) {
    names.push(`${baseName}(${i}).jpeg`); // Uses .jpeg extension
  }
  return names;
};

// This is our main data, now in the order you requested.
export const projectData: ProjectCategory[] = [
  {
    id: 'living-room-navi-mumbai',
    title: 'Living room interior at Navi Mumbai',
    images: generateImageNames('Living room interior at Navi Mumbai', 6),
  },
  {
    id: 'general-interior',
    title: 'General Interior at various locations',
    images: generateImageNames('General Interior at various locations', 19),
  },
  {
    id: 'interior-kandivali',
    title: 'Interior work at Kandivali',
    images: generateImageNames('Interior work at Kandivali', 20),
  },
  {
    id: 'interior',
    title: 'Interior',
    images: generateImageNames('Interior', 13),
  },
  {
    id: 'civil-kandivali',
    title: 'Civil work of 23 storey building at Kandivali',
    images: generateImageNames('Civil work of 23 storey building at Kandivali', 23),
  },
  {
    id: 'tiling-vikroli',
    title: 'Tiling and kitchen work at Vikroli',
    images: generateImageNames('Tiling and kitchen work at Vikroli', 6),
  },
];