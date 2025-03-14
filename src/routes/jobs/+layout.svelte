<script lang="ts">
  import type { Snippet } from 'svelte'
  import Navigation from './navigation.svelte'

  let { children }: { children: Snippet } = $props()
</script>

<Navigation />
<main class="markdown">
  <div class="container-md">
    {@render children()}
  </div>
</main>

<style lang="scss">
  main {
    flex-grow: 1;
    padding: 6rem var(--ui-page-inline-padding) var(--ui-page-block-padding);
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
  }
</style>
