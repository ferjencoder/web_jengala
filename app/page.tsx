'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  artworks,
  featuredArtworkIds,
  getArtwork,
  heroArtworkId,
  type Artwork,
  type Language,
} from '@/data/artworks';

const copy = {
  en: {
    nav: ['Work', 'Our story', 'Contact'],
    eyebrow: 'A shared studio · Mendoza, Argentina',
    title: 'Two lives, one language of color.',
    intro:
      'Jengala is the meeting place of two lifelong makers, Daniel Jensen, an engineer, and Maria Ester Fragala, a teacher, painting the textures, rhythms and quiet intensities they have gathered together.',
    explore: 'Explore the work',
    selected: 'Selected works',
    selectedNote: 'Acrylic, texture and intuition on wood panel.',
    all: 'The collection',
    allNote: 'Thirteen original works from a practice still unfolding.',
    story: 'The long conversation',
    storyLead:
      'Daniel and Maria Ester met at twenty. Four decades of shared life later, the studio became another way of speaking to each other.',
    storyBody:
      'His eye was trained by structures, systems and the discipline of engineering. Hers was shaped by the classroom: attention, patience and the infinite ways people learn to see. In painting, those worlds loosen. Geometry meets instinct. Texture interrupts order. Color says what ordinary language cannot.',
    him: 'Daniel Jensen',
    himText: 'Engineer. Builds with tension, balance and bold, deliberate marks.',
    her: 'Maria Ester Fragala',
    herText: 'Teacher. Listens for feeling, layering color until a quiet story appears.',
    quote: 'We paint not to arrive at an answer, but to keep the conversation open.',
    contactTitle: 'A painting begins a conversation.',
    contactText:
      'For available works, studio visits or collaborations, write to us. We answer personally.',
    contactCta: 'Talk with us on WhatsApp',
    rights:
      'Jengala Studio · Daniel Jensen & Maria Ester Fragala · Original acrylic paintings on wood panel.',
    close: 'Close',
    available: 'Available',
    price: 'Price',
    enquire: 'Ask about this work',
    artworkDetail: 'Artwork detail',
  },
  es: {
    nav: ['Obra', 'Nuestra historia', 'Contacto'],
    eyebrow: 'Un taller compartido · Mendoza, Argentina',
    title: 'Dos vidas, un lenguaje de color.',
    intro:
      'Jengala es el punto de encuentro de dos creadores de toda la vida: Daniel Jensen, ingeniero, y Maria Ester Fragala, docente, que pintan las texturas, los ritmos y las intensidades serenas que han reunido a lo largo de una vida compartida.',
    explore: 'Explorar la obra',
    selected: 'Obras seleccionadas',
    selectedNote: 'Acrílico, textura e intuición sobre tabla de madera.',
    all: 'La colección',
    allNote: 'Trece obras originales de una práctica que sigue desplegándose.',
    story: 'La larga conversación',
    storyLead:
      'Daniel y Maria Ester se conocieron a los veinte. Cuatro décadas de vida compartida después, el taller se convirtió en otra forma de hablarse.',
    storyBody:
      'La mirada de él fue entrenada por las estructuras, los sistemas y la disciplina de la ingeniería. La de ella se formó en el aula: la atención, la paciencia y las infinitas maneras en que aprendemos a mirar. En la pintura, esos mundos se liberan. La geometría encuentra al instinto. La textura interrumpe el orden. El color dice lo que el lenguaje cotidiano no puede.',
    him: 'Daniel Jensen',
    himText: 'Ingeniero. Construye con tensión, equilibrio y trazos audaces, deliberados.',
    her: 'Maria Ester Fragala',
    herText: 'Docente. Escucha la emoción y superpone color hasta que aparece una historia serena.',
    quote: 'Pintamos no para llegar a una respuesta, sino para mantener abierta la conversación.',
    contactTitle: 'Una pintura inicia una conversación.',
    contactText:
      'Por obras disponibles, visitas al taller o colaboraciones, escribinos. Respondemos personalmente.',
    contactCta: 'Hablemos por WhatsApp',
    rights:
      'Taller Jengala · Daniel Jensen & Maria Ester Fragala · Pinturas acrílicas originales sobre tabla de madera.',
    close: 'Cerrar',
    available: 'Disponible',
    price: 'Precio',
    enquire: 'Consultar por esta obra',
    artworkDetail: 'Detalle de la obra',
  },
} as const;

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

function artworkAlt(artwork: Artwork, lang: Language) {
  return `${artwork.title[lang]} - ${artwork.medium[lang]}`;
}

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [activeId, setActiveId] = useState<string | null>(null);

  const t = copy[lang];
  const heroArtwork = getArtwork(heroArtworkId) ?? artworks[0];
  const featuredArtworks = useMemo(
    () =>
      featuredArtworkIds
        .map((id) => getArtwork(id))
        .filter((artwork): artwork is Artwork => Boolean(artwork)),
    [],
  );
  const activeArtwork = activeId ? getArtwork(activeId) ?? null : null;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveId(null);
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeArtwork ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeArtwork]);

  const openArtwork = (artwork: Artwork) => setActiveId(artwork.id);

  const whatsappHref = (artwork: Artwork) => {
    const message =
      lang === 'es'
        ? `Hola, quisiera consultar por la obra "${artwork.title.es}" (${artwork.id}).`
        : `Hello, I would like to ask about "${artwork.title.en}" (${artwork.id}).`;

    return `https://wa.me/5492616803437?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand-logo" href="#top" aria-label="Jengala home">
          <img src="/jengala.svg" alt="Jengala" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">{t.nav[0]}</a>
          <a href="#story">{t.nav[1]}</a>
          <a href="#contact">{t.nav[2]}</a>
        </nav>
        <div className="language" aria-label="Choose language">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
          <span>/</span>
          <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>
            ES
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="intro">{t.intro}</p>
          <a className="text-link" href="#work">
            {t.explore}
            <span>↘</span>
          </a>
        </div>

        <figure className="hero-art">
          <button
            className="artwork-image-button"
            onClick={() => openArtwork(heroArtwork)}
            aria-label={`${t.artworkDetail}: ${heroArtwork.title[lang]}`}
          >
            <img src={heroArtwork.image} alt={artworkAlt(heroArtwork, lang)} />
          </button>
          <figcaption>
            <span>{heroArtwork.title[lang]}</span>
            <span>{formatUsd(heroArtwork.priceUsd)}</span>
          </figcaption>
        </figure>
      </section>

      <section className="works" id="work">
        <div className="section-heading">
          <p className="index">01</p>
          <div>
            <h2>{t.selected}</h2>
            <p>{t.selectedNote}</p>
          </div>
        </div>

        <div className="work-grid">
          {featuredArtworks.map((artwork, index) => (
            <button
              className={`work-card card-${index + 1}`}
              key={artwork.id}
              onClick={() => openArtwork(artwork)}
            >
              <img src={artwork.image} alt={artworkAlt(artwork, lang)} />
              <span className="caption">
                <span>{artwork.title[lang]}</span>
                <span>{formatUsd(artwork.priceUsd)}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="section-heading">
          <p className="index">02</p>
          <div>
            <h2>{t.story}</h2>
          </div>
        </div>
        <div className="story-layout">
          <p className="story-lead">{t.storyLead}</p>
          <div className="story-body">
            <p>{t.storyBody}</p>
            <div className="duo">
              <div>
                <span>01</span>
                <h3>{t.him}</h3>
                <p>{t.himText}</p>
              </div>
              <div>
                <span>02</span>
                <h3>{t.her}</h3>
                <p>{t.herText}</p>
              </div>
            </div>
          </div>
        </div>
        <blockquote>“{t.quote}”</blockquote>
      </section>

      <section className="collection">
        <div className="section-heading">
          <p className="index">03</p>
          <div>
            <h2>{t.all}</h2>
            <p>{t.allNote}</p>
          </div>
        </div>

        <div className="collection-grid">
          {artworks.map((artwork, index) => (
            <button
              className="tile"
              key={artwork.id}
              onClick={() => openArtwork(artwork)}
              aria-label={`${t.artworkDetail}: ${artwork.title[lang]}`}
            >
              <span className="tile-image">
                <img loading="lazy" src={artwork.image} alt={artworkAlt(artwork, lang)} />
                <span className="tile-number">{String(index + 1).padStart(2, '0')}</span>
              </span>
              <span className="tile-caption">
                <span>{artwork.title[lang]}</span>
                <span>{formatUsd(artwork.priceUsd)}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="index">04 · Contact / Contacto</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a href="https://wa.me/5492616803437" target="_blank" rel="noreferrer">
          {t.contactCta}
          <span>↗</span>
        </a>
      </section>

      <footer>
        <a className="footer-logo" href="#top" aria-label="Jengala">
          <img src="/jengala.svg" alt="Jengala" />
        </a>
        <p>{t.rights}</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      </footer>

      {activeArtwork && (
        <div
          className="artwork-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.artworkDetail}: ${activeArtwork.title[lang]}`}
          onClick={() => setActiveId(null)}
        >
          <article className="artwork-detail" onClick={(event) => event.stopPropagation()}>
            <button className="artwork-detail-close" onClick={() => setActiveId(null)}>
              {t.close} ×
            </button>

            <div className="artwork-detail-media">
              <img src={activeArtwork.image} alt={artworkAlt(activeArtwork, lang)} />
            </div>

            <div className="artwork-detail-copy">
              <p className="artwork-code">
                {activeArtwork.id} · {t.available}
              </p>
              <h2>{activeArtwork.title[lang]}</h2>
              <p className="artwork-medium">{activeArtwork.medium[lang]}</p>
              <p className="artwork-description">{activeArtwork.description[lang]}</p>

              <div className="artwork-prices" aria-label={t.price}>
                <div>
                  <span>USD</span>
                  <strong>{formatUsd(activeArtwork.priceUsd)}</strong>
                </div>
                <div>
                  <span>ARS</span>
                  <strong>{formatArs(activeArtwork.priceArs)}</strong>
                </div>
              </div>

              <a
                className="artwork-enquire"
                href={whatsappHref(activeArtwork)}
                target="_blank"
                rel="noreferrer"
              >
                {t.enquire}
                <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
