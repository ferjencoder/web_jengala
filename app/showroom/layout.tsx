import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showroom',
  description: 'Obras de Jengala en distintos ambientes. Explorá 56 escenas de 14 pinturas originales.',
  alternates: { canonical: '/showroom' },
};

export default function ShowroomLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
