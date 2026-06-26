import type { Metadata, Viewport } from 'next'
import { Open_Sans, Pacifico } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans'
});

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: 'App Mi Movistar | Movistar Perú',
  description: 'Activa la Red 5G en tu App Mi Movistar y navega a máxima velocidad sin interrupciones. Descárgala y vive la experiencia 5G.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.jpg',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.jpg',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
      },
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'App Mi Movistar | Movistar Perú',
    description: 'Activa la Red 5G en tu App Mi Movistar y navega a máxima velocidad sin interrupciones. Descárgala gratis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'App Mi Movistar - Movistar Perú',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Mi Movistar | Movistar Perú',
    description: 'Activa la Red 5G en tu App Mi Movistar y navega a máxima velocidad sin interrupciones. Descárgala gratis.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#019df4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} ${pacifico.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
