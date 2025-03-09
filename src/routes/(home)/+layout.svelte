<script lang="ts">
  import { SiteFooter } from '$lib/components'

  let { children } = $props()
</script>

<div class="layout">
  <main>
    {@render children()}
  </main>
  <SiteFooter />
</div>

<style lang="scss">
  .layout {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
</style>
