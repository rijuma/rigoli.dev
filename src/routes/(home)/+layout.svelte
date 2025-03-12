<script lang="ts">
  import { SiteFooter } from '$lib/components'

  let { children } = $props()
</script>

<main>
  {@render children()}
</main>
<SiteFooter />

<style lang="scss">
  main {
    flex-grow: 1;

    > :global(section) {
      margin-block-end: 6rem;
    }
  }
</style>
