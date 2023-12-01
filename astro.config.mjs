import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.build', // @TODO: replace URL
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    icon({
      include: {
      },
    }),
  ]
});
