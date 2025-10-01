import type { Metadata } from 'next'
import './globals.css'

const BRAND_NAME = 'LivPro'

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Envois Maroc ↔ Allemagne | Rapide & Sûr`,
  description: 'Envoyez facilement vos colis entre Maroc et l\'Allemagne. Service rapide, tarifs transparents, suivi en temps réel. Testez notre MVP dès maintenant.',
  keywords: ['envoi colis', 'Maroc Allemagne', 'livraison internationale', 'tracking colis', 'envoi sécurisé'],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://livpro.com',
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} — Envois Maroc ↔ Allemagne | Rapide & Sûr`,
    description: 'Envoyez facilement vos colis entre Maroc et l\'Allemagne. Service rapide, tarifs transparents, suivi en temps réel.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - Service d'envoi de colis`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME} — Envois Maroc ↔ Allemagne`,
    description: 'Envoyez facilement vos colis entre Maroc et l\'Allemagne. Service rapide, tarifs transparents, suivi en temps réel.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `https://livpro.com/#organization`,
        name: BRAND_NAME,
        url: 'https://livpro.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://livpro.com/logo.png',
          width: 250,
          height: 60,
        },
        description: 'Service d\'envoi de colis entre Maroc et l\'Allemagne',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Maroc',
          addressCountry: 'MA',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+212-XXX-XXXX',
          contactType: 'customer service',
          availableLanguage: ['French', 'German', 'Arabic'],
        },
        sameAs: [
          'https://facebook.com/livpro',
          'https://twitter.com/livpro',
          'https://instagram.com/livpro',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://livpro.com/#webpage',
        url: 'https://livpro.com',
        name: `${BRAND_NAME} — Envois Maroc ↔ Allemagne | Rapide & Sûr`,
        description: 'Envoyez facilement vos colis entre Maroc et l\'Allemagne. Service rapide, tarifs transparents, suivi en temps réel.',
        inLanguage: 'fr-FR',
        isPartOf: {
          '@id': 'https://livpro.com/#organization',
        },
      },
    ],
  }

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
