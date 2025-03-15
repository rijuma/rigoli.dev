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
    display: flex;
    flex-direction: column;
    gap: var(--ui-page-section-gap);
    flex-grow: 1;
    padding-block: var(--ui-page-block-padding);
    width: 100%;
    box-sizing: border-box;
    margin-inline: auto;
  }

  @include bp(md) {
    main {
      padding-block-start: 6rem;
    }
  }
</style>
