# Marcos Rigoli's personal website

Live site: https://rigoli.dev

This was made using the amazing [Sveltekit](https://svelte.dev/docs/kit/) framework.

Take a look at the [Deepwiki analysis](https://deepwiki.com/rijuma/rigoli.dev) if you want a quick overview.

## Running

If you want it to try it on your local environment, just clone this repository and install dependencies:

```bash
npm install
```

Then run locally as:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Docker config

The `Dockerfile` and `compose.yml` are set to be run on a server running [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy).

## Notes

> This repo is setup to run in a Node server. To deploy your app in a different environment you'd probably need to use a different [adapter](https://svelte.dev/docs/kit/adapters).

> [!IMPORTANT]
> You can freely use or clone this repository as inspiration to build your own personal website. If you do clone this repo, please make sure to remove any of my personal information.

# Integrations

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/rijuma/rigoli.dev)
