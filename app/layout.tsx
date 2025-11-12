// app/layout.tsx
import type { Metadata } from 'next'
// Import Playfair_Display alongside Poppins
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Add a variable for Poppins
})

// Add the new "classy" font
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display', // Add a variable for Playfair
})

export const metadata: Metadata = {
  title: 'Deeshi Engineering Solutions',
  description: 'Market leaders in infrastructure construction & real estate development',
  icons: {
    icon: '/assets/des-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Add both font variables and set Poppins (font-sans) as the default */}
      <body className={`${poppins.variable} ${playfair.variable} font-sans bg-brand-bg text-brand-text`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}