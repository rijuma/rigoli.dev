import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('mdsvex').msdvexOptions} */
const msdvexOptions = {
  extensions: ['mdx'],
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

  extensions: ['.svelte', '.mdx'],
}

export default config
