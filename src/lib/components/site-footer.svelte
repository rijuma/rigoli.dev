<script lang="ts">
  import { APP_REPO, APP_WIKI, NAME } from '$lib/const'
  import { ExternalLink } from '@lucide/svelte'

  const year = new Date().getFullYear()
</script>

<footer class="footer">
  &copy; {year}
  {NAME} &middot; Like the site?
  <a href={APP_REPO} target="_blank" rel="external nofollow">Check the repo <ExternalLink /></a> or
  look at an
  <a href={APP_WIKI} target="_blank" rel="external nofollow">overview<ExternalLink /></a>.
</footer>

<style lang="scss">
  footer {
    font-size: 0.65rem;
    text-align: center;
    padding: 0.7rem 1rem;
  }

  a {
    display: inline-flex;
    gap: 0.5ch;
  }
</style>
