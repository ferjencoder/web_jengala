import { artworks } from '@/data/artworks';

import styles from './ArtworkPage.module.css';

type ArtworkPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatArs(value: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);
}

function artworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: ArtworkPageProps) {
  const { slug } = await Promise.resolve(params);
  const artwork = artworkBySlug(slug);

  if (!artwork) {
    return {
      title: 'Obra | Jengala',
    };
  }

  const canonical = `https://www.jengala.ar/artworks/${artwork.slug}`;

  return {
    title: `${artwork.title.es} | Jengala`,
    description: artwork.description.es,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${artwork.title.es} | Jengala`,
      description: artwork.description.es,
      url: canonical,
      siteName: 'Jengala',
      images: [
        {
          url: artwork.image,
          alt: artwork.title.es,
        },
      ],
      type: 'website',
    },
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await Promise.resolve(params);
  const artwork = artworkBySlug(slug);

  if (!artwork) {
    return (
      <main className={styles.notFound}>
        <a href="/" className={styles.brand}>
          <img src="/jengala.svg" alt="Jengala" />
        </a>

        <h1>Obra no encontrada</h1>
        <p>La obra que buscás no existe o ya no está disponible.</p>
        <a href="/#work" className={styles.backLink}>
          Volver a la colección
        </a>
      </main>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hola, quisiera consultar por la obra "${artwork.title.es}" / "${artwork.title.en}" (${artwork.id}) de Jengala.`,
  );

  const whatsappHref = `https://wa.me/5492616803437?text=${whatsappText}`;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.brand} aria-label="Jengala">
          <img src="/jengala.svg" alt="Jengala" />
        </a>

        <a href="/#work" className={styles.backLink}>
          ← Colección / Collection
        </a>
      </header>

      <article className={styles.artwork}>
        <section className={styles.media}>
          <img
            src={artwork.image}
            alt={`${artwork.title.es} - ${artwork.medium.es}`}
          />
        </section>

        <section className={styles.details}>
          <p className={styles.code}>
            {artwork.id} · {artwork.status === 'available' ? 'Disponible / Available' : artwork.status}
          </p>

          <h1>{artwork.title.es}</h1>
          <p className={styles.englishTitle}>{artwork.title.en}</p>

          <p className={styles.medium}>
            {artwork.medium.es} · {artwork.medium.en}
          </p>

          <div className={styles.descriptionGrid}>
            <div>
              <span>ESPAÑOL</span>
              <p>{artwork.description.es}</p>
            </div>

            <div>
              <span>ENGLISH</span>
              <p>{artwork.description.en}</p>
            </div>
          </div>

          <div className={styles.priceBlock}>
            <div>
              <span>USD</span>
              <strong>{formatUsd(artwork.priceUsd)}</strong>
            </div>

            <div>
              <span>ARS</span>
              <strong>{formatArs(artwork.priceArs)}</strong>
            </div>
          </div>

          <a
            className={styles.whatsapp}
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
            <span>↗</span>
          </a>

          <p className={styles.phone}>+54 9 261 680-3437</p>
        </section>
      </article>
    </main>
  );
}
