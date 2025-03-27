<script lang="ts">
  import { page } from '$app/state'
  import { Typewriter } from '$lib/components'
  import { transition } from '$lib/utils'

  let more = $state(false)
  let less = $state(false)

  const toggle = () =>
    transition(() => {
      if (more) less = false
      more = !more
    })

  const showLessButton = () => transition(() => (less = true))

  let github = $derived(page.data?.github)
</script>

<p>
  {github.bio}<br />
  {#if !more}
    <button class="button inline" type="button" onclick={toggle} aria-label="Read more about me"
      >...more</button
    >
  {/if}
</p>
{#if more}
  <div class="more" aria-live="polite">
    <Typewriter
      text={[
        "I'm a seasoned developer with more than 8 years on the field blending the art of design with programming skill to deliver an immersive, engaging and efficient user experience through best coding practices, proactive feature optimization and relentless debugging.",
        "I'm passionate about professional growth, learning and sharing knowledge.",
      ]}
      onEnd={showLessButton}
    />
  </div>
  <button
    class="button inline less"
    class:show={less}
    type="button"
    onclick={toggle}
    aria-label="Read less about me">less...</button
  >
{/if}

<style lang="scss">
  .button {
    font-size: 0.8rem;

    &.less {
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--ui-transition-duration) ease;

      &.show {
        opacity: 1;
        pointer-events: initial;
      }
    }
  }
</style>
