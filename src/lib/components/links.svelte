<script lang="ts">
  import { GITHUB_TAG, LINKEDIN_TAG, RESUME_URL } from '$lib/const'
  import { FileText, ExternalLink } from '@lucide/svelte'
  import { LinkedinIcon, GithubIcon } from './icons'

  type Props = {
    compact?: boolean
  }
  let { compact = false }: Props = $props()
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
        <span class="label">linkedin&nbsp;<ExternalLink /></span>
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
        <span class="label">github&nbsp;<ExternalLink /></span>
      {/if}
    </a>
  </li>
  <li>
    <a class="link block" href={RESUME_URL} target="_blank" rel="external nofollow">
      <em style="view-transition-name: links-resume-icon;">
        <FileText />
      </em>
      {#if !compact}
        <span class="label">Resume&nbsp;<ExternalLink /></span>
      {/if}
    </a>
  </li>
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

    :global(span svg) {
      font-size: 0.8em;
    }
  }

  .link span.label {
    line-height: 1;
    display: none;
  }

  @include bp(md) {
    .link span.label {
      display: flex;
      align-items: flex-end;
    }
  }
</style>
