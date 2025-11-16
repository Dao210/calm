/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  flatRoutes: true,
  i18next: {
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    load: 'languageOnly',
    ns: ['common', 'navigation', 'sounds', 'modals', 'seo'],
    react: {
      useSuspense: false,
    },
  },
  locales: ['en', 'es', 'fr', 'de', 'it', 'ar', 'ja', 'zh'],
  namespaces: ['common', 'navigation', 'sounds', 'modals', 'seo'],
  routes: {},
  showDefaultLocale: false,
};
