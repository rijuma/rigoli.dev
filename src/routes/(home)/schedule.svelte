<script>
  import { CalendarClock } from '@lucide/svelte'
  import { CALENDLY_LINK } from '$lib/const'
</script>

<h2>Want to work together?</h2>

<div class="cta">
  <a href={CALENDLY_LINK} class="button outline" target="_blank" role="external nofollow"
    ><CalendarClock /> Let's meet!</a
  >
</div>

<style lang="scss">
  .cta {
    text-align: center;
    padding-block: 6rem;
  }
</style>
