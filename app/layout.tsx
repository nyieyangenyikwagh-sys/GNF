import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

import Providers from '@/components/providers'

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
      <body className="font-sans antialiased bg-white transition-colors dark:bg-slate-950">
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
