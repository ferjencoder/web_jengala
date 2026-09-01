import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jengala-studio.ferjen-work.chatgpt.site'),
  title: 'Jengala — A Shared Studio',
  description: 'Acrylic paintings shaped by a lifetime shared: color, texture and quiet expression.',
  openGraph: {
    title: 'Jengala — A Shared Studio',
    description: 'Two lives, one language of color.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jengala — Two lives, one language of color.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jengala — A Shared Studio',
    description: 'Two lives, one language of color.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
