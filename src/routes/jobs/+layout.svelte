<script lang="ts">
  import Navigation from './navigation.svelte'
  import { page } from '$app/state'
  import { SiteFooter } from '$lib/components'
  import FooterNavigation from './footer-navigation.svelte'
  import Seo from '$lib/components/seo.svelte'

  import type { Snippet } from 'svelte'
  import type { TimelineEntry } from '$lib/types'

  let { children }: { children: Snippet } = $props()

  const current = $derived.by(() => {
    const slug = page.url.pathname.split('/').pop()
    const jobs = page.data?.jobs as TimelineEntry[]

    return jobs.find((job) => job.slug === slug)
  })
</script>

{#if current}
  <Seo title={current.name} />
{/if}

<Navigation />
<main class="markdown">
  <div class="container-md">
    {@render children()}
  </div>
</main>
<footer>
  <FooterNavigation />
</footer>
<SiteFooter />

<style lang="scss">
  main {
    flex-grow: 1;
    padding: 4rem var(--ui-page-inline-padding);
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
  }
</style>
