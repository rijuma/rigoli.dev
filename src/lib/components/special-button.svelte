<script lang="ts">
  // Kudos to Kevin Powell for this amazing design: https://www.youtube.com/watch?v=6xNcXwC6ikQ
  let { children, href, ...props } = $props()
</script>

{#if href}
  <a class="special-button button" role="button" {href} {...props}>{@render children()}</a>
{:else}
  <button class="special-button button" {...props}>{@render children()}</button>
{/if}

<style lang="scss">
  .special-button {
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 0.1rem;
    font-size: 1.25em;
    transition: 0.2s;
    border-radius: 0.5em;

    &:hover,
    &:focus {
      animation: pulse 1s;
      box-shadow: 0 0 0 2em transparent;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--ui-button-bg);
      }
    }
  }
</style>
