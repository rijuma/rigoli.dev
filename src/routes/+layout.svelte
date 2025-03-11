<script lang="ts">
  import '$lib/stores/color-mode.svelte' // Sets the color theme

  let { children } = $props()
</script>

<div class="page">
  {@render children()}
</div>

<style lang="scss">
  .page {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;

    max-width: 80ch;
    margin-inline: auto;
    padding: 2rem 1rem 1rem;
  }

  @include bp(md) {
    .page {
      padding: 6rem 3rem 0.5rem;
    }
  }
</style>
