<script lang="ts">
  import Navigation from './navigation.svelte'
  import { SiteFooter } from '$lib/components'

  import type { Snippet } from 'svelte'

  let { children }: { children: Snippet } = $props()
</script>

<Navigation />
<main class="markdown">
  <div class="container-md">
    {@render children()}
  </div>
</main>
<SiteFooter />

<style lang="scss">
  main {
    flex-grow: 1;
    padding: 4rem var(--ui-page-inline-padding);
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
  }
</style>
