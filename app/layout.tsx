import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jengala.ar'),
  title: {
    default: 'Jengala | Daniel Jensen & Maria Ester Fragala',
    template: '%s | Jengala',
  },
  description:
    'Jengala is the shared studio of Daniel Jensen and Maria Ester Fragala in Mendoza, Argentina. Original acrylic paintings shaped by color, texture and a lifetime shared.',
  authors: [
    { name: 'Daniel Jensen' },
    { name: 'Maria Ester Fragala' },
  ],
  creator: 'Daniel Jensen & Maria Ester Fragala',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Jengala | Daniel Jensen & Maria Ester Fragala',
    description:
      'Two lives, one language of color. Original works by Daniel Jensen and Maria Ester Fragala.',
    url: 'https://www.jengala.ar',
    siteName: 'Jengala',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Jengala - Daniel Jensen & Maria Ester Fragala',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jengala | Daniel Jensen & Maria Ester Fragala',
    description:
      'Two lives, one language of color. Original works by Daniel Jensen and Maria Ester Fragala.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
