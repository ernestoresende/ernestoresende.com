import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'

export default defineConfig({
  integrations: [react(), tailwind(), mdx(), image()]
})
