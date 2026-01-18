<script lang="ts">
  import { CALENDLY_LINK, EMAIL, GITHUB_TAG, LINKEDIN_TAG, RESUME_URL } from '$lib/const'
  import { FileText, ExternalLink, CalendarClock, AtSign } from '@lucide/svelte'
  import { LinkedinIcon, GithubIcon } from './icons'
  import { page } from '$app/state'

  type Props = {
    forceVertical?: boolean
  }
  let { forceVertical = false }: Props = $props()

  let github = $derived(page.data?.github)
</script>

<ul class="links" class:vertical={forceVertical} aria-label="Social links and resume">
  <li>
    <a
      class="link linkedin"
      href={`https://www.linkedin.com/in/${LINKEDIN_TAG}`}
      target="_blank"
      rel="noopener"
      aria-label="Marcos' Linkedin profile"
    >
      <LinkedinIcon />
      <div class="label">LinkedIn <ExternalLink /></div>
    </a>
  </li>
  <li>
    <a
      class="link github"
      href={`https://github.com/${GITHUB_TAG}`}
      target="_blank"
      rel="noopener"
      aria-label="Marcos' Github profile"
    >
      <GithubIcon />
      <div class="label">GitHub <ExternalLink /></div>
    </a>
  </li>
  <li>
    <a class="link block" href={RESUME_URL} target="_blank" rel="noopener">
      <FileText />
      <div class="label">Resume <ExternalLink /></div>
    </a>
  </li>
  {#if github?.hireable}
    <li>
      <a class="link block" href={CALENDLY_LINK} target="_blank" rel="noopener">
        <CalendarClock />
        <div class="label">Schedule a meeting <ExternalLink /></div>
      </a>
    </li>
  {:else}
    <li>
      <a class="link block" href={`mailto: ${EMAIL}`} target="_blank" rel="noopener">
        <AtSign />
        <div class="label">Email me</div>
      </a>
    </li>
  {/if}
</ul>

<style lang="scss">
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.5ch;
    transition: color 0.25s ease;
    border-radius: 0.2em;
    line-height: 1.5rem;

    :global(.lucide-icon) {
      font-size: 0.8em;
      margin-left: 0.5ch;
    }
  }

  .label {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  @include bp(md) {
    .links:not(.vertical) {
      flex-direction: row;
    }
  }
</style>
