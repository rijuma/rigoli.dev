<script lang="ts">
  import { NameTag, ThemeSwitcher } from '$lib/components'
  import { GITHUB_TAG, NAME } from '$lib/const'

  type Props = {
    shadow?: boolean
  }
  let { shadow = false }: Props = $props()
</script>

<div class="navigation" class:shadow>
  <div class="frame container-md">
    <a href="/" class="home"><NameTag name={NAME} tag={GITHUB_TAG} /></a>

    <div class="theme-switcher">
      <ThemeSwitcher />
    </div>
  </div>
</div>

<style lang="scss">
  .navigation {
    background: color-mix(in oklab, var(--ui-global-bg), transparent 30%);
    transform: box-shadow var(--ui-transition-duration) ease;
    backdrop-filter: blur(10px);

    &.shadow {
      box-shadow: 0 0 5px 5px #0005;
    }
  }

  .home {
    color: currentColor;
    cursor: pointer !important;
  }

  .frame {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-block: 0.6rem;
  }

  .theme-switcher {
    margin-inline-start: auto;
  }
</style>
