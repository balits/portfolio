// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://balits.computer",
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    // name: "Source Code Pro",
    name: "DejaVu Mono",
    cssVariable: "--monospaced-font",
  }]
});
