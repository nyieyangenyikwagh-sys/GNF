import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import Providers from '@/components/providers'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Canadian Healthcare Billing Solutions | RCM Services for Healthcare Providers',
  description:
    'Streamlined RCM solutions for Canadian healthcare providers. OHIP, MSP, RAMQ, and provincial compliance.',
  generator: 'GNF-Billing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          font-sans
          antialiased
          bg-white
          dark:bg-slate-950
          transition-colors
        `}
      >
        <Providers>
          {children}
        </Providers>

        {process.env.NODE_ENV === 'production' && (
          <Analytics />
        )}
      </body>
    </html>
  )
}