<script lang="ts">
  import { CalendarClock } from '@lucide/svelte'
  import { CALENDLY_LINK, EMAIL } from '$lib/const'
  import { page } from '$app/state'

  import type { GithubUser } from '$lib/types'

  let github = $derived(page.data?.github) as GithubUser
</script>

<h2>Let's work together!</h2>

<div class="contact">
  Reach me at

  <a
    href={`mailto: ${EMAIL}`}
    class="button small hover-pulse email"
    target="_blank"
    rel="external nofollow"
  >
    {EMAIL}
  </a>

  {#if github.hireable}
    <div class="or">- or -</div>

    <a class="button hover-pulse" href={CALENDLY_LINK} target="_blank" rel="external nofollow">
      <CalendarClock /> Book a meeting
    </a>
  {/if}
</div>

<style lang="scss">
  .contact {
    text-align: center;
    padding-block: 2rem;
  }

  .email {
    margin-left: 0.5ch;
  }

  .or {
    padding: 1rem;
  }
</style>
