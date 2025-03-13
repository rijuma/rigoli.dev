<script>
  import { CalendarClock } from '@lucide/svelte'
  import { CALENDLY_LINK } from '$lib/const'
</script>

<h2>Let's work together</h2>

<div class="cta">
  <a href={CALENDLY_LINK} class="button outline" target="_blank" rel="external nofollow"
    ><CalendarClock /> Book a meeting</a
  >
</div>

<style lang="scss">
  .cta {
    text-align: center;
    padding-block: 3rem;
  }

  .button {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
</style>
