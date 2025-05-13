// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    clerk({
      publishableKey: process.env.PUBLIC_CLERK_PUBLISHABLE_KEY,
    }),
  ],
});
