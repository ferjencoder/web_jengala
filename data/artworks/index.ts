export type Language = 'en' | 'es';

export type ArtworkStatus = 'available' | 'reserved' | 'sold' | 'not-for-sale';

export interface Artwork {
  id: string;
  slug: string;
  image: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  medium: Record<Language, string>;
  priceUsd: number;
  priceArs: number;
  status: ArtworkStatus;
}

export const artworks: Artwork[] = [
  {
    id: 'JEN-001',
    slug: 'beneath-the-crust',
    image: '/artworks/artwork-01.webp',
    title: {
      en: 'Beneath the Crust',
      es: 'Bajo la corteza',
    },
    description: {
      en: 'A powerful abstract composition built through dense layers of black, charcoal, copper, and incandescent red. Deeply textured surfaces fracture like cooled earth, while streams of color move through the work like heat beneath a dark crust. The painting evokes transformation, pressure, and the persistent energy hidden within matter.',
      es: 'Una potente composición abstracta construida con densas capas de negro, carbón, cobre y rojo incandescente. Las superficies profundamente texturadas se fragmentan como tierra enfriada, mientras corrientes de color atraviesan la obra como calor bajo una corteza oscura. La pintura evoca transformación, presión y la energía persistente que permanece oculta en la materia.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 750,
    priceArs: 1150000,
    status: 'available',
  },
  {
    id: 'JEN-002',
    slug: 'resonance',
    image: '/artworks/artwork-02.webp',
    title: {
      en: 'Resonance',
      es: 'Resonancia',
    },
    description: {
      en: 'A vibrant abstract composition where color accumulates in energetic layers. Reds, yellows, greens, pale blues, and deep ultramarine collide across the surface, creating a dynamic field that shifts between turbulence and harmony. Dense gestures and fragmented marks suggest movement, memory, and the spontaneous rhythm of emotion.',
      es: 'Una vibrante composición abstracta donde el color se acumula en capas llenas de energía. Rojos, amarillos, verdes, celestes y azules ultramarinos profundos se encuentran sobre la superficie, creando un campo dinámico que oscila entre la agitación y la armonía. Los gestos densos y las marcas fragmentadas sugieren movimiento, memoria y el ritmo espontáneo de la emoción.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 650,
    priceArs: 1000000,
    status: 'available',
  },
  {
    id: 'JEN-003',
    slug: 'coordinates-of-silence',
    image: '/artworks/artwork-03.webp',
    title: {
      en: 'Coordinates of Silence',
      es: 'Coordenadas del silencio',
    },
    description: {
      en: 'A balanced abstract composition where structure and atmosphere coexist. Fine black lines establish an architectural rhythm across fields of gray, white, and soft blue, while vivid ochre and cobalt forms introduce warmth, depth, and tension. Its layered textures suggest a meeting between precision and intuition - order emerging gently from uncertainty.',
      es: 'Una composición abstracta equilibrada donde conviven la estructura y la atmósfera. Finas líneas negras establecen un ritmo arquitectónico sobre campos de gris, blanco y azul suave, mientras formas intensas en ocre y azul cobalto aportan calidez, profundidad y tensión. Sus texturas superpuestas sugieren un encuentro entre precisión e intuición: el orden emergiendo suavemente de la incertidumbre.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 700,
    priceArs: 1070000,
    status: 'available',
  },
  {
    id: 'JEN-004',
    slug: 'shelter',
    image: '/artworks/artwork-04.webp',
    title: {
      en: 'Shelter',
      es: 'Refugio',
    },
    description: {
      en: 'Two figures meet in a quiet embrace at the center of a richly textured abstract space. Their cobalt-blue silhouettes form a shared, protected interior amid vertical fields of red, ochre, white, and yellow. Contrasting colors and tactile surfaces transform the intimate gesture into a reflection on companionship, shelter, and the strength found in closeness.',
      es: 'Dos figuras se encuentran en un abrazo sereno en el centro de un espacio abstracto profundamente texturado. Sus siluetas en azul cobalto forman un interior compartido y protegido entre campos verticales de rojo, ocre, blanco y amarillo. Los colores contrastantes y las superficies táctiles transforman el gesto íntimo en una reflexión sobre la compañía, el refugio y la fuerza que nace de la cercanía.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 850,
    priceArs: 1300000,
    status: 'available',
  },
  {
    id: 'JEN-005',
    slug: 'vestiges',
    image: '/artworks/artwork-05.webp',
    title: {
      en: 'Vestiges',
      es: 'Vestigios',
    },
    description: {
      en: 'A richly textured abstract diptych where ochre forms emerge from an earthy field of rust, terracotta, and deep brown. Incised lines, layered surfaces, and irregular contours create a sense of archaeological discovery - as though fragments of memory were being uncovered from the material itself. The central division introduces a quiet tension while allowing both panels to remain in visual conversation.',
      es: 'Un díptico abstracto de rica textura, donde formas ocres emergen de un campo terroso de óxido, terracota y marrón profundo. Las líneas incisas, las superficies superpuestas y los contornos irregulares evocan un descubrimiento arqueológico, como si fragmentos de la memoria fueran revelándose desde la propia materia. La división central introduce una tensión serena y mantiene ambos paneles en diálogo visual.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 900,
    priceArs: 1380000,
    status: 'available',
  },
  {
    id: 'JEN-006',
    slug: 'city-pulse',
    image: '/artworks/artwork-06.webp',
    title: {
      en: 'City Pulse',
      es: 'Pulso de ciudad',
    },
    description: {
      en: 'A vibrant abstract composition built from overlapping fields of saturated color. Rectangular gestures, delicate linear patterns, and clusters of rhythmic dots create a lively visual architecture, while the open white ground gives each element space to breathe. The interplay of structure, texture, and spontaneity evokes a colorful cityscape shaped by movement and joyful energy.',
      es: 'Una vibrante composición abstracta construida a partir de campos superpuestos de color saturado. Los gestos rectangulares, los delicados patrones lineales y los conjuntos rítmicos de puntos crean una arquitectura visual dinámica, mientras el fondo blanco permite que cada elemento respire. El diálogo entre estructura, textura y espontaneidad evoca un paisaje urbano lleno de movimiento y energía alegre.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 700,
    priceArs: 1070000,
    status: 'available',
  },
  {
    id: 'JEN-007',
    slug: 'convergence',
    image: '/artworks/artwork-07.webp',
    title: {
      en: 'Convergence',
      es: 'Convergencia',
    },
    description: {
      en: 'Two opposing forms converge in a composition charged with movement and tension. Their jagged, wing-like contours emerge through sculptural layers of white and burnt orange, set against fields of ochre, pale gray, and charcoal. The pronounced relief gives the work a physical presence, evoking an encounter between light and shadow, fragility and strength.',
      es: 'Dos formas opuestas convergen en una composición cargada de movimiento y tensión. Sus contornos irregulares, semejantes a alas, emergen mediante capas escultóricas de blanco y naranja quemado, sobre campos de ocre, gris pálido y carbón. El marcado relieve otorga a la obra una presencia física y evoca un encuentro entre luz y sombra, fragilidad y fuerza.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 850,
    priceArs: 1300000,
    status: 'available',
  },
  {
    id: 'JEN-008',
    slug: 'toward-the-light',
    image: '/artworks/artwork-08.webp',
    title: {
      en: 'Toward the Light',
      es: 'Hacia la luz',
    },
    description: {
      en: 'A radiant abstract composition unfolds through a gradual passage from deep crimson and fiery orange to golden yellow and luminous white. Thick palette-knife gestures give the surface a vivid physical presence, while scattered dark accents and exposed underlayers interrupt the warmth with subtle moments of tension. The work evokes transformation - an energetic movement from intensity toward light.',
      es: 'Una radiante composición abstracta se despliega mediante una transición gradual desde el carmesí profundo y el naranja encendido hasta el amarillo dorado y el blanco luminoso. Los densos gestos de espátula otorgan a la superficie una intensa presencia física, mientras pequeños acentos oscuros y capas parcialmente expuestas interrumpen la calidez con sutiles momentos de tensión. La obra evoca una transformación: un movimiento enérgico desde la intensidad hacia la luz.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 650,
    priceArs: 1000000,
    status: 'available',
  },
  {
    id: 'JEN-009',
    slug: 'suspended-structure',
    image: '/artworks/artwork-09.webp',
    title: {
      en: 'Suspended Structure',
      es: 'Estructura suspendida',
    },
    description: {
      en: 'A dynamic abstract composition where bold geometric structures emerge from atmospheric fields of red, charcoal, and warm gray. Raised blocks of blue, yellow, silver, violet, and green intersect with slender lines and textured edges, creating a delicate balance between order and spontaneity. The layered relief lends depth and rhythm to the work, suggesting an architectural space suspended between precision and emotion.',
      es: 'Una composición abstracta y dinámica donde audaces estructuras geométricas emergen de campos atmosféricos de rojo, carbón y gris cálido. Bloques elevados de azul, amarillo, plata, violeta y verde se cruzan con líneas delgadas y bordes texturados, creando un delicado equilibrio entre orden y espontaneidad. El relieve en capas aporta profundidad y ritmo a la obra, evocando un espacio arquitectónico suspendido entre la precisión y la emoción.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 750,
    priceArs: 1150000,
    status: 'available',
  },
  {
    id: 'JEN-010',
    slug: 'urban-signal',
    image: '/artworks/artwork-10.webp',
    title: {
      en: 'Urban Signal',
      es: 'Señal urbana',
    },
    description: {
      en: 'A vibrant abstract composition where bold blocks of color gather into a compact, architectural structure. Deep navy and black provide visual weight, while teal, green, red, and orange introduce energy and contrast. Fine intersecting lines and repeated rhythmic marks extend into the surrounding white space, creating a delicate tension between density and openness, spontaneity and order.',
      es: 'Una vibrante composición abstracta donde intensos bloques de color se reúnen en una estructura compacta y arquitectónica. El azul marino profundo y el negro aportan peso visual, mientras el turquesa, el verde, el rojo y el naranja introducen energía y contraste. Finas líneas entrecruzadas y marcas rítmicas repetidas se extienden hacia el espacio blanco, creando una delicada tensión entre densidad y apertura, espontaneidad y orden.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 600,
    priceArs: 920000,
    status: 'available',
  },
  {
    id: 'JEN-011',
    slug: 'palimpsest',
    image: '/artworks/artwork-11.webp',
    title: {
      en: 'Palimpsest',
      es: 'Palimpsesto',
    },
    description: {
      en: 'A richly layered abstract composition in which vivid fields of red, blue, green, ochre, mint, and white interlock with broad black passages. Scraped surfaces, fractured edges, and energetic marks reveal traces of the creative process, giving the work a sense of movement and accumulated memory. Its dense visual rhythm balances spontaneity with an underlying architectural structure.',
      es: 'Una composición abstracta de múltiples capas, donde intensos campos de rojo, azul, verde, ocre, menta y blanco se entrelazan con amplios pasajes negros. Las superficies raspadas, los bordes fragmentados y las marcas enérgicas revelan huellas del proceso creativo, otorgando a la obra una sensación de movimiento y memoria acumulada. Su denso ritmo visual equilibra la espontaneidad con una estructura arquitectónica subyacente.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 800,
    priceArs: 1230000,
    status: 'available',
  },
  {
    id: 'JEN-012',
    slug: 'city-of-traces',
    image: '/artworks/artwork-12.webp',
    title: {
      en: 'City of Traces',
      es: 'Ciudad de huellas',
    },
    description: {
      en: 'A contemplative abstract composition organized around a central, architectural structure. Layers of white, ochre, rust, red, and black intersect through vertical and horizontal gestures, creating the impression of an imagined city or fragmented construction. Scraped surfaces, delicate drips, and pronounced impasto introduce depth and history, while the warm sand-colored ground provides stillness and space.',
      es: 'Una composición abstracta y contemplativa organizada alrededor de una estructura central de carácter arquitectónico. Capas de blanco, ocre, óxido, rojo y negro se entrecruzan mediante gestos verticales y horizontales, evocando una ciudad imaginaria o una construcción fragmentada. Las superficies raspadas, los delicados goteos y el marcado empaste aportan profundidad e historia, mientras el fondo cálido color arena ofrece quietud y amplitud.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 700,
    priceArs: 1070000,
    status: 'available',
  },
  {
    id: 'JEN-013',
    slug: 'distant-light',
    image: '/artworks/artwork-13.webp',
    title: {
      en: 'Distant Light',
      es: 'Luz distante',
    },
    description: {
      en: 'A serene abstract landscape shaped by horizontal bands of gray, white, and charcoal, interrupted by a luminous amber passage near the center. A dark vertical form meets the horizon and continues downward through a sequence of fragmented, reflection-like marks. Atmospheric brushwork and restrained color create a contemplative space suspended between architecture, water, and distant light.',
      es: 'Un sereno paisaje abstracto construido mediante franjas horizontales de gris, blanco y carbón, interrumpidas por un luminoso pasaje ámbar cerca del centro. Una forma vertical oscura se encuentra con el horizonte y continúa hacia abajo a través de una secuencia de marcas fragmentadas semejantes a un reflejo. La pincelada atmosférica y el color contenido crean un espacio contemplativo suspendido entre arquitectura, agua y luz distante.',
    },
    medium: {
      en: 'Acrylic on wood panel',
      es: 'Acrílico sobre tabla de madera',
    },
    priceUsd: 800,
    priceArs: 1230000,
    status: 'available',
  },
];

export const heroArtworkId = 'JEN-004';
export const featuredArtworkIds = ['JEN-004', 'JEN-005', 'JEN-007', 'JEN-011'];

export function getArtwork(id: string) {
  return artworks.find((artwork) => artwork.id === id);
}
