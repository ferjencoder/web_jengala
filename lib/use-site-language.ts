import { useEffect, useState } from 'react';

export type SiteLanguage = 'en' | 'es';

const STORAGE_KEY = 'jengala-language';
const spanishRegions = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GT',
  'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
]);
const spanishTimeZones = /^(America\/(Argentina\/|Buenos_Aires$|Asuncion$|Bogota$|Caracas$|Costa_Rica$|Guatemala$|Guayaquil$|Havana$|La_Paz$|Lima$|Managua$|Merida$|Mexico_City$|Monterrey$|Montevideo$|Panama$|Santiago$|Santo_Domingo$|Tegucigalpa$)|Europe\/(Madrid|Canary)$)/;

function detectLanguage(): SiteLanguage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    // Private browsing may block storage; device settings still work.
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (spanishTimeZones.test(timeZone)) return 'es';

  const locale = navigator.languages?.[0] || navigator.language || 'en';
  try {
    const parsed = new Intl.Locale(locale);
    if (parsed.language === 'es' || spanishRegions.has(parsed.region || '')) return 'es';
  } catch {
    if (locale.toLowerCase().startsWith('es')) return 'es';
  }

  return 'en';
}

export function useSiteLanguage(initialLanguage: SiteLanguage) {
  const [language, setLanguage] = useState<SiteLanguage>(initialLanguage);

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const chooseLanguage = (next: SiteLanguage) => {
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage is optional. */ }
    setLanguage(next);
  };

  return [language, chooseLanguage] as const;
}
