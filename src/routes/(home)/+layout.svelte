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
    padding: var(--ui-page-block-padding) var(--ui-page-inline-padding);
    max-width: var(--ui-page-max-width);
    width: 100%;
    box-sizing: border-box;
    margin-inline: auto;

    > :global(section) {
      margin-block-end: 6rem;
    }
  }

  @include bp(md) {
    main {
      padding-block-start: 6rem;
    }
  }
</style>
