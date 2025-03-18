<script lang="ts">
  import { page } from '$app/state'

  import type { TimelineEntry } from '$lib/types'
  import { ArrowLeft, ArrowRight } from '@lucide/svelte'

  let { prev, next } = $derived.by(() => {
    const slug = page.url.pathname.split('/').pop()
    const jobs = page.data?.jobs as TimelineEntry[]

    const jobIdx = jobs.findIndex((job) => job.slug === slug)

    if (jobIdx === -1) return { prev: null, next: null }

    return {
      next: jobIdx > 0 ? jobs[jobIdx - 1] : null,
      prev: jobIdx < jobs.length ? jobs[jobIdx + 1] : null,
    }
  })
</script>

<div class="footer-nav">
  <div class="container-md actions">
    <a class="button outline prev" href={prev ? `/jobs/${prev.slug}` : '/'}>
      <ArrowLeft />
      <div class="detail">
        <div class="label">Previous</div>
        {#if prev}
          <div class="description">{prev.name}</div>
        {:else}
          <div class="description">Back to Home</div>
        {/if}
      </div>
    </a>

    <a class="button outline next" href={next ? `/jobs/${next.slug}` : '/'}>
      <ArrowRight />
      <div class="detail">
        <div class="label">Next</div>
        {#if next}
          <div class="description">{next.name}</div>
        {:else}
          <div class="description">Back to Home</div>
        {/if}
      </div>
    </a>
  </div>
</div>

<style lang="scss">
  .footer-nav {
    padding: 4rem var(--ui-page-inline-padding);
    width: 100%;
    margin-inline: auto;
    box-sizing: border-box;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .button {
    flex: 0.5;
    display: flex;
    color: currentColor;
    justify-content: flex-start;
    border-radius: 0.6rem;
  }

  .prev {
    text-align: start;
  }

  .next {
    text-align: end;
    flex-direction: row-reverse;
  }

  .detail {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 1.2rem;
  }

  .description {
    font-weight: bold;
    font-size: 1.4rem;
  }

  @include bp(md) {
    .actions {
      flex-direction: row;
    }
  }
</style>
