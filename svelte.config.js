import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('mdsvex').msdvexOptions} */
const msdvexOptions = {
  extensions: ['md'],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex(msdvexOptions)],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib',
      $src: './src',
    },
  },

  extensions: ['.svelte', '.md'],
}

export default config
