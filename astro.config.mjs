// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://alicantefrontend.es',
  integrations: [icon()],
  redirects: {
    '/cfp': {
      status: 302,
      destination: 'https://forms.gle/7hH1oyibwH1YpRc6A'
    },
    '/discord': {
      status: 302,
      destination: 'https://discord.gg/RTsac4dkmg'
    },
    '/telegram': {
      status: 302,
      destination: 'https://t.me/alicantefrontend'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});