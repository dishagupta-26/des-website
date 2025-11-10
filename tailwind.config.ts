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
      colors: {
        // Your new color palette
        'brand-bg': '#FFF8F1',    // The parchment background
        'brand-text': '#3D3935',   // The dark text
        'brand-accent': '#B84B1F', // The special "rust" color
      },
      backgroundImage: {
        // We'll make the gradient use the new accent
        'brand-gradient': 'linear-gradient(to right, #B84B1F, #D16A3E)', // Rust to a lighter shade
      },
    },
  },
  plugins: [],
}
export default config