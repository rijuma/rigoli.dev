<script lang="ts">
  import { colorMode } from '$lib/stores'
  import { transition } from '$lib/utils'
  import { Moon, Sun } from '@lucide/svelte'

  const toggle = () => {
    transition(() => {
      colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
    })
  }
</script>

<button
  class="theme-switcher button inline"
  onclick={toggle}
  aria-label="Toggles Light and Dark mode"
  aria-live="polite"
>
  {#if colorMode.value === 'dark'}
    <div class="animate-moon" aria-label="Dark mode enabled">
      <Moon />
    </div>
  {:else if colorMode.value === 'light'}
    <div class="animate-sun" aria-label="Light mode enabled">
      <Sun />
    </div>
  {/if}
</button>

<style lang="scss">
  .theme-switcher {
    display: block;
    view-transition-name: theme-switcher;
  }

  .animate-sun,
  .animate-moon {
    rotate: 0deg;
    transition:
      rotate var(--transition-duration) ease,
      opacity var(--transition-duration) ease;
    opacity: 1;

    @starting-style {
      opacity: 0.25;
    }
  }

  .animate-sun {
    @starting-style {
      rotate: -90deg;
    }
  }

  .animate-moon {
    @starting-style {
      rotate: 90deg;
    }
  }
</style>
