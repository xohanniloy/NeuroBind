import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Neuro Binding - Psychology-Driven Web Design & Marketing',
  description: 'Bangladesh-based neuro marketing agency combining cutting-edge psychology with stunning web design to create digital experiences that convert.',
  keywords: 'neuro marketing, web design, psychology-driven design, conversion optimization, Bangladesh web agency',
  authors: [{ name: 'Neuro Binding' }],
  openGraph: {
    title: 'Neuro Binding - Psychology-Driven Web Design & Marketing',
    description: 'We combine the science of the brain with the art of design to build websites that think, feel, and sell.',
    url: 'https://neurobinding.com',
    siteName: 'Neuro Binding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neuro Binding - Psychology-Driven Web Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuro Binding - Psychology-Driven Web Design & Marketing',
    description: 'We combine the science of the brain with the art of design to build websites that think, feel, and sell.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}