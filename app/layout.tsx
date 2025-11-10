// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

// THIS IS THE PART THAT FIXES THE ICON
export const metadata: Metadata = {
  title: 'Deeshi Engineering Solutions',
  description: 'Market leaders in infrastructure construction & real estate development',
  icons: {
    icon: '/assets/des-icon.png', // This tells the browser to use your logo
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-brand-dark text-brand-light`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}