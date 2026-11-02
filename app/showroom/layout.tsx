import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showroom',
  description: 'Obras de Jengala en distintos ambientes. Explorá 60 escenas de 15 pinturas originales.',
  alternates: { canonical: '/showroom' },
};

export default function ShowroomLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
