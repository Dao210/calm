import i18next from 'i18next';

export interface LocaleInfo {
  code: string;
  dir: 'ltr' | 'rtl';
  name: string;
  nativeName: string;
}

export const locales: LocaleInfo[] = [
  { code: 'en', dir: 'ltr', name: 'English', nativeName: 'English' },
  { code: 'es', dir: 'ltr', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', dir: 'ltr', name: 'French', nativeName: 'Français' },
  { code: 'de', dir: 'ltr', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', dir: 'ltr', name: 'Italian', nativeName: 'Italiano' },
  { code: 'ar', dir: 'rtl', name: 'Arabic', nativeName: 'العربية' },
  { code: 'ja', dir: 'ltr', name: 'Japanese', nativeName: '日本語' },
  { code: 'zh', dir: 'ltr', name: 'Chinese', nativeName: '简体中文' },
];

export const defaultLocale = 'en';

export function getLocaleInfo(locale: string): LocaleInfo {
  return (
    locales.find(l => l.code === locale) ||
    locales.find(l => l.code === defaultLocale)!
  );
}

export function isRtlLocale(locale: string): boolean {
  return getLocaleInfo(locale).dir === 'rtl';
}

export function getLocalePath(locale: string, path: string = ''): string {
  if (locale === defaultLocale) {
    return path === '' ? '/' : `/${path}`;
  }
  return path === '' ? `/${locale}` : `/${locale}/${path}`;
}

export async function changeLanguage(locale: string): Promise<void> {
  await i18next.changeLanguage(locale);
}
