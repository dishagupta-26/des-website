// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add the new fontFamily section
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      colors: {
        'brand-bg': '#FFF8F1',    
        'brand-text': '#3D3935',  
        'brand-accent': '#B84B1F', 
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #B84B1F, #D16A3E)', 
      },
    },
  },
  plugins: [],
}
export default config