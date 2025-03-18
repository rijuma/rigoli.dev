<script lang="ts">
  import '$lib/stores/color-mode.svelte' // Sets the color theme
  import PageViewTransitions from './page-view-transitions.svelte'
  import Seo from '$lib/components/seo.svelte'

  let { children } = $props()
</script>

<Seo />

<PageViewTransitions />

<div class="page">
  {@render children()}
</div>

<style lang="scss">
  .page {
    min-height: 100dvh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
