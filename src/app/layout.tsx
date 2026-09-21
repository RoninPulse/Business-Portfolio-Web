import type { Metadata, Viewport } from 'next';
import { Inter, Archivo, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { PulseCursor } from '@/components/cursor/PulseCursor';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { AmbientBackground } from '@/components/layout/AmbientBackground';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { CookieBanner } from '@/components/layout/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  style: ['normal', 'italic'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.detailedTagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Ronin Pulse',
    'Your Technology Arm',
    'Custom Software Development',
    'Next.js Web Development',
    'Mobile App Development',
    'Digital Marketing Sri Lanka',
    'Technical SEO',
    'Cloud DevOps',
    'UI UX Design Systems',
  ],
  authors: [{ name: 'Ronin Pulse Team', url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.detailedTagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.stylisedName} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.detailedTagline}`,
    description: siteConfig.description,
    images: ['/images/logo.jpg'],
    creator: '@RoninPulse_YTA',
  },
  icons: {
    icon: '/images/logo-circled.png',
    shortcut: '/images/logo-circled.png',
    apple: '/images/logo-circled.png',
  },
};

// Organization JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: siteConfig.name,
  alternateName: siteConfig.stylisedName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo-circled.png`,
  image: `${siteConfig.url}/images/logo.jpg`,
  description: siteConfig.detailedTagline,
  telephone: siteConfig.contact.phoneDisplay,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'HQ',
    addressCountry: 'LK',
  },
  hasMap: siteConfig.contact.googleMapsUrl,
  sameAs: siteConfig.socials.map((s) => s.url),
  priceRange: '$$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${archivo.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-rp-black text-rp-grey-300 font-sans antialiased selection:bg-rp-red selection:text-white"
        suppressHydrationWarning
      >
        <Preloader />
        <PulseCursor />
        <ScrollProgress />
        <AmbientBackground />
        <SmoothScroll>
          <Header />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
