<script lang="ts">
  let { children } = $props()
</script>

<div class="page">
  {@render children()}
</div>

<style lang="scss">
  .page {
    max-width: 80ch;
    margin-inline: auto;
    padding: 2rem 1rem 1rem;
  }

  @include bp(md) {
    .page {
      padding: 6rem 3rem 3rem;
    }
  }
</style>
