<script lang="ts">
  import { GITHUB_TAG, LINKEDIN_TAG, RESUME_URL } from '$lib/const'
  import { FileText, ExternalLink } from '@lucide/svelte'
  import { LinkedinIcon, GithubIcon } from './icons'
</script>

<ul class="links" aria-label="Social links and resume">
  <li>
    <a
      class="link linkedin"
      href={`https://www.linkedin.com/in/${LINKEDIN_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Linkedin profile"
    >
      <LinkedinIcon />
      <span>linkedin <ExternalLink /></span></a
    >
  </li>
  <li>
    <a
      class="link github"
      href={`https://github.com/${GITHUB_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Github profile"
    >
      <GithubIcon />
      <span>
        github <ExternalLink />
      </span></a
    >
  </li>
  <li>
    <a class="link block" href={RESUME_URL} target="_blank" rel="external nofollow">
      <FileText />
      <span>Resume <ExternalLink /></span>
    </a>
  </li>
</ul>

<style lang="scss">
  .links {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 0.5rem;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.5ch;
    transition: color 0.25s ease;
    border-radius: 0.2rem;

    :global(span svg) {
      font-size: 0.8rem;
    }
  }

  .link span {
    line-height: 1;
    display: none;
  }

  @include bp(md) {
    .link span {
      display: flex;
      gap: 0.5ch;
      align-items: flex-end;
    }
  }
</style>
