<script lang="ts">
  import { inview, type Options } from 'svelte-inview'
  import { Avatar, Links, NameTag, ThemeSwitcher } from '$lib/components'
  import { GITHUB_TAG, NAME } from '$lib/const'

  type Props = {
    onVisibilityChange?: (visible: boolean) => {}
  }
  let { onVisibilityChange }: Props = $props()

  const options: Options = {
    rootMargin: '0px',
  }
</script>

<div
  class="heading"
  use:inview={options}
  oninview_change={(event) => onVisibilityChange?.(event.detail.inView)}
>
  <Avatar />
  <div class="info">
    <NameTag name={NAME} tag={GITHUB_TAG} />
    <div class="actions">
      <Links />
      <span class="theme-switcher">
        <ThemeSwitcher />
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    font-size: 1.2rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    max-width: 10em;
    margin-top: 0.6em;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .theme-switcher {
    position: absolute;
    inset: 1rem 1rem auto auto;
  }

  @include bp(md) {
    .heading {
      flex-direction: row;
      gap: 1em;
      font-size: 1rem;
    }

    .actions {
      justify-content: space-between;
    }

    .info {
      max-width: none;
      align-items: flex-start;
      margin-top: 0;
      gap: 0.25rem;
    }

    .theme-switcher {
      position: static;
    }
  }
</style>
