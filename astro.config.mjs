import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    react(),
    astroI18next(),
    AstroPWA({
      manifest: {
        background_color: '#09090b',
        description: 'Heartstrings (心弦) - Ambient sounds for focus and calm. Create your ideal atmosphere for relaxation, focus, or creativity.',
        dir: 'auto',
        display: 'standalone',
        icons: [
          ...[72, 128, 144, 152, 192, 256, 512].map(size => ({
            sizes: `${size}x${size}`,
            src: `/assets/pwa/${size}.png`,
            type: 'image/png',
          })),
        ],
        lang: 'en',
        name: 'Heartstrings 心弦',
        orientation: 'any',
        scope: '/',
        short_name: 'Heartstrings',
        start_url: '/',
        theme_color: '#09090b',
      },
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*'],
        maximumFileSizeToCacheInBytes: Number.MAX_SAFE_INTEGER,
        navigateFallback: '/',
      },
    }),
  ],
});
