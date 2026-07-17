// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  // Array of the 3 truck illustrations (unmodified)
  const vehicles = [
    { name: 'Bulldozer', src: '/assets/illustrations/bulldozer.png', flipped: true },
    { name: 'Cement Mixer', src: '/assets/illustrations/cement-mixer.png', flipped: false },
    { name: 'Dump Truck', src: '/assets/illustrations/dump-truck.png', flipped: false },
  ];

  return (
    // Main footer tag provides the 'bg-brand-bg' (pale orange) and the top border
    <footer className="w-full bg-brand-bg text-gray-700 border-t border-gray-200">
      
      {/* === Main Footer Content Section === */}
      {/*
        - py-6 on mobile, py-0 on desktop
        - flex-col on mobile, flex-row on desktop
      */}
      <div className="max-w-7xl mx-auto py-6 md:py-0 px-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
        
        {/* Subsidiary Section (Left) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Image
            src="/assets/ssi-logo.png"
            alt="Shree Sai Infra Logo"
            width={120} 
            height={32}
          />
          {/* - Added 'max-w-xs' to force an even line break
            - Changed <h5> to <p> and made text 'text-sm'
          */}
          <div className="max-w-xs">
            <p className="text-sm text-brand-text">
              <b>Deeshi Engineering Solutions</b> is a proud 
              subsidiary unit of <b>Shree Sai Infra</b>.
            </p>
          </div>
        </div>
        
        {/* Truck Section (Right) */}
        <div className="hidden md:flex gap-8">
          {vehicles.map((vehicle) => (
            <Image
              key={vehicle.name}
              src={vehicle.src}
              alt={vehicle.name}
              width={165}
              height={105}
              className={`object-contain ${vehicle.flipped ? 'scale-x-[-1]' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* === Copyright Bar === */}
      {/* This border-t is the "pale line" you want everything to sit on */}
      <div className="text-center text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Deeshi Engineering Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};