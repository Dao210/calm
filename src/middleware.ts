import { defineMiddleware } from 'astro/middleware';

const locales = ['en', 'es', 'fr', 'de', 'it', 'ar', 'ja', 'zh'];
const defaultLocale = 'en';

function detectLocale(acceptLanguageHeader: string | null): string {
  if (!acceptLanguageHeader) return defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguageHeader
    .split(',')
    .map(lang => {
      const [code, qValue] = lang.trim().split(';q=');
      const langCode = code.split('-')[0].toLowerCase();
      const quality = qValue ? parseFloat(qValue) : 1.0;
      return { code: langCode, quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first matching locale
  for (const { code } of languages) {
    if (locales.includes(code)) {
      return code;
    }
  }

  return defaultLocale;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { cookies, redirect, url } = context;
  const pathname = url.pathname;

  // Skip middleware for static assets
  if (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_astro/') ||
    pathname.match(
      /\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|otf|css|js)$/,
    )
  ) {
    return next();
  }

  // Check if path already has a locale
  const pathLocale = pathname.split('/')[1];
  if (locales.includes(pathLocale)) {
    // Store locale preference in cookie
    cookies.set('preferredLocale', pathLocale, {
      httpOnly: false,
      maxAge: 31536000, // 1 year
      path: '/',
      sameSite: 'lax',
    });
    return next();
  }

  // Only redirect if we're at the root path and if we have request headers (server mode)
  if ((pathname === '/' || pathname === '') && context.request) {
    try {
      // Check for stored locale preference
      const storedLocale = cookies.get('preferredLocale')?.value;
      if (
        storedLocale &&
        locales.includes(storedLocale) &&
        storedLocale !== defaultLocale
      ) {
        return redirect(`/${storedLocale}`, 302);
      }

      // Detect locale from Accept-Language header (only in server mode)
      const acceptLanguage = context.request.headers?.get('Accept-Language');
      if (acceptLanguage) {
        const detectedLocale = detectLocale(acceptLanguage);

        // Only redirect if detected locale is not the default
        if (detectedLocale !== defaultLocale) {
          return redirect(`/${detectedLocale}`, 302);
        }
      }
    } catch (error) {
      // Fail silently in static mode
      console.log('Language detection skipped in static mode');
    }
  }

  return next();
});
