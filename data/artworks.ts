export type ArtworkStatus =
  | 'available'
  | 'reserved'
  | 'sold'
  | 'not-for-sale';

export interface Artwork {
  id: string;
  slug: string;

  title: {
    en: string;
    es: string;
  };

  year?: number;
  artist?: string;

  medium?: {
    en: string;
    es: string;
  };

  dimensions?: {
    width: number;
    height: number;
    unit: 'cm';
  };

  status: ArtworkStatus;

  image: string;
  alt: {
    en: string;
    es: string;
  };

  description?: {
    en: string;
    es: string;
  };

  featured: boolean;
  order: number;
}