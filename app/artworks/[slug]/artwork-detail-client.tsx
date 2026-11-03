'use client';

import type { Artwork } from '@/data/artworks';
import { useSiteLanguage } from '@/lib/use-site-language';
import styles from './ArtworkPage.module.css';

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0,
  }).format(value);
}

function formatArs(value: number) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'ARS', maximumFractionDigits: 0,
  }).format(value);
}

export default function ArtworkDetailClient({ artwork }: { artwork: Artwork }) {
  const [lang, setLang] = useSiteLanguage('es');
  const other = lang === 'es' ? 'en' : 'es';
  const labels = lang === 'es'
    ? { back: 'Volver a la colección', available: 'Disponible', reserved: 'Reservada', sold: 'Vendida', unavailable: 'No está a la venta', inquiry: 'Consultar disponibilidad y precio', originalPhoto: 'Ver fotografía original', enquire: 'Consultar por WhatsApp' }
    : { back: 'Back to the collection', available: 'Available', reserved: 'Reserved', sold: 'Sold', unavailable: 'Not for sale', inquiry: 'Ask for availability and price', originalPhoto: 'View original photograph', enquire: 'Ask on WhatsApp' };
  const status = {
    available: labels.available,
    reserved: labels.reserved,
    sold: labels.sold,
    'not-for-sale': labels.unavailable,
    inquiry: labels.inquiry,
  }[artwork.status];
  const whatsappText = encodeURIComponent(
    lang === 'es'
      ? `Hola, quisiera consultar por la obra "${artwork.title.es}" (${artwork.id}) de Jengala.`
      : `Hello, I would like to ask about "${artwork.title.en}" (${artwork.id}) by Jengala.`,
  );

  return <main className={styles.page}>
    <header className={styles.header}>
      <a href="/" className={styles.brand} aria-label="Jengala">
        <img src="/jengala-logo-transparent.png" alt="Jengala" />
      </a>
      <a href="/#work" className={styles.backLink}>← {labels.back}</a>
      <div className={styles.language} aria-label="Choose language">
        <button className={lang === 'en' ? styles.active : ''} onClick={() => setLang('en')}>EN</button>
        <span>/</span>
        <button className={lang === 'es' ? styles.active : ''} onClick={() => setLang('es')}>ES</button>
      </div>
    </header>

    <article className={styles.artwork}>
      <section className={styles.media}>
        <img src={artwork.image} alt={`${artwork.title[lang]} - ${artwork.medium[lang]}`} />
      </section>

      <section className={styles.details}>
        <p className={styles.code}>{artwork.id} · {status}</p>
        <h1>{artwork.title[lang]}</h1>
        <p className={styles.englishTitle}>{artwork.title[other]}</p>
        <p className={styles.medium}>{artwork.medium[lang]}</p>

        <div className={styles.descriptionGrid}>
          <div>
            <span>{lang === 'es' ? 'ESPAÑOL' : 'ENGLISH'}</span>
            <p>{artwork.description[lang]}</p>
          </div>
        </div>
        {artwork.originalImage && <a className={styles.originalPhoto} href={artwork.originalImage} target="_blank" rel="noreferrer">{labels.originalPhoto} ↗</a>}

        {artwork.priceUsd !== undefined && artwork.priceArs !== undefined && <div className={styles.priceBlock}>
          <div><span>USD</span><strong>{formatUsd(artwork.priceUsd)}</strong></div>
          <div><span>ARS</span><strong>{formatArs(artwork.priceArs)}</strong></div>
        </div>}

        <a className={styles.whatsapp} href={`https://wa.me/5492616803437?text=${whatsappText}`} target="_blank" rel="noreferrer">
          {labels.enquire}<span>↗</span>
        </a>
        <p className={styles.phone}>+54 9 261 680-3437</p>
      </section>
    </article>
  </main>;
}
