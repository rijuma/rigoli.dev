<script lang="ts">
  import { GITHUB_TAG, LINKEDIN_TAG, RESUME_URL } from '$lib/const'
  import { FileText } from '@lucide/svelte'
</script>

<ul class="links" aria-label="Social links and resume">
  <li>
    <a
      class="link linkedin"
      href={`https://www.linkedin.com/in/${LINKEDIN_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Linkedin profile">linkedin</a
    >
  </li>
  <li>
    <a
      class="link github"
      href={`https://github.com/${GITHUB_TAG}`}
      target="_blank"
      rel="external nofollow"
      aria-label="Marcos' Github profile">github</a
    >
  </li>
  <li class="resume">
    <a class="button block" href={RESUME_URL} target="_blank" rel="external nofollow">
      <FileText />
      <span>Resume</span>
    </a>
  </li>

  <style lang="scss">
    .links {
      display: flex;
      font-size: 1.6em;
      align-items: center;
      gap: 0.5em;
    }

    .link {
      display: block;
      line-height: 1;
      transition: color 0.25s ease;
      border-radius: 0.2rem;
    }

    .resume {
      margin-inline-start: auto;

      .button {
        padding: 0;
      }

      span {
        font-size: 0.7em;
        display: none;
      }
    }

    @include bp(md) {
      .resume span {
        display: block;
      }
    }
  </style>
</ul>
