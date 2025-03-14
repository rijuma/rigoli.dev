<script>
  import { browser } from '$app/environment'
  import { Links, NameTag, ThemeSwitcher } from '$lib/components'
  import { GITHUB_TAG, NAME } from '$lib/const'

  const isStuck = () => (browser ? window.scrollY > 0 : false)

  let stuck = $state(isStuck())

  const handleScroll = () => (stuck = isStuck())
</script>

<svelte:window onscroll={handleScroll} />

<div class="navigation" class:stuck>
  <div class="frame container-md">
    <a href="/" class="home"><NameTag name={NAME} tag={GITHUB_TAG} /></a>

    <Links compact />

    <ThemeSwitcher />
  </div>
</div>

<style lang="scss">
  .navigation {
    position: sticky;
    top: 0;
    background: color-mix(in oklab, var(--ui-global-bg), transparent 30%);
    transform: box-shadow var(--ui-transition-duration) ease;
    z-index: var(--ui-z-header);
    backdrop-filter: blur(10px);

    &.stuck {
      box-shadow: 0 0 5px 5px #0005;
    }
  }

  .home {
    color: currentColor;
    cursor: pointer !important;
  }

  .frame {
    display: flex;
    justify-content: space-between;
    padding-block: 0.6rem;
  }
</style>
