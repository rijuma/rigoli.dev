<script lang="ts">
  import { APP_REPO, NAME } from '$lib/const'
  import { ExternalLink } from '@lucide/svelte'

  const year = new Date().getFullYear()
</script>

<footer class="footer">
  &copy; {year}
  {NAME} &middot; Like the site?
  <a href={APP_REPO} target="_blank" rel="external nofollow">Check the repo <ExternalLink /></a>
</footer>

<style lang="scss">
  footer {
    font-size: 0.6rem;
    text-align: center;
    padding: 0.5rem 1rem;
  }

  a {
    display: inline-flex;
    gap: 0.5ch;
  }
</style>
