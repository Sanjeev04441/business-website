import type { Metadata, Viewport } from 'next'
import './globals.css'
import FloatingPriceCalculator from '@/components/FloatingPriceCalculator'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sdblabel.com'),
  title: {
    default: 'SDB LABEL - Professional Business Solutions | Labelling Solutions India',
    template: '%s | SDB LABEL',
  },
  description: 'Leading provider of sticker labels, hardware, software, and consultancy services in India. SDB LABEL - Your trusted partner for comprehensive business solutions since 2011.',
  keywords: 'SDB LABEL, sticker labels, barcode labels, printers, scanners, inventory management, asset tracking, ERP, consultancy, labelling solutions India, RFID labels, printing solutions, business consultancy India',
  authors: [{ name: 'SDB LABEL' }],
  creator: 'SDB LABEL',
  publisher: 'SDB LABEL',
  icons: {
    icon: [
      // Highest priority: Next.js auto icon route
      { url: '/icon.png?v=3', type: 'image/png', rel: 'icon' },
      { url: '/images/icon/logo.png?v=2', type: 'image/png', rel: 'icon' },
      { url: '/favicon.ico', type: 'image/x-icon', rel: 'icon' },
    ],
    shortcut: ['/icon.png?v=3'],
    apple: ['/icon.png?v=3'],
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SDB LABEL',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.sdblabel.com',
    siteName: 'SDB LABEL',
    title: 'SDB LABEL - Professional Business Solutions | Labelling Solutions India',
    description: 'Leading provider of sticker labels, hardware, software, and consultancy services in India. Trusted by 500+ companies since 2011.',
    images: [
      {
        url: '/images/icon/logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'SDB LABEL - Professional Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDB LABEL - Professional Business Solutions | Labelling Solutions India',
    description: 'Leading provider of sticker labels, hardware, software, and consultancy services in India. Trusted by 500+ companies since 2011.',
    images: ['/images/icon/logo.png?v=2'],
    creator: '@sdblabel',
  },
  alternates: {
    canonical: 'https://www.sdblabel.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="SDB LABEL" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SDB LABEL" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Favicon Links (order matters; first one wins in many browsers) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png?v=3" />
        {/* Secondary fallbacks */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon/logo.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon/logo.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icon/logo.png?v=2" />
        <link rel="shortcut icon" href="/images/icon/logo.png?v=2" />
        
        {/* Fonts - Optimized: Only load weights actually used (400, 500, 600, 700) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Critical Image Preload - Logo only */}
        <link rel="preload" href="/images/icon/logo.png?v=2" as="image" type="image/png" fetchPriority="high" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SDB LABEL',
              description: 'Leading provider of sticker labels, hardware, software, and consultancy services in India.',
              url: 'https://www.sdblabel.com',
              logo: 'https://www.sdblabel.com/images/icon/logo.png?v=2',
              foundingDate: '2011',
              email: 'info@sdblabel.com',
              telephone: '+919625520466',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.facebook.com/sdblabel',
                'https://www.linkedin.com/company/sdblabel',
                'https://twitter.com/sdblabel',
              ],
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Business Solutions',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Sticker Labels',
                      description: 'Premium quality sticker labels, barcode labels, and RFID solutions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Hardware Solutions',
                      description: 'Industrial printers, scanners, and printing equipment',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Software Solutions',
                      description: 'Inventory management, ERP, and asset tracking systems',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Business Consultancy',
                      description: 'Strategic business planning and process optimization',
                    },
                  },
                ],
              },
            }),
          }}
        />
        
        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SDB LABEL',
              image: 'https://www.sdblabel.com/images/icon/logo.png?v=2',
              '@id': 'https://www.sdblabel.com',
              url: 'https://www.sdblabel.com',
              telephone: '+919625520466',
              email: 'info@sdblabel.com',
              priceRange: '₹₹',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.7041,
                longitude: 77.1025,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
        
        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }} />
      </head>
      <body className="antialiased poppins-font overflow-x-hidden">
        {children}
        <FloatingPriceCalculator />
      </body>
    </html>
  )
}
