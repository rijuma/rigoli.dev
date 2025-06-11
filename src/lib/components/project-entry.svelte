<script lang="ts">
  import { ExternalLink } from '@lucide/svelte'
  import type { Snippet } from 'svelte'

  type Props = {
    title: string
    pic: string
    url?: string | string[]
    children: Snippet
  }
  let { title, pic, url, children }: Props = $props()

  const urls = $derived(Array.isArray(url) ? url : [url])
</script>

<div class="project-entry">
  <div class="heading">
    <h3>{title}</h3>
    {#if urls}
      <ul class="links">
        {#each urls as url}
          <li class="link">
            <a href={url} target="_blank" rel="external noopener">{url} <ExternalLink /></a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
  <div class="pic">
    {#if urls}
      <a href={urls[0]} target="_blank" rel="external noopener">
        <img src={pic} alt="Image preview for {title}." />
      </a>
    {:else}
      <img src={pic} alt="Image preview for {title}." />
    {/if}
  </div>
  <div class="content">
    {@render children?.()}
  </div>
</div>

<style lang="scss">
  .project-entry {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .pic {
    grid-area: pic;
  }

  .heading {
    grid-area: heading;

    h3 {
      margin-bottom: 0.3rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .content {
    grid-area: content;
  }

  .link a {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    font-size: 0.8rem;
  }

  @include bp(md) {
    .project-entry {
      display: grid;
      grid-template:
        'pic heading'
        'pic content';
    }

    .pic {
      padding-block: 0.3rem;
      max-width: 10rem;
    }
  }
</style>
