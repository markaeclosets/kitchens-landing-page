import { defineConfig, passthroughImageService } from "astro/config"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import alpinejs from "@astrojs/alpinejs"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), alpinejs(), sitemap()],
  image: {
    domains: ["res.cloudinary.com"],
    service: passthroughImageService()
  },
  server: {
    host: true
  },
  site: "https://kitchens.markaeclosets.com", // TODO: Update with correct domain
  base: "/kitchens-landing-page"
})
