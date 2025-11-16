import i18next, { type TFunction } from 'i18next';

// Import all locale files with assertions
import commonEn from '../locales/en/common.json';
import navigationEn from '../locales/en/navigation.json';
import soundsEn from '../locales/en/sounds.json';
import modalsEn from '../locales/en/modals.json';
import seoEn from '../locales/en/seo.json';

import commonEs from '../locales/es/common.json';
import navigationEs from '../locales/es/navigation.json';
import soundsEs from '../locales/es/sounds.json';
import modalsEs from '../locales/es/modals.json';
import seoEs from '../locales/es/seo.json';

import commonZh from '../locales/zh/common.json';
import navigationZh from '../locales/zh/navigation.json';
import soundsZh from '../locales/zh/sounds.json';
import modalsZh from '../locales/zh/modals.json';
import seoZh from '../locales/zh/seo.json';

const resources = {
  ar: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  de: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  en: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  es: {
    common: commonEs,
    modals: modalsEs,
    navigation: navigationEs,
    seo: seoEs,
    sounds: soundsEs,
  },
  fr: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  it: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  ja: {
    common: commonEn,
    modals: modalsEn,
    navigation: navigationEn,
    seo: seoEn,
    sounds: soundsEn,
  },
  zh: {
    common: commonZh,
    modals: modalsZh,
    navigation: navigationZh,
    seo: seoZh,
    sounds: soundsZh,
  },
};

// Create a new i18next instance for a specific locale
export function createI18nInstance(locale: string): typeof i18next {
  const instance = i18next.createInstance();

  instance.init({
    debug: false,
    fallbackLng: 'en',
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    lng: locale,
    resources,
  });

  return instance;
}

// Get translation function for a specific locale and namespace
export function getTranslator(
  locale: string,
  namespace: string = 'common',
): TFunction {
  const instance = createI18nInstance(locale);
  return instance.getFixedT(locale, namespace);
}

// For backward compatibility with client-side code
const i18nextInstance = i18next.createInstance();
i18nextInstance.init({
  debug: false,
  fallbackLng: 'en',
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources,
});

export function initI18n(locale: string) {
  i18nextInstance.changeLanguage(locale);
  i18nextInstance.language = locale;
}

export function getT(namespace: string = 'common') {
  return i18nextInstance.getFixedT(i18nextInstance.language, namespace);
}

export { i18nextInstance as i18next };
