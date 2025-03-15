import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import urls from "rehype-urls"
import slug from "rehype-slug"

const checkUrl = (url, node) => {


  if (node.tagName === "a") {
    node.properties.class = "link-external"

    if (!['#', '/'].some(char => url.href.startsWith(char))) {
      // Open external links in new tab
      node.properties.target = "_blank"
      // Fix a security concern with offsite links
      // See: https://web.dev/external-anchors-use-rel-noopener/
      node.properties.rel = "external noopener"
    }
  }
}

/** @type {import('mdsvex').msdvexOptions} */
const msdvexOptions = {
  extensions: ['mdx'],
  rehypePlugins: [
    [urls, checkUrl], // adds rel and target to <a> elements
    slug, // adds slug to <h1>-<h6> elements
  ]
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
