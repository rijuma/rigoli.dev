<script lang="ts">
  import { APP_REPO } from '$lib/const'

  const year = new Date().getFullYear()
</script>

<footer class="footer">
  &copy; {year} Marcos Rigoli &middot; Like the site?
  <a href={APP_REPO} target="_blank" rel="external nofollow">Check the repo</a>!
</footer>

<style lang="scss">
  footer {
    font-size: 0.6rem;
    text-align: center;
    padding: 0.5rem 1rem;
  }
</style>
