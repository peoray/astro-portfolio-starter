import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
  ],
  experimental: {
    assets: true,
  },
})
