import { I18nextProvider } from 'react-i18next';
import { useEffect, useState, type ReactNode } from 'react';
import { createI18nInstance } from '@/lib/i18n-init';

interface I18nProviderProps {
  children: ReactNode;
  locale?: string;
}

export function I18nProvider({ children, locale = 'en' }: I18nProviderProps) {
  const [i18n] = useState(() => createI18nInstance(locale));

  useEffect(() => {
    // Update language if locale prop changes
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
