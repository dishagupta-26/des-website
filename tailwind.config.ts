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
        'brand-dark': '#000000',
        'brand-light': '#FFFFFF',
        'brand-purple': '#4F00C0',
        'brand-cyan': '#00F2EA',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #4F00C0, #00F2EA)',
      },
    },
  },
  plugins: [],
}
export default config