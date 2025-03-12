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
  <div class="frame">
    <a href="/" class="home"><NameTag name={NAME} tag={GITHUB_TAG} /></a>

    <Links compact />

    <ThemeSwitcher />
  </div>
</div>

<style lang="scss">
  .navigation {
    position: sticky;
    top: 0;
    background: var(--site-background);
    transform: box-shadow var(--transition-duration) ease;

    &.stuck {
      box-shadow: 0 0 5px 5px #0008;
    }
  }

  .home {
    color: currentColor;
    cursor: pointer !important;
  }

  .frame {
    display: flex;
    justify-content: space-between;
    max-width: var(--page-max-width);
    width: 100%;
    margin-inline: auto;
    padding: 0.5rem var(--page-inline-padding);
  }
</style>
