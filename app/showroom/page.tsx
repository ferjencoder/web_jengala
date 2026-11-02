'use client';

import { useEffect, useState } from 'react';
import { artworks } from '@/data/artworks';
import './showroom.css';

const roomArtworks = artworks.filter(artwork => Number(artwork.id.slice(-3)) <= 15);

const imagePath = (artwork: number, scene: number) =>
  `/showroom-images/JEN-${String(artwork + 1).padStart(3, '0')}-${String(scene + 1).padStart(2, '0')}.webp`;

export default function Showroom() {
  const [active, setActive] = useState<{ artwork: number; scene: number } | null>(null);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = lang === 'es' ? {
    back: 'Volver al inicio', eyebrow: 'Jengala · Galería de ambientes', title: 'Arte en espacios vividos.',
    intro: 'Una mirada a nuestras obras en distintos ambientes. Explorá las escenas y descubrí cómo cada pintura transforma un espacio.',
    count: '15 obras · 60 ambientes', scene: 'Ambiente', close: 'Cerrar',
    note: 'Imágenes de ambientación ilustrativas. Para conocer cada obra, consultanos por sus fotografías y detalles reales.',
    contact: 'Consultar por una obra', previous: 'Ambiente anterior', next: 'Ambiente siguiente',
  } : {
    back: 'Back to home', eyebrow: 'Jengala · Room gallery', title: 'Art in lived spaces.',
    intro: 'See our works in different interiors. Explore the scenes and discover how each painting changes a space.',
    count: '15 works · 60 rooms', scene: 'Room', close: 'Close',
    note: 'These room images are illustrative. Ask us for actual photographs and details of each painting.',
    contact: 'Ask about a painting', previous: 'Previous room', next: 'Next room',
  };

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowLeft') setActive(current => current && ({ ...current, scene: (current.scene + 3) % 4 }));
      if (event.key === 'ArrowRight') setActive(current => current && ({ ...current, scene: (current.scene + 1) % 4 }));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return <main className="showroom">
    <header className="showroom-header">
      <a className="showroom-wordmark" href="/" aria-label="Jengala"><img src="/jengala-logo-transparent.png" alt="Jengala" /></a>
      <a className="showroom-back" href="/">← {t.back}</a>
      <div className="showroom-language" aria-label="Language">
        <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
        <span>/</span>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
    </header>

    <div className="showroom-intro">
      <p className="showroom-eyebrow">{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <div className="showroom-intro-bottom"><p>{t.intro}</p><span>{t.count}</span></div>
    </div>

    <div className="showroom-gallery">
      {roomArtworks.map((item, artwork) => <section className="showroom-artwork" key={item.id} aria-labelledby={`artwork-${artwork}`}>
        <div className="showroom-artwork-heading">
          <span>{String(artwork + 1).padStart(2, '0')} / 15</span>
          <h2 id={`artwork-${artwork}`}>{item.title[lang]}</h2>
        </div>
        <div className="showroom-scenes">
          {[0, 1, 2, 3].map(scene => <button
            className="showroom-scene" key={scene}
            onClick={() => setActive({ artwork, scene })}
            aria-label={`${item.title[lang]} · ${t.scene} ${scene + 1}`}
          >
            <img src={imagePath(artwork, scene)} alt={`${item.title[lang]} · ${t.scene} ${scene + 1}`} loading="lazy" width="1000" height="1000" />
            <span>{String(scene + 1).padStart(2, '0')}</span>
          </button>)}
        </div>
      </section>)}
    </div>

    <footer className="showroom-footer">
      <p>{t.note}</p>
      <a href="https://wa.me/5492616803437" target="_blank" rel="noreferrer">{t.contact} ↗</a>
      <span>© Jengala</span>
    </footer>

    {active && <div className="showroom-lightbox" role="dialog" aria-modal="true" aria-label={`${roomArtworks[active.artwork].title[lang]} · ${t.scene} ${active.scene + 1}`} onClick={() => setActive(null)}>
      <button className="showroom-lightbox-close" onClick={() => setActive(null)} aria-label={t.close}>{t.close} ×</button>
      <button className="showroom-lightbox-prev" onClick={event => { event.stopPropagation(); setActive({ ...active, scene: (active.scene + 3) % 4 }); }} aria-label={t.previous}>←</button>
      <figure onClick={event => event.stopPropagation()}>
        <img src={imagePath(active.artwork, active.scene)} alt={`${roomArtworks[active.artwork].title[lang]} · ${t.scene} ${active.scene + 1}`} width="1000" height="1000" />
        <figcaption><span>{roomArtworks[active.artwork].title[lang]}</span><span>{active.scene + 1} / 4</span></figcaption>
      </figure>
      <button className="showroom-lightbox-next" onClick={event => { event.stopPropagation(); setActive({ ...active, scene: (active.scene + 1) % 4 }); }} aria-label={t.next}>→</button>
    </div>}
  </main>;
}
