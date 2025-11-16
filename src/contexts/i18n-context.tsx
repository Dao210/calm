import { createContext, useContext, type ReactNode } from 'react';
import i18next, { type TFunction } from 'i18next';

interface I18nContextValue {
  locale: string;
  t: TFunction;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
  translations: Record<string, Record<string, unknown>>;
}

export function I18nProvider({
  children,
  locale,
  translations,
}: I18nProviderProps) {
  // Initialize i18next if not already initialized
  if (!i18next.isInitialized) {
    i18next.init({
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      lng: locale,
      react: {
        useSuspense: false,
      },
      resources: {},
    });
  }

  // Add translations to i18next
  Object.keys(translations).forEach(ns => {
    if (!i18next.hasResourceBundle(locale, ns)) {
      i18next.addResourceBundle(locale, ns, translations[ns]);
    }
  });

  // Change language if needed
  if (i18next.language !== locale) {
    i18next.changeLanguage(locale);
  }

  const value: I18nContextValue = {
    locale,
    t: i18next.t.bind(i18next),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

export function useTranslation(namespace?: string | string[]) {
  const { locale, t: baseT } = useI18n();

  const t: TFunction = (key, options) => {
    if (namespace) {
      const ns = Array.isArray(namespace) ? namespace[0] : namespace;
      return baseT(`${ns}:${key}`, options);
    }
    return baseT(key, options);
  };

  return { locale, t };
}
