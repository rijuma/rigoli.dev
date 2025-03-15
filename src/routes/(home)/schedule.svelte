<script lang="ts">
  import { CalendarClock } from '@lucide/svelte'
  import { CALENDLY_LINK } from '$lib/const'
  import { SpecialButton } from '$lib/components'
</script>

<h2>Let's work together!</h2>

<div class="cta">
  <SpecialButton href={CALENDLY_LINK} target="_blank" rel="external nofollow"
    ><CalendarClock /> Book a meeting</SpecialButton
  >
</div>

<style lang="scss">
  .cta {
    text-align: center;
    padding-block: 3rem;
  }
</style>
