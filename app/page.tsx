'use client';

import { useEffect, useState } from 'react';

const works = [
  { n: 4, ratio: 'portrait' }, { n: 2, ratio: 'square' }, { n: 7, ratio: 'portrait' },
  { n: 11, ratio: 'square' }, { n: 13, ratio: 'landscape' }, { n: 5, ratio: 'portrait' },
  { n: 8, ratio: 'portrait' }, { n: 3, ratio: 'landscape' }, { n: 9, ratio: 'portrait' },
  { n: 12, ratio: 'portrait' }, { n: 1, ratio: 'portrait' }, { n: 6, ratio: 'landscape' },
  { n: 10, ratio: 'portrait' }, { n: 14, ratio: 'portrait' },
] as const;

const copy = {
  en: {
    nav: ['Work', 'Our story', 'Contact'], eyebrow: 'A shared studio · Mendoza, Argentina',
    title: 'Two lives, one language of color.',
    intro: 'Jengala is the meeting place of two lifelong makers—an engineer and a teacher—painting the textures, rhythms and quiet intensities they have gathered together.',
    explore: 'Explore the work', selected: 'Selected works', selectedNote: 'Acrylic, texture and intuition on canvas.',
    all: 'The collection', allNote: 'Fourteen gestures from a practice still unfolding.',
    story: 'The long conversation',
    storyLead: 'They met at twenty. Four decades of shared life later, the studio became another way of speaking to each other.',
    storyBody: 'His eye was trained by structures, systems and the discipline of engineering. Hers was shaped by the classroom: attention, patience and the infinite ways people learn to see. In painting, those worlds loosen. Geometry meets instinct. Texture interrupts order. Color says what ordinary language cannot.',
    him: 'The engineer', himText: 'Builds with tension, balance and bold, deliberate marks.',
    her: 'The teacher', herText: 'Listens for feeling, layering color until a quiet story appears.',
    quote: 'We paint not to arrive at an answer, but to keep the conversation open.',
    contactTitle: 'A painting begins a conversation.',
    contactText: 'For available works, studio visits or collaborations, write to us. We answer personally.',
    contactCta: 'Talk with us on WhatsApp', rights: 'Jengala Studio · All works are original acrylic paintings.', close: 'Close',
  },
  es: {
    nav: ['Obra', 'Nuestra historia', 'Contacto'], eyebrow: 'Un taller compartido · Mendoza, Argentina',
    title: 'Dos vidas, un lenguaje de color.',
    intro: 'Jengala es el punto de encuentro de dos creadores de toda la vida—un ingeniero y una docente—que pintan las texturas, los ritmos y las intensidades serenas que han reunido juntos.',
    explore: 'Explorar la obra', selected: 'Obras seleccionadas', selectedNote: 'Acrílico, textura e intuición sobre tela.',
    all: 'La colección', allNote: 'Catorce gestos de una práctica que sigue desplegándose.',
    story: 'La larga conversación',
    storyLead: 'Se conocieron a los veinte. Cuatro décadas de vida compartida después, el taller se convirtió en otra forma de hablarse.',
    storyBody: 'La mirada de él fue entrenada por las estructuras, los sistemas y la disciplina de la ingeniería. La de ella se formó en el aula: la atención, la paciencia y las infinitas maneras en que aprendemos a mirar. En la pintura, esos mundos se liberan. La geometría encuentra al instinto. La textura interrumpe el orden. El color dice lo que el lenguaje cotidiano no puede.',
    him: 'El ingeniero', himText: 'Construye con tensión, equilibrio y trazos audaces, deliberados.',
    her: 'La docente', herText: 'Escucha la emoción y superpone color hasta que aparece una historia serena.',
    quote: 'Pintamos no para llegar a una respuesta, sino para mantener abierta la conversación.',
    contactTitle: 'Una pintura inicia una conversación.',
    contactText: 'Por obras disponibles, visitas al taller o colaboraciones, escribinos. Respondemos personalmente.',
    contactCta: 'Hablemos por WhatsApp', rights: 'Taller Jengala · Todas las obras son pinturas acrílicas originales.', close: 'Cerrar',
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [active, setActive] = useState<number | null>(null);
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jengala home">jengala</a>
        <nav aria-label="Primary navigation"><a href="#work">{t.nav[0]}</a><a href="#story">{t.nav[1]}</a><a href="#contact">{t.nav[2]}</a></nav>
        <div className="language" aria-label="Choose language"><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="intro">{t.intro}</p><a className="text-link" href="#work">{t.explore}<span>↘</span></a></div>
        <figure className="hero-art"><img src="/artworks/painting-04.jpg" alt="Abstract acrylic painting in blue, white, ochre and red" /><figcaption><span>Untitled IV</span><span>Acrylic on canvas</span></figcaption></figure>
      </section>

      <section className="works" id="work">
        <div className="section-heading"><p className="index">01</p><div><h2>{t.selected}</h2><p>{t.selectedNote}</p></div></div>
        <div className="work-grid">{[2, 7, 11, 13].map((n, i) => <button className={`work-card card-${i + 1}`} key={n} onClick={() => setActive(n)}><img src={`/artworks/painting-${String(n).padStart(2, '0')}.jpg`} alt={`Abstract acrylic painting ${i + 1}`} /><span className="caption"><span>Untitled {String(i + 1).padStart(2, '0')}</span><span>2024–26</span></span></button>)}</div>
      </section>

      <section className="story" id="story">
        <div className="section-heading"><p className="index">02</p><div><h2>{t.story}</h2></div></div>
        <div className="story-layout">
          <p className="story-lead">{t.storyLead}</p>
          <div className="story-body"><p>{t.storyBody}</p><div className="duo"><div><span>01</span><h3>{t.him}</h3><p>{t.himText}</p></div><div><span>02</span><h3>{t.her}</h3><p>{t.herText}</p></div></div></div>
        </div>
        <blockquote>“{t.quote}”</blockquote>
      </section>

      <section className="collection">
        <div className="section-heading"><p className="index">03</p><div><h2>{t.all}</h2><p>{t.allNote}</p></div></div>
        <div className="collection-grid">{works.map((work, i) => <button className={`tile ${work.ratio}`} key={work.n} onClick={() => setActive(work.n)} aria-label={`Open artwork ${i + 1}`}><img loading="lazy" src={`/artworks/painting-${String(work.n).padStart(2, '0')}.jpg`} alt={`Jengala abstract acrylic work ${i + 1}`} /><span>{String(i + 1).padStart(2, '0')}</span></button>)}</div>
      </section>

      <section className="contact" id="contact">
        <p className="index">04 · Contact / Contacto</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p>
        <a href="https://wa.me/5492616803437" target="_blank" rel="noreferrer">{t.contactCta}<span>↗</span></a>
      </section>
      <footer><span className="wordmark">jengala</span><p>{t.rights}</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button></footer>

      {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Artwork detail" onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)}>{t.close} ×</button><img onClick={e => e.stopPropagation()} src={`/artworks/painting-${String(active).padStart(2, '0')}.jpg`} alt="Expanded abstract acrylic artwork" /></div>}
    </main>
  );
}
