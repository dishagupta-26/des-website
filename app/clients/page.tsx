// app/clients/page.tsx
import { PageHeader } from '@/components/PageHeader';
import { TabbedContent } from '@/components/TabbedContent';
import Image from 'next/image';

// ... (all your project data arrays like ruparelProjects, etc. are here)
const ruparelProjects = [
  { sr: '1.', project: 'G+23 storied rehab building at Kandivili (W) - Mivan', value: '2,75,72,631.00', year: '2018-2020' },
  { sr: '2.', project: 'Phase I, B+G+13 storied building at Jogeshwari (E) Conventional', value: '64,91,276.00', year: '2018-2021' },
  { sr: '3.', project: 'Phase II, G+13 storied Building at Jogeshwari (E) - Conventional.', value: '66,92,867.00', year: '2021-2024' },
];
const rahejaProjects = [
  { sr: '1.', project: 'Finishing work - Unit 28 (labour)', value: '62,540.00', year: 'Feb 2021' },
  { sr: '2.', project: 'Work order for Porta cabin repair and site development - (Part material)', value: '28,85,063.00', year: '2022-2023' },
  { sr: '3.', project: 'Fabrication/Corporate fencing work at RD-I', value: '39,20,860.00', year: '2021-2022' },
  { sr: '4.', project: 'Tiling work for sales pavilion landscaping are part material (Granite & tile by client)', value: '5,88,443.00', year: '2021' },
  { sr: '5.', project: 'Aluminium window B1-B2 shed labour repair work', value: '81,939.00', year: 'Dec 2022' },
  { sr: '6.', project: 'Toilet tiling work - sales Pavilion (Labour)', value: '82,603.00', year: '2021' },
  { sr: '7.', project: 'Civil work for partition wall B1-B2 shed', value: '11,20,988.00', year: '2022' },
  { sr: '8.', project: 'Civil work for partition wall B3-B4 shed', value: '22,41,943.00', year: '2023' },
  { sr: '9.', project: 'Interior extension- sales pavilion- part material', value: '3,55,145.00', year: '2022' },
];
const piramalProjects = [
  { sr: '1.', project: 'Misc Civil work Cluster 4 - With Material, at Piramal Vaikunth, Thane', value: '79,76,433.00', year: '2023-2024' },
  { sr: '2.', project: 'Misc Civil work Cluster 4 A with material, at Piramal Vaikunth, Thane', value: '76,16,346.00', year: '2023-2024' },
];
const clientsList = [
  { name: 'RAHEJA UNIVERSAL', logo: '/assets/client-raheja.png' },
  { name: 'RUPAREL REALTY', logo: '/assets/client-ruparel.png' },
  { name: 'PIRAMAL REALTY', logo: '/assets/client-piramal.png' },
];

const createProjectTable = (projects: { sr: string; project: string; value: string; year: string }[]) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left table-auto">
      <thead className="border-b border-gray-300 text-gray-600">
        <tr>
          <th className="py-3 px-4 w-16">Sr. no.</th>
          <th className="py-3 px-4">Project with location</th>
          <th className="py-3 px-4 w-48">WO Value (INR)</th>
          <th className="py-3 px-4 w-32">Year</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {projects.map((project) => (
          <tr key={project.sr} className="hover:bg-gray-50">
            <td className="py-4 px-4">{project.sr}</td>
            <td className="py-4 px-4">{project.project}</td>
            <td className="py-4 px-4 text-right">{project.value}</td>
            <td className="py-4 px-4">{project.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
// ... (end of data arrays)

export default function ClientsPage() {

  const summaryTabs = [
    {
      title: 'Ruparel Realty',
      content: (
        <div>
          {createProjectTable(ruparelProjects)}
          <p className="text-gray-600 text-sm mt-6 italic">
            Note: The above projects were executed on a pure labour basis. All material required (except tools and tackles) was provided by M/s. Ruparel Realty.
          </p>
        </div>
      )
    },
    {
      title: 'Raheja Universal',
      content: createProjectTable(rahejaProjects)
    },
    {
      title: 'Piramal Realty',
      content: createProjectTable(piramalProjects)
    }
  ];

  return (
    <div className="bg-brand-bg text-brand-text">
      
      <PageHeader
        title="Our Major"
        gradientText="Clients"
        subtitle="We are proud to have worked with some of the biggest names in real estate."
      />

      <div className="max-w-7xl mx-auto py-24 px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {clientsList.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-8
                         hover:shadow-xl transition-all duration-300
                         flex flex-col justify-center items-center gap-8"
            >
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={250}
                height={100}
                className="object-contain h-20 w-auto"
              />
              <h3 className="text-xl font-semibold text-brand-text text-center">
                {client.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white border border-gray-200 rounded-xl p-12 
                        shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-center mb-10">
            Orders <span className="text-gradient">Executed</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Ongoing Project</h3>
              <p className="text-lg text-gray-700">
                Misc. Civil Work at Piramal Vaikunth, Thane (W)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Interior Projects</h3>
              <p className="text-lg text-gray-700">
                Several flat interiors executed at various locations in MMR, 
                ranging from 4 lacs to 30 lacs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed Work <span className="text-gradient">Summary</span>
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8 
                          shadow-lg hover:shadow-xl transition-all duration-300">
            <TabbedContent tabs={summaryTabs} />
          </div>
        </div>

      </div>
    </div>
  );
}