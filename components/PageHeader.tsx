// components/PageHeader.tsx

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradientText: string;
}

export const PageHeader = ({ title, subtitle, gradientText }: PageHeaderProps) => {
  return (
    <div className="py-24 px-8 text-center border-b border-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-text">
        {title} <span className="text-gradient">{gradientText}</span>
      </h1>
      <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};