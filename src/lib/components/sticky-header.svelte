<script lang="ts">
  import { browser } from '$app/environment'
  import type { Snippet } from 'svelte'

  const isStuck = () => (browser ? window.scrollY > 0 : false)

  type Props = {
    stuck?: boolean
    children: Snippet
  }
  let { stuck = $bindable(isStuck()), children }: Props = $props()

  const handleScroll = () => (stuck = isStuck())
</script>

<svelte:window onscroll={handleScroll} />

<div class="sticky-header">
  {@render children()}
</div>

<style lang="scss">
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: var(--ui-z-header);
  }
</style>
