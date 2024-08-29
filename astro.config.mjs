import { defineConfig, passthroughImageService } from "astro/config"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"

import alpinejs from "@astrojs/alpinejs"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), alpinejs()],
  image: {
    domains: ["res.cloudinary.com"],
    service: passthroughImageService()
  },
  server: {
    host: true
  },
  site: "https://markaeclosets.github.io",
  base: "/kitchens-landing-page"
})
