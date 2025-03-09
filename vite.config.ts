import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'url'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

// Add package version to the env vars
const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)
process.env.PUBLIC_APP_VERSION = pkg.version

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use '$src/styles/_preprocess/index' as *;
        `,
      },
    },
  },
})
