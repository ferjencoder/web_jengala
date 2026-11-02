import { artworks } from '@/data/artworks';
import ArtworkDetailClient from './artwork-detail-client';
import styles from './ArtworkPage.module.css';

type ArtworkPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

function artworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export async function generateMetadata({ params }: ArtworkPageProps) {
  const { slug } = await Promise.resolve(params);
  const artwork = artworkBySlug(slug);

  if (!artwork) return { title: 'Obra | Jengala' };

  const canonical = `https://www.jengala.ar/artworks/${artwork.slug}`;
  return {
    title: `${artwork.title.es} | Jengala`,
    description: artwork.description.es,
    alternates: { canonical },
    openGraph: {
      title: `${artwork.title.es} | Jengala`,
      description: artwork.description.es,
      url: canonical,
      siteName: 'Jengala',
      images: [{ url: artwork.image, alt: artwork.title.es }],
      type: 'website',
    },
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await Promise.resolve(params);
  const artwork = artworkBySlug(slug);

  if (!artwork) return <main className={styles.notFound}>
    <a href="/" className={styles.brand}><img src="/jengala-logo-transparent.png" alt="Jengala" /></a>
    <h1>Obra no encontrada / Artwork not found</h1>
    <a href="/#work" className={styles.backLink}>Volver a la colección / Back to the collection</a>
  </main>;

  return <ArtworkDetailClient artwork={artwork} />;
}
