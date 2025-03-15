<script lang="ts">
  import { TopNavigation } from '$lib/components'

  type Props = {
    visible: boolean
  }
  let { visible }: Props = $props()
</script>

<div class:visible class="navigation" inert={!visible}>
  <div class="inner">
    <TopNavigation shadow />
  </div>
</div>

<style lang="scss">
  .navigation {
    position: fixed;
    inset: 0 0 auto;
    z-index: var(--ui-z-header);
    opacity: 0;
    transition: opacity 0.25s ease;

    &.visible {
      opacity: 1;

      .inner {
        transform: translateY(0);
      }
    }
  }

  .inner {
    position: absolute;
    inset: 0 0 auto;
    transform: translateY(-100%);
    transition: transform 0.25s ease;
  }
</style>
