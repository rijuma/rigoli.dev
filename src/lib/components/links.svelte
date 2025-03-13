<script lang="ts">
  import { CALENDLY_LINK, GITHUB_TAG, LINKEDIN_TAG, RESUME_URL } from '$lib/const'
  import { FileText, ExternalLink, CalendarClock } from '@lucide/svelte'
  import { LinkedinIcon, GithubIcon } from './icons'
  import { page } from '$app/state'

  type Props = {
    compact?: boolean
  }
  let { compact = false }: Props = $props()

  let github = $derived(page.data?.github)
</script>

<ul class="links" class:compact aria-label="Social links and resume">
  <li>
    <a
      class="link linkedin"
      href={`https://www.linkedin.com/in/${LINKEDIN_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Linkedin profile"
    >
      <em style="view-transition-name: links-linkedin-icon;">
        <LinkedinIcon />
      </em>
      {#if !compact}
        <div class="label">linkedin <ExternalLink /></div>
      {/if}
    </a>
  </li>
  <li>
    <a
      class="link github"
      href={`https://github.com/${GITHUB_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Github profile"
    >
      <em style="view-transition-name: links-github-icon;">
        <GithubIcon />
      </em>
      {#if !compact}
        <div class="label">github <ExternalLink /></div>
      {/if}
    </a>
  </li>
  <li>
    <a class="link block" href={RESUME_URL} target="_blank" rel="external nofollow">
      <em style="view-transition-name: links-resume-icon;">
        <FileText />
      </em>
      {#if !compact}
        <div class="label">Resume <ExternalLink /></div>
      {/if}
    </a>
  </li>
  {#if github.hireable}
    <li>
      <a class="link block" href={CALENDLY_LINK} target="_blank" rel="external nofollow">
        <em style="view-transition-name: links-resume-icon;">
          <CalendarClock />
        </em>
        {#if !compact}
          <div class="label">Schedule <ExternalLink /></div>
        {/if}
      </a>
    </li>
  {/if}
</ul>

<style lang="scss">
  .links {
    display: flex;
    align-items: center;
    gap: 1em;
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

  em {
    display: block;
  }

  .link .label {
    display: none;
  }

  @include bp(md) {
    .link .label {
      display: flex;
      align-items: center;
    }
  }
</style>
