<script lang="ts">
  import { page } from '$app/state'
  import { SiteFooter } from '$lib/components'
  import Seo from '$lib/components/seo.svelte'
  import FooterNavigation from './footer-navigation.svelte'
  import Navigation from './navigation.svelte'

  import type { TimelineEntry } from '$lib/types'
  import type { Snippet } from 'svelte'

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
    padding: 1rem var(--ui-page-inline-padding) 2rem;
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
  }

  @include bp(md) {
    main {
      padding-block: 4rem;
    }
  }
</style>
