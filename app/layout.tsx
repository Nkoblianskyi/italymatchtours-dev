import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Italy Match Tours — Tour Sportivi in Italia e in Europa',
  description:
    'Vivi l\'emozione del calcio dal vivo con Italy Match Tours. Pacchetti esclusivi per assistere alle partite più spettacolari in Italia e in tutta Europa.',
  keywords: 'tour sportivi, calcio, partite in diretta, Italia, Europa, turismo sportivo, pacchetti calcio',
  metadataBase: new URL('https://italymatchtours.com'),
  openGraph: {
    title: 'Italy Match Tours — Tour Sportivi in Italia e in Europa',
    description: 'Tour sportivi esclusivi per vivere il calcio europeo dal vivo.',
    url: 'https://italymatchtours.com',
    siteName: 'Italy Match Tours',
    locale: 'it_IT',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
