<script lang="ts">
  import type { Snippet } from 'svelte'
  import Navigation from './navigation.svelte'

  let { children }: { children: Snippet } = $props()
</script>

<Navigation />
<main class="markdown">
  {@render children()}
</main>

<style lang="scss">
  main {
    flex-grow: 1;
    padding: 6rem var(--page-inline-padding) var(--page-block-padding);
    max-width: var(--page-max-width);
    width: 100%;
    margin-inline: auto;
  }
</style>
